import { useState, useEffect } from "react";
import { Button } from "../common/ButtonUI";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../common/Dialog";
import { Input } from "../common/InputUI";
import { Label } from "../common/Label";
import { getFolder, getTheme, setFolder } from "../../utils/helpers";
import { Switch } from "../common/Switch";
import { selectFolder } from "../../utils/helpers";

type SettingsDialogProps = {
  open: boolean;
  onClose: () => void;
  onOpenChange: (isOpen: boolean) => void;
};

export function SettingsDialog({
  onClose,
  open,
  onOpenChange,
}: SettingsDialogProps) {
  const [directory, setDirectory] = useState(getFolder() || "");
  const [darkMode, setDarkMode] = useState(getTheme() === "dark");

  useEffect(() => {
    if (open) {
      setDarkMode(getTheme() === "dark");
    }
  }, [open]);

  const handleClose = () => {
    setFolder(directory);
    if (darkMode) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }

    onClose();
    onOpenChange(false);
  };

  const handleDirectoryClick = async () => {
    const selected = await selectFolder();
    if (typeof selected === "string") {
      setDirectory(selected);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Settings</DialogTitle>
          <DialogDescription>
            Adjust your settings below and save when done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="directory" className="text-right">
              X-Plane CIFP Directory:
            </Label>
            <Input
              id="directory"
              value={directory}
              onClick={handleDirectoryClick}
              onChange={(e) => setDirectory(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="darkMode" className="text-right">
              Dark Mode:
            </Label>
            <Switch
              checked={darkMode}
              onCheckedChange={() => setDarkMode(!darkMode)}
              className="col-span-1"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="text-white" onClick={handleClose}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SettingsDialog;
