import * as fs from "fs";
import * as util from "util";
import * as os from "os";
import inquirer from "inquirer";
import readline from "readline";
import path from "path";
import { defineCIFP, InfoTermsType } from "./defineCIFP.js";

const readFile = util.promisify(fs.readFile);
const airportCode = (process.argv[2] || "").toUpperCase();
const airportProcedure = (process.argv[3] || "").toUpperCase();

async function getCIFPFolder() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const response = await inquirer.prompt([
    {
      type: "input",
      name: "cifpPath",
      message: "Enter the path to the Custom Data CIFP directory (e.g. D:\\X-Plane\\Custom Data\\CIFP):",
    },
  ]);

  fs.writeFileSync(path.join(".", "data", "cifpPath.txt"), response.cifpPath);
  rl.close();
}

/**
 * Reads every file in the CIFP directory and extracts the specified information.
 * @param procedure The procedure type to extract.
 * @param filePath The path to the CIFP directory.
 * @param filterFile The file to extract from.
 */

async function extractCIFP(procedure: string, filePath: string, filterFile?: string): Promise<InfoTermsType[]> {
  const files = await fs.promises.readdir(filePath);
  const cifpInfo: InfoTermsType[] = [];

  const targetFiles = filterFile ? [`${filterFile}.dat`] : files;

  for (const file of targetFiles) {
    const contents = await readFile(`${filePath}/${file}`, "utf8");
    const lines = contents.split(os.EOL).map((line) => line.slice(line.indexOf(":") + 1));

    for (const line of lines) {
      const info = line.split(",");
      const proc = info[2];

      if (proc === procedure) {
        const parsedData: InfoTermsType = await defineCIFP(info);

        cifpInfo.push(parsedData);
      }
    }
  }

  return cifpInfo;
}

/**
 * Extract all unique procedures from the data files.
 * @param filePath The path to the CIFP directory.
 * @param airport The airport to extract procedures from.
 */
async function getAllProcedures(filePath: string, airport: string): Promise<string[]> {
  const files = await fs.promises.readdir(filePath);
  const proceduresSet = new Set<string>();

  const targetFiles = airport ? [`${airport}.dat`] : files;

  for (const file of targetFiles) {
    const contents = await readFile(`${filePath}/${file}`, "utf8");
    const lines = contents.split(os.EOL).map((line) => line.slice(line.indexOf(":") + 1));

    for (const line of lines) {
      const info = line.split(",");
      const proc = info[2];

      if (proc !== "A") {
        proceduresSet.add(proc);
      }
    }
  }

  return Array.from(proceduresSet).filter((proc) => proc && proc.trim() !== "");
}

/**
 * Prompt the user to select a procedure type from a list.
 * @param filePath The path to the CIFP directory.
 */
async function getProcedureFromUser(filePath: string): Promise<string> {
  const procedures = await getAllProcedures(filePath, airportCode);

  const response = await inquirer.prompt([
    {
      type: "list",
      name: "procedure",
      message: "Select a procedure:",
      choices: procedures,
    },
  ]);

  return response.procedure;
}

async function main() {
  const cifpPathFile = path.join(".", "data", "cifpPath.txt");

  if (!fs.existsSync(cifpPathFile)) {
    await getCIFPFolder();
  }

  const cifpPath = await readFile(cifpPathFile, "utf8");

  let selectedProcedure = airportProcedure;
  if (airportCode) {
    if (!airportProcedure) {
      selectedProcedure = await getProcedureFromUser(cifpPath);
    }

    extractCIFP(selectedProcedure, cifpPath, airportCode).then((data) => {
      console.log(data);
    });
  } else {
    console.log("Please provide an airport code.");
  }
}

main().catch((err) => {
  console.error("An error occurred:", err);
});
