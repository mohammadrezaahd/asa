import { Checkbox, Typography } from "@material-tailwind/react";
import { FC } from "react";

interface IAppCheckBoxProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppCheckBox: FC<IAppCheckBoxProps> = ({
  label,
  description,
  checked,
  onChange,
}) => {
  return (
    <Checkbox
      label={
        <div>
          <Typography color="blue-gray" className="font-medium">
            {label}
          </Typography>
          {description && (
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          )}
        </div>
      }
      containerProps={{
        className: description && "-mt-5",
      }}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default AppCheckBox;
