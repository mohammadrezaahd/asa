import AppAccordion from "@/components/modules/partials/accordions/Accordion";
import { Inputs } from "@/components/modules/partials/inputs";
import { FC, useCallback, useRef } from "react";
import { FaX, FaY, FaZ } from "react-icons/fa6";

interface IPositionProps {
  position: [number, number, number];
  setPosition: (x: number, y: number, z: number) => void;
}

const Position: FC<IPositionProps> = ({ position, setPosition }) => {
  const positionAccordionToggleRef = useRef(null);

  // Handle position changes
  const positionChangeHandler = useCallback(
    (axis: "x" | "y" | "z", value: number) => {
      const newValues = [...position];
      if (axis === "x") newValues[0] = value;
      if (axis === "y") newValues[1] = value;
      if (axis === "z") newValues[2] = value;
      setPosition(newValues[0], newValues[1], newValues[2]);
    },
    [position, setPosition]
  );

  return (
    <AppAccordion toggleElementRef={positionAccordionToggleRef}>
      <span className="text-sm" ref={positionAccordionToggleRef}>
        Position
      </span>
      <div>
        <Inputs.LabeledNumberAmountButtons
          labelIcon={<FaX />}
          value={position[0]}
          setValue={(value) => positionChangeHandler("x", value)}
          step={0.01}
          negatable={true}
        />
        <Inputs.LabeledNumberAmountButtons
          labelIcon={<FaY />}
          value={position[1]}
          setValue={(value) => positionChangeHandler("y", value)}
          step={0.01}
          negatable={true}
        />
        <Inputs.LabeledNumberAmountButtons
          labelIcon={<FaZ />}
          value={position[2]}
          setValue={(value) => positionChangeHandler("z", value)}
          step={0.01}
          negatable={true}
        />
      </div>
    </AppAccordion>
  );
};

export default Position;