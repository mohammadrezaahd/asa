import { Switch as MainSwitch } from "@material-tailwind/react";
import { FC } from "react";

interface ISwitchProps {
  label?: string;
  value: boolean;
  setValue: (value: boolean) => void;
}

const Switch: FC<ISwitchProps> = ({ label, value, setValue }) => {
  return (
    <MainSwitch
      label={label || ""}
      checked={value}
      onChange={(e) => setValue(e.target.checked)}
    />
  );
};

export default Switch;
