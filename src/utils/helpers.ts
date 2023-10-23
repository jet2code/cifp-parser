import { open } from "@tauri-apps/api/dialog";
import { desktopDir } from "@tauri-apps/api/path";
import { readTextFile } from "@tauri-apps/api/fs";
import { InfoTermsType } from "../types/navDataTypes";
import parseProcedure from "../services/parseNavData";

export async function selectFolder() {
  return await open({
    directory: true,
    multiple: false,
    defaultPath: await desktopDir(),
  });
}

export function setFolder(folder: string) {
  localStorage.setItem("folder", folder);
}

export function getFolder() {
  return localStorage.getItem("folder") || null;
}

export async function getAirportProcedures(airport: string) {
  try {
    const namedSet = new Set<string>();
    const identSet = new Set<string>();
    const nameToIdentMap: Record<string, string> = {};

    const airportData = await readTextFile(
      `${getFolder()}/CIFP/${airport}.dat`,
    );
    const lines = airportData.split(/\r?\n/);

    for (const line of lines) {
      const [type, data] = line.split(":", 2);

      if (!type || !data) continue;

      if (type === "APPCH") {
        const procedureInfo = data.split(",");
        const procedureName = procedureInfo[2];
        const parsedName = await parseApproach(procedureName);
        namedSet.add(parsedName.trim());
        identSet.add(procedureName.trim());
        nameToIdentMap[parsedName.trim()] = procedureName.trim();
      }

      const airportCIFP = data.split(",");
      const airportProcedures = airportCIFP[2];
      if (type !== "APPCH" && airportProcedures && airportProcedures !== "A") {
        namedSet.add(airportProcedures.trim());
        identSet.add(airportProcedures.trim());
      }
    }

    return {
      namedProcedures: Array.from(namedSet).filter((proc) => proc !== ""),
      identProcedures: Array.from(identSet).filter((proc) => proc !== ""),
      nameToIdentMap: nameToIdentMap,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Airport not found");
  }
}

export async function extractProcedureInfo(
  airport: string,
  procedureIdent: string,
) {
  try {
    const cifpInfo: InfoTermsType[] = [];
    const procedureData = await readTextFile(
      `${getFolder()}/CIFP/${airport}.dat`,
    );
    const lines = procedureData
      .split(/\r?\n/)
      .map((line) => line.slice(line.indexOf(":") + 1));

    for (const line of lines) {
      const procedureInfo = line.split(",");
      const currentProcedureName = procedureInfo[2];

      if (procedureIdent === currentProcedureName) {
        const parsedData: InfoTermsType = await parseProcedure(procedureInfo);
        cifpInfo.push(parsedData);
      }
    }

    return cifpInfo;
  } catch (error) {
    throw new Error("Procedure not found");
  }
}

async function parseApproach(procedureName: string) {
  const approachMap: { [key: string]: string } = {
    B: "LOC BC",
    D: "VOR/DME",
    F: "Unknown",
    G: "IGS",
    H: "Unknown",
    I: "ILS",
    J: "RNAV",
    L: "LOC",
    M: "MLS",
    N: "NDB",
    P: "GPS",
    Q: "NDB/DME",
    R: "RNAV",
    S: "VOR",
    T: "TACAN",
    U: "Unknown",
    V: "VOR",
    W: "MLS",
    X: "LDA",
    Y: "MLS",
    Z: "Unknown",
  };

  if (!procedureName.match(/\d/)) {
    let approachType = approachMap[procedureName[0]] || "Unknown";

    return `${approachType} ${procedureName.slice(-1)}`;
  }

  const singleRunway = procedureName.match(/(\D*\d){2,}/);
  const multipleRunways = procedureName.match(/(\D*\d){2,}([LCR])/);
  const combinedRunways = { ...singleRunway, ...multipleRunways };

  if (combinedRunways) {
    let approachType = approachMap[procedureName[0]] || "Unknown";

    const runway = combinedRunways[0]?.slice(1);

    if (procedureName.includes("-")) {
      const approachUniqueID = procedureName.split("-")[1];
      return `${approachType} ${runway} ${approachUniqueID}`;
    }

    return `${approachType} ${runway}`;
  }

  return procedureName;
}

export function getTheme() {
  if (localStorage.theme === "dark") {
    return "dark";
  } else if (localStorage.theme === "light") {
    return "light";
  }
}
