import { InfoTermsType } from "./defineCIFP.js";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as util from "util";
const readFile = util.promisify(fs.readFile);

const cifpPathFile = path.join(".", "data", "cifpPath.txt");

const cifpPath = await readFile(cifpPathFile, "utf8");

interface Fix {
  name: string;
  lat: string;
  lon: string;
}

export function getFixes(data: InfoTermsType): void {
  const fixes: Fix[] = [];

  fixes.push({ name: data.fixIdent, lat: "", lon: "" });

  getCoords(fixes);
}

export function getCoords(fixes: Fix[]): void {
  const coords: Fix[] = [];

  const contents = fs.readFileSync(`${cifpPath}/earth_fix.dat`, "utf8");
  const lines = contents.split(os.EOL);

  for (const line of lines) {
    const info = line.split(/\s+/);
    const lat = info[1];
    const lon = info[2];
    const fix = info[3];

    for (const fixObj of fixes) {
      if (fixObj.name === fix) {
        fixObj.lat = lat;
        fixObj.lon = lon;
        coords.push(fixObj);
        break;
      }
    }
  }

  console.log(coords);
}
