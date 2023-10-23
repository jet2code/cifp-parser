import Select from "react-select";
import { getTheme } from "../../utils/helpers";

interface DropdownProps {
  items: string[];
  nameToIdentMap?: Record<string, string>;
  onChange: (selected: string) => void;
  className?: string;
  placeholder?: string;
}

export default function Dropdown({
  items,
  nameToIdentMap,
  onChange,
  className = "",
  placeholder,
}: DropdownProps) {
  const options = items.map((item) => ({
    label: item,
    value: nameToIdentMap?.[item] || item,
  }));

  const currentTheme = getTheme();

  const isDarkMode = currentTheme === "dark";

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "transparent",
      borderWidth: "2px",
      borderColor: state.isFocused ? "#204cfe" : null,
      transition: "all 0.2s ease-in-out",
      color: isDarkMode ? "#fafbff" : "00020a",
      boxShadow: state.isFocused ? "none" : null,
      "&:hover": {
        borderColor: "#204cfe",
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: isDarkMode ? "#fafbff" : "00020a",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: isDarkMode
        ? state.isSelected
          ? "#204cfe"
          : state.isFocused
          ? "#204cfe"
          : "#00002a"
        : state.isSelected
        ? "#204cfe"
        : state.isFocused
        ? "#204cfe"
        : "#fafbff",
      color: isDarkMode ? "#fafbff" : "#00020a",
      "&:hover": {
        backgroundColor: "#204cfe",
        color: "#fafbff",
      },
    }),
  };

  return (
    <div className={`relative ${className} z-10 self-center`}>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={(option) => onChange(option?.value || "")}
        styles={customStyles}
      />
    </div>
  );
}
