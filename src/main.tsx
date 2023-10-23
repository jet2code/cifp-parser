import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import GetStarted from "./components/views/GetStarted";
import SelectAirport from "./components/views/SelectAirport";
import SelectFolderDialog from "./components/views/SelectFolderDialog";
import SelectProcedure from "./components/views/SelectProcedure";
import ProcedureDetails from "./components/views/ProcedureDetails";
import SettingsDialog from "./components/views/SettingsDialog"; 
import { appWindow } from "@tauri-apps/api/window";
import "./assets/styles/main.css";

const defaultRoute = localStorage.getItem("folder")
  ? "/selectairport"
  : "/getstarted";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return children;
}

function App() {
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false);

  useEffect(() => {
    document.getElementById("settings-btn")!.addEventListener("click", () => {
      setIsSettingsDialogOpen(true);
    });
  }, []);

  return (
    <React.StrictMode>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to={defaultRoute} />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route
              path="/selectfolderdialog"
              element={<SelectFolderDialog />}
            />
            <Route path="/selectairport" element={<SelectAirport />} />
            <Route path="/selectprocedure" element={<SelectProcedure />} />
            <Route path="/proceduredetails" element={<ProcedureDetails />} />
          </Routes>
        </Router>
        {isSettingsDialogOpen && (
          <SettingsDialog
            open={isSettingsDialogOpen}
            onClose={() => setIsSettingsDialogOpen(false)}
            onOpenChange={(isOpen) => setIsSettingsDialogOpen(isOpen)}
          />
        )}
      </ThemeProvider>
    </React.StrictMode>
  );
}

document
  .getElementById("titlebar-back")!
  .addEventListener("click", () => window.history.back());
document
  .getElementById("titlebar-forward")!
  .addEventListener("click", () => window.history.forward());
document
  .getElementById("titlebar-minimize")!
  .addEventListener("click", () => appWindow.minimize());
document
  .getElementById("titlebar-maximize")!
  .addEventListener("click", () => appWindow.toggleMaximize());
document
  .getElementById("titlebar-close")!
  .addEventListener("click", () => appWindow.close());

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />,
);
