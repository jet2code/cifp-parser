import { useState } from "react";
import "../../assets/styles/reset.css";
import "../../assets/styles/main.css";
import "../../assets/styles/SelectFolderDialog.css";
import { selectFolder, setFolder } from "../../utils/helpers";
import Button from "../common/Button";

function selectFolderDialog() {
  const [selectedFolderPath, setSelectedFolderPath] = useState<string | null>(
    null,
  );

  const handleSelectFolder = async () => {
    const selected = await selectFolder();
    if (typeof selected === "string") {
      setSelectedFolderPath(selected);
      setFolder(selected);
    }
  };

  return (
    <div className="container">
      <h1>
        Get <span className="text-primary">started.</span>
      </h1>
      <p>
        Please select your
        <span className="font-bold text-primary">
          {" "}
          X-Plane Custom Data CIFP{" "}
        </span>
        directory to get started.
      </p>
      <div>
        <input
          type="text"
          className="w-96 cursor-pointer pl-0 hover:border-primary"
          placeholder="Select folder"
          value={selectedFolderPath || ""}
          onClick={handleSelectFolder}
          readOnly
        />
      </div>
      {selectedFolderPath && <Button linkTo="/selectairport" text="Next" />}
    </div>
  );
}

export default selectFolderDialog;
