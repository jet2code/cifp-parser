export const headers: Record<string, { link: string; info: string }> = {
  seqNumber: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUU-8",
    info: "For Route Type Records - A route of flight is defined by a series of records taken in order. The Sequence Number field defines the location of the record in the sequence defining the route of flight identified in the route identifier field. For Boundary Type Records - A boundary is defined by a series of records taken in order. The Sequence Number field defines the location of the record in the sequence defining a boundary. For Record Types requiring more than one primary record to define the complete content – In a series of records used to define a complete condition, the Sequence Number is used to define each primary record in the sequence. For Airport and Heliport TAA Records – Sequence Number 1 will always be assigned to the record based on the Center Fix upon which the Straight- In Area is predicated, Sequence Number 2 will always be assigned to the record based on the Center Fix upon which the Left Base Area is predicated, and Sequence Number 3 will always be assigned to the record based on the Center Fix upon which the Right Base Area is predicated. Therefore, if a TAA Record has a Straight-In Area and a Right Base Area, but no Left Base Area, only Sequence Numbers 1 and 3 will be used. If a TAA Record has a Straight-In Area and a Left Base Area but no Right Base Area, only Sequence Numbers 1 and 2 will be used.",
  },
  fixIdent: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVBg",
    info: "The Fix Identifier field contains the five-character-name- code, or other series of characters, with which the fix is identified. This includes Waypoint Identifiers, VHF NAVAID Identifiers, NDB NAVAID identifier, Airport Identifiers, and Runway Identifiers.",
  },
  icaoCode: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVBk",
    info: "The ICAO Code field permits records to be categorized geographically within the limits of the categorization performed by the Area Code field.",
  },
  rteType: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVKE",
    info: "The Route Type field defines the type of Enroute Airway, Preferred Route, Airport and Heliport SID/STAR/Approach Routes of which the record is an element. For Airport and Heliport SID/STAR/Approach Routes, Route Type includes a primary route type, and up to two route type qualifiers.",
  },
  procIdent: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVKg",
    info: "The SID/STAR Route Identifier field contains the name of the SID or STAR, using the basic indicator, validity indicator and route indicator abbreviated to six characters with the naming rules in Chapter 7 of this document. The Approach Route Identifier field contains the identifier of the approach route to be flown. To facilitate the provision of multiple approach procedures of the same type to a given runway, the field also is used to provide a multiple indicator.",
  },
  transIdent: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVJg",
    info: "Together with the Section/Subsection identified for the SID/STAR/App/AWY field, this field is used to identify the desired enroute transition of the applicable SID or STAR. It can also be used to identify the desired approach transition of an approach.",
  },
  secCode: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVKM",
    info: "The Section Code field defines the major section of the navigation system data base in which the record resides.",
  },
  subCode: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVKI",
    info: "The Subsection Code field defines the specific part of the database major section in which the record resides.",
  },
  descCode: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVB8",
    info: "The Waypoint Description field facilitates the designation of the type, function, and attributes of a specific waypoint in Enroute Airway or Terminal Procedure segment coding.",
  },
  turnDr: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVCE",
    info: "The Turn Direction field specifies the direction in which Terminal Procedure turns are to be made. It is also used to indication direction on course reversals, see Attachment 5 Path and Termination.",
  },
  RNP: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVKc",
    info: "Required Navigation Performance (RNP) is a statement of the Navigation Performance necessary for operation within a defined airspace in accordance with ICAO Annex 15 and/or State published rules.",
  },
  pathTerm: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVCM",
    info: "The Path and Termination defines the path geometry for a single record of an ATC terminal procedure.",
  },
  tdv: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVIw",
    info: "This field is used in conjunction with Turn direction to indicate that a turn is required prior to capturing the path defined in a terminal procedure.",
  },
  recdNavaid: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVI4",
    info: "The Recommended Navaid field allows the reference facility for the waypoint in a given record Fix Ident field or for an Airport or Heliport to be specified. VHF, NDB (Enroute and Terminal), Localizer, TACAN, GLS and MLS Navaids may be referenced.",
  },
  icaoCode2: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVBk",
    info: "The ICAO Code field permits records to be categorized geographically within the limits of the categorization performed by the Area Code field.",
  },
  secCode2: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVKM",
    info: "The Section Code field defines the major section of the navigation system data base in which the record resides.",
  },
  subCode2: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVKI",
    info: "The Subsection Code field defines the specific part of the database major section in which the record resides.",
  },
  arcRadius: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVKY",
    info: "The ARC Radius field is used to define the radius of a precision turn. In Terminal Procedures, this is the Constant Radius To A Fix Path and Termination, for RF Leg. In Holding Patterns, this is the turning radius, inbound to outbound leg, for RNP Holding. The ARC Radius field is also used to specify the turn radius of RNP holding patterns included in SID, STAR, and Approach Records as HA, HF, and HM legs. ",
  },
  theta: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVI8",
    info: "Theta is defined as the magentic bearing to the waypoint identified in the record's FIX Ident field from the Navaid in the Recommened Navaid field.",
  },
  rho: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVJA",
    info: "RHO is defined as the geodesic distance in nautical miles to the waypoint identified in the record’s Fix Ident field from the NAVAID in the Recommended NAVAID field.",
  },
  magCourse: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVJE",
    info: "Outbound Magnetic Course is the published outbound magnetic course from the waypoint identified in the record’s Fix Ident field. In addition, this field is used for Course/Heading/Radials on SID/STAR Approach Records through requirements of the Path Terminator and coding rules contained in Attachment 5 of this specification.",
  },
  rteDistHoldTime: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVJI",
    info: "In Enroute Airways, Route Distance From is the distance in nautical miles from the waypoint identified in the records Fix Ident field to the next waypoint of the route. In SID, STAR and Approach Procedure records, the field may contain segment distances/along track distances/excursion distances/DME distances or holding pattern timing. The actual content is dependent on the Path and Termination. For more information on the content, refer to Table Three, Leg Data Fields, in Attachment 5 of this document.",
  },
  altDesc: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVJM",
    info: "The Altitude Description field will designate whether a waypoint should be crossed at, at or above, at or below, or at or above to at or below specified altitudes. The field is also used to designate recommended altitudes and cases where two distinct altitudes are provided at a single fix.",
  },
  alt1: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVJU",
    info: "The Altitude/Minimum Altitude field indicates the reference altitude associated with (1) Enroute Airways (MEA, MFA or other minimum altitudes as defined by source), (2) holding pattern path of Holding Pattern record, (3) altitudes at fixes in terminal procedures and terminal procedure path termination defined by the Path Terminator in the Airport or Heliport SID/STAR/Approach Record and (4) lowest altitude of the blocked altitudes for a Preferred Route.",
  },
  alt2: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVJU",
    info: "The Altitude/Minimum Altitude field indicates the reference altitude associated with (1) Enroute Airways (MEA, MFA or other minimum altitudes as defined by source), (2) holding pattern path of Holding Pattern record, (3) altitudes at fixes in terminal procedures and terminal procedure path termination defined by the Path Terminator in the Airport or Heliport SID/STAR/Approach Record and (4) lowest altitude of the blocked altitudes for a Preferred Route.",
  },
  transAlt: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVKQ",
    info: "The Transition Altitude field defines the altitude in the vicinity of an airport or heliport at or below which the vertical position of an aircraft is controlled by reference to altitudes (MSL). The Transition Level field defines the lowest flight level available for use above the transition altitude. Aircraft descending through the transition layer will use altimeters set to local station pressure, while departing aircraft climbing through the layer will be using standard altimeter setting (QNE) of 29.92 inches of mercury, 1013.2 millibars, or 1013.2 hectopascals.",
  },
  spdLmtDisc: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVJw",
    info: "The Speed Limit Description field will designate whether the speed limit coded at a fix in a terminal procedure description is a mandatory, minimum or maximum speed.",
  },
  spdLimit: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVJY",
    info: "The Speed Limit field defines a speed, expressed in Knots, Indicated (KIAS), for a fix in a terminal procedure or for an airport or heliport terminal environment.",
  },
  vertAngle: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVJc",
    info: "The Vertical Angle field defines the angular portion of vertical navigation path in STAR Route and Approach Procedure Route records. The Vertical Angle should cause the aircraft to fly at the last coded altitude and then descend on the VNAV path, projected back from the fix and altitude contained in the route sequence that contains the Vertical Angle.",
  },
  vertScaleFactor: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVJ0",
    info: "Vertical Scale Factor (VSF) is used to set the vertical deviation scale.",
  },
  ctrFixIdent: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVKU",
    info: "When used on Airport and Heliport MSA Records, the Center Fix field represents the MSA Center; that point (Navaid or Waypoint) on which the MSA is predicated. When used on Terminal Procedure Records, it can be used in three ways: 1. When the terminal procedure has an MSA defined, the field will contain the identifier of the fix on which the MSA is predicated. This will serve as a pointer to the specific MSA (PS) Record. This will be populated on the Final Approach Fix (FAF) Record only. 2. When the terminal procedure has a TAA defined, the field will contain the identifier of the fix on which the TAA Sector is predicated. This will serve as a pointer to the specific TAA (PK) Record. This will be populated on the first record for each approach transition. 3. When used in a terminal procedure record defined by an RF Path Terminator, the field will contain the fix that defines the center of the constant rate turn. If the RF Leg terminates at the FAF, where the MSA Center Fix information would normally be found, the RF Center Fix takes priority and the MSA Center Fix pointer will be moved to the FACF record.",
  },
  icaoCode3: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVBk",
    info: "The ICAO Code field permits records to be categorized geographically within the limits of the categorization performed by the Area Code field.",
  },
  secCode3: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVKM",
    info: "The Section Code field defines the major section of the navigation system data base in which the record resides.",
  },
  subCode3: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVKI",
    info: "The Subsection Code field defines the specific part of the database major section in which the record resides.",
  },
  multicd: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUVJk",
    info: "The Multiple Code field will be used to indicate Restrictive Airspace Areas or MSA Centers having the same designator but subdivided or differently divided by lateral and/or vertical detail.",
  },
  gnssFms: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUU-8",
    info: "The GNSS/FMS Indicator field provides an indication of whether or not the responsible government agency has authorized the overlay of a conventional, ground based approach procedure with the use of a sensor capable of processing GNSS data or if the procedure may be flown with FMS as the primary navigation equipment. The field is also used to indicate when an RNAV procedure has been authorized for GNSS-based vertical navigation.",
  },
  rteQual1: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUU-8",
    info: "The Route Type field defines the type of Enroute Airway, Preferred Route, Airport and Heliport SID/STAR/Approach Routes of which the record is an element. For Airport and Heliport SID/STAR/Approach Routes, Route Type includes a primary route type, and up to two route type qualifiers.",
  },
  rteQual2: {
    link: "https://drive.google.com/open?id=1MD1_a-BZm72GfxifuKKBF3AugAIgUR0a&disco=AAAA51oUU-8",
    info: "The Route Type field defines the type of Enroute Airway, Preferred Route, Airport and Heliport SID/STAR/Approach Routes of which the record is an element. For Airport and Heliport SID/STAR/Approach Routes, Route Type includes a primary route type, and up to two route type qualifiers.",
  },
};
