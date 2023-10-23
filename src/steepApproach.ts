/**
 * Reads all files in the CIFP directory, extracts the steepest approaches from each file, and returns the top 20 steepest approaches.
 */

import * as fs from "fs";
import * as util from "util";
import * as os from "os";
import path from "path";
import { getCIFPFolder } from "./main.js";

const readFile = util.promisify(fs.readFile);

/**
 * Represents an approach of an airport.
 */
interface Approach {
  /**
   * The name of the airport.
   */
  airport: string;
  /**
   * The identifier for the approach.
   */
  ident: string;
  /**
   * The angle of the approach.
   */
  angle: string;
}

const cifpPathFile = path.join(".", "data", "cifpPath.txt");
const cifpPath = await readFile(cifpPathFile, "utf8");

/**
 * Reads every file in the CIFP directory and extracts the approach information.
 */
async function processCIFP(): Promise<Approach[]> {
  const files = await fs.promises.readdir(`${cifpPath}/CIFP`);
  const approaches: Approach[] = [];
  for (const file of files) {
    const contents = await readFile(`${cifpPath}/CIFP/${file}`, "utf8");

    const lines = contents.split(os.EOL);

    for (const line of lines) {
      if (line.startsWith("APPCH") && line.split(",")[28].includes("-")) {
        const airport = `${file}`.split(".")[0];
        const approach = line.split(",");

        approaches.push({
          airport: airport,
          ident: approach[2],
          angle: approach[28],
        });
      }
    }
  }

  return approaches;
}

/**
 * Retrieves the steepest approaches from the processed CIFP data.
 */
async function getSteepestApproaches(): Promise<Approach[]> {
  const approaches = await processCIFP();

  approaches.sort((a, b) => {
    return parseFloat(a.angle) - parseFloat(b.angle);
  });

  const uniqueApproaches: Approach[] = [];
  for (const approach of approaches) {
    if (
      !uniqueApproaches.some(
        (a) => a.airport === approach.airport && a.ident === approach.ident
      )
    ) {
      uniqueApproaches.push(approach);
    }
  }

  return uniqueApproaches.slice(0, 100);
}

getSteepestApproaches().then((approaches) => {
  console.log(approaches);
});
