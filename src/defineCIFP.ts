export interface InfoTermsType {
  readonly seqNumber: string;
  rteType: string;
  readonly ident: string;
  readonly transIdent: string;
  readonly fixIdent: string;
  readonly icaoCode: string;
  secCode: string;
  subCode: string;
  descCode: string;
  turnDr: string;
  readonly RNP: string;
  pathTerm: string;
  readonly tdv: string;
  readonly recdNavaid: string;
  readonly icaoCode2: string;
  readonly secCode2: string;
  readonly subCode2: string;
  readonly arcRadius: string;
  readonly theta: string;
  readonly rho: string;
  magCourse: string;
  readonly rteDistHoldTime: string;
  readonly altDesc: string;
  alt1: string;
  alt2: string;
  readonly transAlt: string;
  readonly spdLmtDiscriminator: string;
  spdLimit: string;
  readonly vertAngle: string;
  readonly vertScaleFactor: string;
  readonly ctrFixIdent: string;
  readonly icaoCode3: string;
  readonly secCode3: string;
  readonly subCode3: string;
  readonly multicd: string;
  gnssFms: string;
  rteQual1: string;
  rteQual2: string;
}

/**
 *
 * @param info Information to be parsed into an object from the CIFP file.
 */
export async function defineCIFP(info: any): Promise<typeof infoTerms> {
  const infoTerms: InfoTermsType = {
    seqNumber: info[0],
    rteType: info[1],
    ident: info[2],
    transIdent: info[3],
    fixIdent: info[4],
    icaoCode: info[5],
    secCode: info[6],
    subCode: info[7],
    descCode: info[8],
    turnDr: info[9],
    RNP: info[10],
    pathTerm: info[11],
    tdv: info[12],
    recdNavaid: info[13],
    icaoCode2: info[14],
    secCode2: info[15],
    subCode2: info[16],
    arcRadius: info[17],
    theta: info[18],
    rho: info[19],
    magCourse: info[20],
    rteDistHoldTime: info[21],
    altDesc: info[22],
    alt1: info[23],
    alt2: info[24],
    transAlt: info[25],
    spdLmtDiscriminator: info[26],
    spdLimit: info[27],
    vertAngle: info[28],
    vertScaleFactor: info[29],
    ctrFixIdent: info[30],
    icaoCode3: info[31],
    secCode3: info[32],
    subCode3: info[33],
    multicd: info[34],
    gnssFms: info[35],
    rteQual1: info[36],
    rteQual2: info[37],
  };

  switch (infoTerms.secCode) {
    case "A":
      infoTerms.secCode = `${infoTerms.secCode} (MORA)`;
      switch (infoTerms.subCode) {
        case "S":
          infoTerms.subCode = `${infoTerms.subCode} (Grid MORA)`;
          break;
      }
      break;
    case "D":
      infoTerms.secCode = `${infoTerms.secCode} (Navaid)`;
      switch (infoTerms.subCode) {
        case " ":
          infoTerms.subCode = `${infoTerms.subCode} (VHF Navaid)`;
          break;
        case "B":
          infoTerms.subCode = `${infoTerms.subCode} (NDB Navaid)`;
          break;
        case "T":
          infoTerms.subCode = `${infoTerms.subCode} (TACAN Duplicates)`;
          break;
      }
      break;
    case "E":
      infoTerms.secCode = `${infoTerms.secCode} (Enroute)`;
      switch (infoTerms.subCode) {
        case "A":
          infoTerms.subCode = `${infoTerms.subCode} (Waypoints)`;
          break;
        case "M":
          infoTerms.subCode = `${infoTerms.subCode} (Airway Markers)`;
          break;
        case "P":
          infoTerms.subCode = `${infoTerms.subCode} (Holding Patterns)`;
          break;
      }
      break;
    case "H":
      infoTerms.secCode = `${infoTerms.secCode} (Heliport)`;
      switch (infoTerms.subCode) {
        case "A":
          infoTerms.subCode = `${infoTerms.subCode} (Pads)`;
          break;
        case "C":
          infoTerms.subCode = `${infoTerms.subCode} (Terminal Waypoints)`;
          break;
        case "D":
          infoTerms.subCode = `${infoTerms.subCode} (SIDs)`;
          break;
        case "E":
          infoTerms.subCode = `${infoTerms.subCode} (STARs)`;
          break;
        case "F":
          infoTerms.subCode = `${infoTerms.subCode} (Approach Procedures)`;
          break;
        case "K":
          infoTerms.subCode = `${infoTerms.subCode} (TAA)`;
          break;
        case "S":
          infoTerms.subCode = `${infoTerms.subCode} (MSA)`;
          break;
      }
      break;
    case "P":
      infoTerms.secCode = `${infoTerms.secCode} (Airport)`;
      switch (infoTerms.subCode) {
        case "A":
          infoTerms.subCode = `${infoTerms.subCode} (Reference Points)`;
          break;
        case "B":
          infoTerms.subCode = `${infoTerms.subCode} (Gates)`;
          break;
        case "C":
          infoTerms.subCode = `${infoTerms.subCode} (Terminal Waypoints)`;
          break;
        case "D":
          infoTerms.subCode = `${infoTerms.subCode} (SIDs)`;
          break;
        case "E":
          infoTerms.subCode = `${infoTerms.subCode} (STARs)`;
          break;
        case "F":
          infoTerms.subCode = `${infoTerms.subCode} (Approach Procedures)`;
          break;
        case "G":
          infoTerms.subCode = `${infoTerms.subCode} (Runways)`;
          break;
        case "I":
          infoTerms.subCode = `${infoTerms.subCode} (Localizer/Glide Slope)`;
          break;
        case "K":
          infoTerms.subCode = `${infoTerms.subCode} (TAA)`;
          break;
        case "L":
          infoTerms.subCode = `${infoTerms.subCode} (MLS)`;
          break;
        case "M":
          infoTerms.subCode = `${infoTerms.subCode} (Localizer Marker)`;
          break;
        case "N":
          infoTerms.subCode = `${infoTerms.subCode} (Terminal NDB)`;
          break;
        case "P":
          infoTerms.subCode = `${infoTerms.subCode} (SBAS Path Point)`;
          break;
        case "Q":
          infoTerms.subCode = `${infoTerms.subCode} (GBAS Path Point)`;
          break;
        case "R":
          infoTerms.subCode = `${infoTerms.subCode} (Flt Planning ARR/DEP)`;
          break;
        case "S":
          infoTerms.subCode = `${infoTerms.subCode} (MSA)`;
          break;
        case "T":
          infoTerms.subCode = `${infoTerms.subCode} (GLS Station)`;
          break;
        case "V":
          infoTerms.subCode = `${infoTerms.subCode} (Communications)`;
          break;
      }
      break;
  }

  // SID Field Definitions
  if (infoTerms.seqNumber.startsWith("SID")) {
    switch (infoTerms.rteType) {
      case "0":
        infoTerms.rteType = `${infoTerms.rteType} (Engine Out SID)`;
        break;
      case "1":
        infoTerms.rteType = `${infoTerms.rteType} (SID Runway Transition)`;
        break;
      case "2":
        infoTerms.rteType = `${infoTerms.rteType} (SID or SID Common Route)`;
        break;
      case "3":
        infoTerms.rteType = `${infoTerms.rteType} (SID Enroute Transition)`;
        break;
      case "4":
        infoTerms.rteType = `${infoTerms.rteType} (RNP SID Runway Transition)`;
        break;
      case "5":
        infoTerms.rteType = `${infoTerms.rteType} (RNP SID or SID Common Route)`;
        break;
      case "6":
        infoTerms.rteType = `${infoTerms.rteType} (RNP SID Enroute Transition)`;
        break;
      case "T":
        infoTerms.rteType = `${infoTerms.rteType} (Vector SID Runway Transition)`;
        break;
      case "V":
        infoTerms.rteType = `${infoTerms.rteType} (Vector SID Enroute Transition)`;
        break;
    }
  }

  // STAR Field Definitions
  if (infoTerms.seqNumber.startsWith("STAR")) {
    switch (infoTerms.rteType) {
      case "1":
        infoTerms.rteType = `${infoTerms.rteType} (STAR Enroute Transition)`;
        break;
      case "2":
        infoTerms.rteType = `${infoTerms.rteType} (STAR or STAR Common Route)`;
        break;
      case "3":
        infoTerms.rteType = `${infoTerms.rteType} (STAR Runway Transition)`;
        break;
      case "6":
        infoTerms.rteType = `${infoTerms.rteType} (RNP STAR Enroute Transition)`;
        break;
      case "5":
        infoTerms.rteType = `${infoTerms.rteType} (RNP STAR or STAR Common Route)`;
        break;
      case "4":
        infoTerms.rteType = `${infoTerms.rteType} (RNP STAR Runway Transition)`;
        break;
    }
  }

  if (infoTerms && infoTerms.descCode) {
    let descCode = infoTerms.descCode.split("");

    // DescCode Field Definitions
    switch (descCode[0]) {
      case "A":
        infoTerms.descCode = `${infoTerms.descCode} (Airport as Waypoint)`;
        break;
      case "E":
        infoTerms.descCode = `${infoTerms.descCode} (Essential Waypoint)`;
        break;
      case "F":
        infoTerms.descCode = `${infoTerms.descCode} (Off Airway Floating Waypoint)`;
        break;
      case "G":
        infoTerms.descCode = `${infoTerms.descCode} (Runway as Waypoint)`;
        break;
      case "H":
        infoTerms.descCode = `${infoTerms.descCode} (Heliport as Waypoint)`;
        break;
      case "N":
        infoTerms.descCode = `${infoTerms.descCode} (NDB Navaid as Waypoint)`;
        break;
      case "P":
        infoTerms.descCode = `${infoTerms.descCode} (Phantom Waypoint)`;
        break;
      case "R":
        infoTerms.descCode = `${infoTerms.descCode} (Non-Essential Waypoint)`;
        break;
      case "T":
        infoTerms.descCode = `${infoTerms.descCode} (Transition Essential Waypoint)`;
        break;
      case "V":
        infoTerms.descCode = `${infoTerms.descCode} (VHF Navaid as Waypoint)`;
        break;
    }

    switch (descCode[1]) {
      case "B":
        infoTerms.descCode = `${infoTerms.descCode} (Flyover Waypoint, Ending leg)`;
        break;
      case "E":
        infoTerms.descCode = `${infoTerms.descCode} (End of Continuous Segment)`;
        break;
      case "U":
        infoTerms.descCode = `${infoTerms.descCode} (Uncharted Airway Intersection)`;
        break;
      case "Y":
        infoTerms.descCode = `${infoTerms.descCode} (Fly-Over Waypoint)`;
        break;
    }

    switch (descCode[2]) {
      case "A":
        infoTerms.descCode = `${infoTerms.descCode} (Unnamed Stepdown Fix Final Approach Segment)`;
        break;
      case "B":
        infoTerms.descCode = `${infoTerms.descCode} (Unnamed Stepdown Fix Intermediate Approach Segment)`;
        break;
      case "C":
        infoTerms.descCode = `${infoTerms.descCode} (ATC Compulsory Reporting Point)`;
        break;
      case "G":
        infoTerms.descCode = `${infoTerms.descCode} (Oceanic Gateway Waypoint)`;
        break;
      case "M":
        infoTerms.descCode = `${infoTerms.descCode} (First Leg of Missed Approach Procedure)`;
        break;
      case "R":
        infoTerms.descCode = `${infoTerms.descCode} (Fix used for turning final approach)`;
        break;
      case "S":
        infoTerms.descCode = `${infoTerms.descCode} (Named Stepdown Fix)`;
        break;
    }

    switch (descCode[3]) {
      case "A":
        infoTerms.descCode = `${infoTerms.descCode} (Initial Approach Fix)`;
        break;
      case "B":
        infoTerms.descCode = `${infoTerms.descCode} (Intermediate Approach Fix)`;
        break;
      case "C":
        infoTerms.descCode = `${infoTerms.descCode} (Holding at Initial Approach Fix)`;
        break;
      case "D":
        infoTerms.descCode = `${infoTerms.descCode} (Initial Approach Fix at FACF)`;
        break;
      case "E":
        infoTerms.descCode = `${infoTerms.descCode} (Final End Point)`;
        break;
      case "F":
        infoTerms.descCode = `${infoTerms.descCode} (Final Approach Fix)`;
        break;
      case "G":
        infoTerms.descCode = `${infoTerms.descCode} (Source provided Enroute Waypoint without Holding)`;
        break;
      case "H":
        infoTerms.descCode = `${infoTerms.descCode} (Source provided Enroute Waypoint with Holding)`;
        break;
      case "I":
        infoTerms.descCode = `${infoTerms.descCode} (Final Approach Course Fix)`;
        break;
      case "M":
        infoTerms.descCode = `${infoTerms.descCode} (Missed Approach Point)`;
        break;
      case "N":
        infoTerms.descCode = `${infoTerms.descCode} (Engine Out SID Missed Approach Disarm Point)`;
        break;
    }
  }

  if (infoTerms && infoTerms.pathTerm) {
    switch (infoTerms.pathTerm) {
      case "IF":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Initial Fix)`;
        break;
      case "TF":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Track to a Fix)`;
        break;
      case "CF":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Course to a Fix)`;
        break;
      case "DF":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Direct to a Fix)`;
        break;
      case "FA":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Fix to an Altitude)`;
        break;
      case "FC":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Track from a Fix from a Distance)`;
        break;
      case "FD":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Track from a Fix to a DME Distance)`;
        break;
      case "FM":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (From a fix to a Manual termination)`;
        break;
      case "CA":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Course to an Altitude)`;
        break;
      case "CD":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Course to a DME Distance)`;
        break;
      case "CI":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Course to an Intercept)`;
        break;
      case "CR":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Course to a Radial termination)`;
        break;
      case "RF":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Constant Radius Arc)`;
        break;
      case "AF":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Arc to a Fix)`;
        break;
      case "VA":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Heading to an Altitude termination)`;
        break;
      case "VD":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Heading to a DME Distance termination)`;
        break;
      case "VI":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Heading to an Intercept termination)`;
        break;
      case "VM":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Heading to a Manual termination)`;
        break;
      case "VR":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Heading to a Radial termination)`;
        break;
      case "PI":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Procedure Turn)`;
        break;
      case "HA":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Hold to an Altitude termination)`;
        break;
      case "HF":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Hold in lieu of Procedure Turn)`;
        break;
      case "HM":
        infoTerms.pathTerm = `${infoTerms.pathTerm} (Hold to a Manual termination)`;
        break;
    }
  }

  if (infoTerms && infoTerms.turnDr) {
    switch (infoTerms.turnDr) {
      case "L":
        infoTerms.turnDr = `${infoTerms.turnDr} (Left Turn)`;
        break;
      case "R":
        infoTerms.turnDr = `${infoTerms.turnDr} (Right Turn)`;
        break;
    }
  }

  if (infoTerms && infoTerms.magCourse) {
    if (infoTerms.magCourse[infoTerms.magCourse.length - 1] == "0") {
      infoTerms.magCourse = infoTerms.magCourse.slice(0, -1);
    }

    infoTerms.magCourse = `${infoTerms.magCourse}°`;
  }

  if ((infoTerms && infoTerms.alt1) || infoTerms.alt2) {
    if (infoTerms.alt1) {
      if (infoTerms.alt1[1] == "0" && infoTerms.alt1[2] != "0") {
        infoTerms.alt1 = infoTerms.alt1.slice(2);
      }
    }

    if (infoTerms.alt2) {
      if (infoTerms.alt2[1] == "0" && infoTerms.alt2[2] != "0") {
        infoTerms.alt2 = infoTerms.alt2.slice(2);
      }
    }

    if (infoTerms.alt1) {
      infoTerms.alt1 = `${infoTerms.alt1}ft`;
    }

    if (infoTerms.alt2) {
      infoTerms.alt2 = `${infoTerms.alt2}ft`;
    }
  }

  if (infoTerms && infoTerms.spdLimit) {
    infoTerms.spdLimit = `${infoTerms.spdLimit}kts`;
  }

  if (infoTerms && infoTerms.gnssFms) {
    switch (infoTerms.gnssFms) {
      case "0":
        infoTerms.gnssFms = `${infoTerms.gnssFms} (Procedure Not Authorized for GNSS or FMS Overlay)`;
        break;
      case "1":
        infoTerms.gnssFms = `${infoTerms.gnssFms} (Procedure Authorized for GNSS Overlay, primary Navaids operating and monitored)`;
        break;
      case "2":
        infoTerms.gnssFms = `${infoTerms.gnssFms} (Procedure Authorized for GNSS Overlay, primary Navaids installed, not monitored)`;
        break;
      case "3":
        infoTerms.gnssFms = `${infoTerms.gnssFms} (Procedure Authorized for GNSS Overlay, Procedure Title includes GPS or GNSS)`;
        break;
      case "4":
        infoTerms.gnssFms = `${infoTerms.gnssFms} (Procedure Authorized for FMS Overlay)`;
        break;
      case "A":
        infoTerms.gnssFms = `${infoTerms.gnssFms} (SBAS-based vertical navigation authorized)`;
        break;
      case "B":
        infoTerms.gnssFms = `${infoTerms.gnssFms} (SBAS-based vertical navigation not authorized)`;
        break;
      case "C":
        infoTerms.gnssFms = `${infoTerms.gnssFms} (SBAS-based vertical navigation not published)`;
        break;
      case "D":
        infoTerms.gnssFms = `${infoTerms.gnssFms} (SBAS authorized only for lateral navigation)`;
        break;
      case "P":
        infoTerms.gnssFms = `${infoTerms.gnssFms} (Stand Alone GPS (GNSS) Procedure)`;
        break;
      case "U":
        infoTerms.gnssFms = `${infoTerms.gnssFms} (Procedure Overlay Authorization not published)`;
        break;
    }
  }

  if (infoTerms && infoTerms.rteQual1) {
    switch (infoTerms.rteQual1) {
      case "B":
        infoTerms.rteQual1 = `${infoTerms.rteQual1} (RNAV Visual Procedure)`;
        break;
      case "D":
        infoTerms.rteQual1 = `${infoTerms.rteQual1} (DME Required)`;
        break;
      case "J":
        infoTerms.rteQual1 = `${infoTerms.rteQual1} (GPS (GNSS) required, DME/DME to RNP not authorized)`;
        break;
      case "F":
        infoTerms.rteQual1 = `${infoTerms.rteQual1} (RNP SAAAR/AR)`;
        break;
      case "A":
        infoTerms.rteQual1 = `${infoTerms.rteQual1} (Advanced)`;
        break;
      case "L":
        infoTerms.rteQual1 = `${infoTerms.rteQual1} (GBAS Procedure)`;
        break;
      case "N":
        infoTerms.rteQual1 = `${infoTerms.rteQual1} (DME Not Required)`;
        break;
      case "P":
        infoTerms.rteQual1 = `${infoTerms.rteQual1} (GNSS Required)`;
        break;
      case "R":
        infoTerms.rteQual1 = `${infoTerms.rteQual1} (GPS (GNSS) or DME/DME to RNP required)`;
        break;
      case "T":
        infoTerms.rteQual1 = `${infoTerms.rteQual1} (DME/DME Required)`;
        break;
      case "U":
        infoTerms.rteQual1 = `${infoTerms.rteQual1} (RNAV, Sensor Not Specified)`;
        break;
      case "V":
        infoTerms.rteQual1 = `${infoTerms.rteQual1} (VOR/DME RNAV)`;
        break;
      case "W":
        infoTerms.rteQual1 = `${infoTerms.rteQual1} (FAS Data Block Required)`;
        break;
    }
  }

  if (infoTerms && infoTerms.rteQual2) {
    switch (infoTerms.rteQual2) {
      case "A;":
        infoTerms.rteQual2 = `${infoTerms.rteQual2} (Primary Missed Approach)`;
        break;
      case "B;":
        infoTerms.rteQual2 = `${infoTerms.rteQual2} (Secondary Missed Approach)`;
        break;
      case "E;":
        infoTerms.rteQual2 = `${infoTerms.rteQual2} (Engine Out Missed Approach)`;
        break;
      case "C;":
        infoTerms.rteQual2 = `${infoTerms.rteQual2} (Procedure w/ CTL Minimums)`;
        break;
      case "H;":
        infoTerms.rteQual2 = `${infoTerms.rteQual2} (Helicopter w/ Straight-in Minimums)`;
        break;
      case "I;":
        infoTerms.rteQual2 = `${infoTerms.rteQual2} (Helicopter w/ CTL Minimums)`;
        break;
      case "L;":
        infoTerms.rteQual2 = `${infoTerms.rteQual2} (Helicopter w/ Helicopter Landing Minimums)`;
        break;
      case "S;":
        infoTerms.rteQual2 = `${infoTerms.rteQual2} (Procedure w/ Straight-in Minimums)`;
        break;
      case "V;":
        infoTerms.rteQual2 = `${infoTerms.rteQual2} (Procedure w/ VMC Minimums)`;
        break;
    }
  }

  return cleanCIFP(infoTerms);
}

/**
 * Removes empty or undefined values from the data object.
 * @param data The data object to clean.
 */
export function cleanCIFP(data: InfoTermsType): InfoTermsType {
  for (const key in data) {
    if (!data[key] || !data[key].trim()) {
      delete data[key];
    } else if (/^\s*[°ftkts;]+\s*$/.test(data[key])) {
      delete data[key];
    }
  }
  return data;
}
