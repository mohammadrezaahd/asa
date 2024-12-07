import { Accordions } from "@/components/modules/partials/accordions";
import { Inputs } from "@/components/modules/partials/inputs";
import { FC, useRef, useState, useEffect } from "react";
import { FaX, FaY, FaZ } from "react-icons/fa6";

interface IModelToolbarBodyProps {
  setVal: (x: number, y: number, z: number) => void;
  rotation: [number, number, number];
}

const ModelToolbarBody: FC<IModelToolbarBodyProps> = ({ setVal, rotation }) => {
  const accordionToggleRef = useRef(null);
  const [xValue, setXValue] = useState<number>(rotation[0]);
  const [yValue, setYValue] = useState<number>(rotation[1]);
  const [zValue, setZValue] = useState<number>(rotation[2]);

  useEffect(() => {
    setXValue(rotation[0]);
    setYValue(rotation[1]);
    setZValue(rotation[2]);
  }, [rotation]);

  const handleXChange = (value: number) => {
    setXValue(value);
    setVal(value, yValue, zValue);
  };

  const handleYChange = (value: number) => {
    setYValue(value);
    setVal(xValue, value, zValue);
  };

  const handleZChange = (value: number) => {
    setZValue(value);
    setVal(xValue, yValue, value);
  };

  return (
    <div className="px-2 w-full">
      <Accordions.SingleAccordion toggleElementRef={accordionToggleRef}>
        <span className="text-sm" ref={accordionToggleRef}>
          Rotation
        </span>
        <div>
          <Inputs.LabeledNumberAmountButtons
            labelIcon={<FaX />}
            value={xValue}
            setValue={handleXChange}
          />
          <Inputs.LabeledNumberAmountButtons
            labelIcon={<FaY />}
            value={yValue}
            setValue={handleYChange}
          />
          <Inputs.LabeledNumberAmountButtons
            labelIcon={<FaZ />}
            value={zValue}
            setValue={handleZChange}
          />
        </div>
      </Accordions.SingleAccordion>
    </div>
  );
};

export default ModelToolbarBody;
