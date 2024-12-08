import { FC } from "react";

interface IColorPickerProps {
  color: string;
  setColor: (color: string) => void;
}

const ColorPicker: FC<IColorPickerProps> = ({ color, setColor }) => {
  return (
    <>
      <input
        type="color"
        className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
    </>
  );
};

export default ColorPicker;
