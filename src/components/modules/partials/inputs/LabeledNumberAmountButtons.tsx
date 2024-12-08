import { FC, ReactNode } from "react";
import { Input, IconButton, Typography } from "@material-tailwind/react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface ILabeledNumberAmountButtonsProps {
  labelIcon: ReactNode;
  labelText?: string;
  description?: string;
  step?: number;
  negatable?: boolean;
  value: number;
  setValue: (value: number) => void;
}

const LabeledNumberAmountButtons: FC<ILabeledNumberAmountButtonsProps> = ({
  labelIcon,
  labelText,
  description,
  negatable = false,
  step = 1,
  value = 0,
  setValue,
}) => {
  return (
    <div className="w-80">
      {labelText && (
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-medium"
        >
          {labelText}
        </Typography>
      )}

      <div className="relative w-full">
        <div className="absolute left-2.5 top-2.5 h-5 w-5 text-slate-600">
          {labelIcon}
        </div>
        <Input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="!border-t-blue-gray-200 pl-10 placeholder:text-blue-gray-300 placeholder:opacity-100  focus:!border-t-gray-900 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "min-w-0",
          }}
        />
        <div className="absolute right-1 top-1 flex gap-0.5">
          <IconButton
            size="sm"
            className="rounded"
            onClick={() => {
              negatable
                ? setValue(value - step)
                : setValue(value === 0 ? 0 : value - step);
            }}
          >
            <FaMinus />
          </IconButton>
          <IconButton
            size="sm"
            className="rounded"
            onClick={() => setValue(value + step)}
          >
            <FaPlus />
          </IconButton>
        </div>
      </div>
      {description && (
        <Typography variant="small" color="gray" className="mt-2 font-normal">
          {description}
        </Typography>
      )}
    </div>
  );
};

export default LabeledNumberAmountButtons;
