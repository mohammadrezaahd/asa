import { Option, Select } from "@material-tailwind/react";
import { colors } from "@material-tailwind/react/types/generic";
import { FC } from "react";

type SelectOptions = {
  title: string;
  value: string;
};

interface IAppSelectProps {
  variant?: "static" | "standard" | "outlined";
  label?: string;
  creatable?: boolean;
  color?: colors;
  disabled?: boolean;
  options: SelectOptions[];
}

const AppSelect: FC<IAppSelectProps> = ({
  variant = "standard",
  label = "",
  creatable = false,
  color = "gray",
  disabled = false,
  options,
}) => {
  return (
    <>
      <Select label={label} variant={variant} color={color} disabled={disabled} >
        {options.map((option, index) => (
          <Option key={index} value={option.value}>
            {option.title}
          </Option>
        ))}
        {(creatable && (
          <Option
            onClick={() => {
              console.log("Adding new cat");
            }}
          >
            Add new item
          </Option>
        )) || <></>}
      </Select>
    </>
  );
};

export default AppSelect;
