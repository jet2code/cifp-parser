import * as fs from "fs";
import * as util from "util";
import * as os from "os";
import path from "path";
import { getCIFPFolder } from "./main.js";

const readFile = util.promisify(fs.readFile);


interface Leg {
  /**
   * The name of the airport.
   */
  airport: string;
  /**
   * The leg type.
   */
  pathTerm: string;
}

const cifpPathFile = path.join(".", "data", "cifpPath.txt");
const cifpPath = await readFile(cifpPathFile, "utf8");

/**
 * Reads every file in the CIFP directory and extracts the approach information.
 */
async function processCIFP(): Promise<Leg[]> {
  const files = await fs.promises.readdir(`${cifpPath}/CIFP`);
  const Legs: Leg[] = [];
  for (const file of files) {
    const contents = await readFile(`${cifpPath}/CIFP/${file}`, "utf8");
    const lines = contents.split(os.EOL);
    for (let i = 0; i < lines.length - 1; i++) {
      if (lines[i].startsWith("APPCH") && lines[i + 1].startsWith("APPCH")) {
        const airport = `${file}`.split(".")[0];
        const legCurrent = lines[i].split(",")[11];
        const legNext = lines[i + 1].split(",")[11];
        Legs.push({
          airport: airport,
          pathTerm: `${legCurrent} --> ${legNext}`, 
        });
      }
    }
  }
  return Legs;
}

/**
 * Sort by highest number of common leg types.
 */
async function sortLegs(): Promise<void> {
  const legs = await processCIFP();
  const legTypes: { [key: string]: number } = {};

  for (const leg of legs) {
    if (legTypes[leg.pathTerm]) {
      legTypes[leg.pathTerm]++;
    } else {
      legTypes[leg.pathTerm] = 1;
    }
  }

  const sortedLegs = Object.entries(legTypes).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < sortedLegs.length; i++) {
    console.log(`${i + 1}. ${sortedLegs[i][0]} - ${sortedLegs[i][1]}`);
  }
}

sortLegs();
