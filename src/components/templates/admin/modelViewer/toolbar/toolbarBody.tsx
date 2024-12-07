import { Accordions } from "@/components/modules/partials/accordions";
import { Inputs } from "@/components/modules/partials/inputs";
import { FC, useRef } from "react";
import { FaX, FaY, FaZ } from "react-icons/fa6";

interface IModelToolbarBodyProps {
  setVal: (x: number, y: number, z: number) => void;
}

const ModelToolbarBody: FC<IModelToolbarBodyProps> = () => {
  const accordionToggleRef = useRef(null);

  return (
    <div className="px-2 w-full">
      <Accordions.SingleAccordion toggleElementRef={accordionToggleRef}>
        <span className="text-sm" ref={accordionToggleRef}>
          Rotation
        </span>
        <div>
          <Inputs.LabeledNumberAmountButtons labelIcon={<FaX />} />
          <Inputs.LabeledNumberAmountButtons labelIcon={<FaY />} />
          <Inputs.LabeledNumberAmountButtons labelIcon={<FaZ />} />
        </div>
      </Accordions.SingleAccordion>
    </div>
  );
};

export default ModelToolbarBody;
