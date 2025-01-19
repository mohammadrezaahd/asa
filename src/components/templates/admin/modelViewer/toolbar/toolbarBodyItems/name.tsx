import { Inputs } from "@/components/modules/partials/inputs";
import { FC } from "react";

interface INameProps {
  name: string;
  setName: (name: string) => void;
}

const Name: FC<INameProps> = ({ name, setName }) => {
  return (
    <div className="mt-5">
      <Inputs.Text label="Model name" value={name} setValue={setName} />
    </div>
  );
};

export default Name;
