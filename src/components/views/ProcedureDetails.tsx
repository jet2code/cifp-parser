import "../../assets/styles/reset.css";
import "../../assets/styles/main.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { InfoTermsType } from "../../types/navDataTypes";
import { DataTable } from "../table/data-table";
import { generateColumnsForInfoTermsType } from "../table/columns";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../common/Select";

function ProcedureDetails() {
  const location = useLocation();
  const data = location.state?.data || [];

  const uniqueTransitions: string[] = Array.from(
    new Set(
      data
        .map((item: InfoTermsType) => item.transIdent)
        .filter((str: string) => str !== " " && str !== "ALL"),
    ),
  );

  const commonLegs = data.filter(
    (item: { transIdent?: string }) =>
      item.transIdent === "ALL" ||
      item.transIdent === undefined ||
      item.transIdent === " ",
  );

  const [selectedTransition, setSelectedTransition] = useState(
    uniqueTransitions[0],
  );

  const handleTransitionChange = (selected: string) => {
    setSelectedTransition(selected);
  };

  return (
    <div className="container">
      {uniqueTransitions && uniqueTransitions.length > 0 && (
        <>
          <h2>
            <span className="text-primary">Transition</span> Legs
          </h2>
          {uniqueTransitions.length > 1 && (
            <p>Select a transition to view its specific legs.</p>
          )}
          {uniqueTransitions.length > 1 && (
            <Select
              value={selectedTransition}
              onValueChange={handleTransitionChange}
            >
              <SelectTrigger className="w-[180px] self-center">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {uniqueTransitions.map((transition) => (
                  <SelectItem key={transition} value={transition}>
                    {transition}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          {uniqueTransitions.map((transition) => {
            if (transition === selectedTransition) {
              const filteredData = data.filter(
                (item: { transIdent: string }) =>
                  item.transIdent === transition,
              );
              return (
                <div key={transition}>
                  <DataTable
                    data={filteredData}
                    columns={generateColumnsForInfoTermsType(filteredData)}
                  />
                </div>
              );
            }
            return null;
          })}
        </>
      )}
      {commonLegs && commonLegs.length > 0 && (
        <>
          <h2>
            <span className="text-primary">Common</span> Legs
          </h2>
          <p>These legs are common to all transitions.</p>
          <DataTable
            columns={generateColumnsForInfoTermsType(commonLegs)}
            data={commonLegs}
          />
        </>
      )}
    </div>
  );
}

export default ProcedureDetails;
