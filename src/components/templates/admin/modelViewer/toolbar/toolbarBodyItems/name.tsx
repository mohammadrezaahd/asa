import { Accordions } from "@/components/modules/partials/accordions";
import { Inputs } from "@/components/modules/partials/inputs";
import { FC, useRef } from "react";

interface INameProps {
  name: string;
  setName: (name: string) => void;
}

const Name: FC<INameProps> = ({ name, setName }) => {
  const nameAccordionToggleRef = useRef(null);

  return (
    <Accordions.SingleAccordion toggleElementRef={nameAccordionToggleRef}>
      <span className="text-sm" ref={nameAccordionToggleRef}>
        Model name
      </span>
      <div>
        <Inputs.Text value={name} setValue={setName} />
      </div>
    </Accordions.SingleAccordion>
  );
};

export default Name;
