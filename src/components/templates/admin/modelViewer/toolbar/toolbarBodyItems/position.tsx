import { Accordions } from "@/components/modules/partials/accordions";
import { Inputs } from "@/components/modules/partials/inputs";
import { FC, useCallback, useRef, useState } from "react";
import { FaX, FaY, FaZ } from "react-icons/fa6";

interface IPositionProps {
  position: [number, number, number];
  setPosition: (x: number, y: number, z: number) => void;
}

const Position: FC<IPositionProps> = ({ position, setPosition }) => {
  const positionAccordionToggleRef = useRef(null);
  const [positionValues, setPositionValues] = useState({
    x: position[0],
    y: position[1],
    z: position[2],
  });

  // Handle position changes
  const positionChangeHandler = useCallback(
    (axis: "x" | "y" | "z", value: number) => {
      const newValues = { ...positionValues, [axis]: value };
      setPositionValues(newValues);
      setPosition(newValues.x, newValues.y, newValues.z);
    },
    [positionValues, setPosition]
  );

  return (
    <Accordions.SingleAccordion toggleElementRef={positionAccordionToggleRef}>
      <span className="text-sm" ref={positionAccordionToggleRef}>
        Position
      </span>
      <div>
        <Inputs.LabeledNumberAmountButtons
          labelIcon={<FaX />}
          value={positionValues.x}
          setValue={(value) => positionChangeHandler("x", value)}
          step={0.01}
          negatable={true}
        />
        <Inputs.LabeledNumberAmountButtons
          labelIcon={<FaY />}
          value={positionValues.y}
          setValue={(value) => positionChangeHandler("y", value)}
          step={0.01}
          negatable={true}
        />
        <Inputs.LabeledNumberAmountButtons
          labelIcon={<FaZ />}
          value={positionValues.z}
          setValue={(value) => positionChangeHandler("z", value)}
          step={0.01}
          negatable={true}
        />
      </div>
    </Accordions.SingleAccordion>
  );
};

export default Position;