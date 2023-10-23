import "../../assets/styles/reset.css";
import "../../assets/styles/main.css";
import "../../assets/styles/SelectProcedure.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import { extractProcedureInfo } from "../../utils/helpers";

function SelectProcedure() {
  const location = useLocation();
  const airport = location.state?.airport;
  const procedures = location.state?.procedures;
  const navigate = useNavigate();

  const [selectedProcedure, setSelectedProcedure] = useState<string>(
    procedures.namedProcedures[0],
  );

  const handleChange = (selected: string) => {
    setSelectedProcedure(selected);
  };

  const handleSelection = async () => {
    const parsedData = await extractProcedureInfo(airport, selectedProcedure);
    navigate("/proceduredetails", {
      state: {
        airport: airport,
        procedure: selectedProcedure,
        data: parsedData,
      },
    });
  };

  return (
    <div className="container">
      <h1>
        Select <span className="text-primary">Procedure</span>
      </h1>
      <Dropdown
        placeholder={selectedProcedure}
        items={procedures.namedProcedures}
        nameToIdentMap={procedures.nameToIdentMap}
        onChange={handleChange}
      />

      <Button text="Submit" onClick={handleSelection} />
    </div>
  );
}

export default SelectProcedure;
