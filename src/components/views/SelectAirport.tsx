import React, { useState } from "react";
import "../../assets/styles/reset.css";
import "../../assets/styles/main.css";
import Button from "../common/Button";
import Input from "../common/Input";
import { getAirportProcedures } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";


function SelectAirport() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.toUpperCase();
    setInputValue(e.target.value);
    setError("");
  };

  const isValidAirportCode = (code: string): boolean => {
    return /^[A-Z0-9]{3,4}$/.test(code);
  };

  const handleSubmit = async () => {
    if (!isValidAirportCode(inputValue)) {
      setError("Invalid airport code entered");
      return;
    }

    try {
      const fetchedProcedures = await getAirportProcedures(inputValue);
      if (fetchedProcedures && inputValue) {
        navigate("/selectprocedure", {
          state: { airport: inputValue, procedures: fetchedProcedures },
        });
      }
    } catch (error) {
      console.error(error);
      setError("Airport not found");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="container relative flex flex-col">
      <h1 className="self-center">
        Enter <span className="text-primary">Airport</span>
      </h1>
      <p>
        Please enter the{" "}
        <span className="font-bold text-primary">airport code</span> for the
        airport you would like to view details for.
      </p>
      <Input
        placeholder="Enter airport code"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={`${error ? "border-red-500" : ""} text-center`}
      />
      {error && (
        <div className="text-red-500">
          <FontAwesomeIcon
            style={{ marginRight: "5px" }}
            icon={faCircleExclamation}
          />
          {error}
        </div>
      )}
      <Button text="Submit" onClick={handleSubmit} />
    </div>
  );
}

export default SelectAirport;
