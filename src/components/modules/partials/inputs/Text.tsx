import { Input } from "@material-tailwind/react";
import { FC } from "react";

interface ITextInputProps {
  label?: string;
  value: string;
  setValue: (value: string) => void;
}

const Text: FC<ITextInputProps> = ({ label, value, setValue }) => {
  return (
    <div>
      <Input
        label={label ?? ""}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Text;
