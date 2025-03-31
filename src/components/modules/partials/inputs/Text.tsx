import { Input } from "@material-tailwind/react";
import { FC, ReactNode } from "react";

interface ITextInputProps {
  label?: string;
  value: string;
  setValue: (value: string) => void;
  icon?: ReactNode;
  className?: string;
}

const Text: FC<ITextInputProps> = ({
  label,
  value,
  setValue,
  icon,
  className,
}) => {
  return (
    <div>
      <Input
        label={label ?? ""}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        icon={icon}
        className={className}
      />
    </div>
  );
};

export default Text;
