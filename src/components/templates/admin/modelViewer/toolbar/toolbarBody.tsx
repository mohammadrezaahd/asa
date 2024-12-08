import { Accordions } from "@/components/modules/partials/accordions";
import { Inputs } from "@/components/modules/partials/inputs";
import { FC, useRef, useState, useEffect, useCallback } from "react";
import { FaX, FaY, FaZ } from "react-icons/fa6";

interface IModelToolbarBodyProps {
  rotation: [number, number, number];
  position: [number, number, number];
  setRotation: (x: number, y: number, z: number) => void;
  setPosition: (x: number, y: number, z: number) => void;
}

const ModelToolbarBody: FC<IModelToolbarBodyProps> = ({
  rotation,
  position,
  setRotation,
  setPosition,
}) => {
  const rotationAccordionToggleRef = useRef(null);
  const positionAccordionToggleRef = useRef(null);

  const [rotationValues, setRotationValues] = useState({
    x: rotation[0],
    y: rotation[1],
    z: rotation[2],
  });
  const [positionValues, setPositionValues] = useState({
    x: position[0],
    y: position[1],
    z: position[2],
  });

  useEffect(() => {
    setRotationValues({ x: rotation[0], y: rotation[1], z: rotation[2] });
    setPositionValues({ x: position[0], y: position[1], z: position[2] });
  }, [rotation, position]);

  const rotationChangeHandler = useCallback(
    (axis: "x" | "y" | "z", value: number) => {
      setRotationValues((prev) => {
        const newValues = { ...prev, [axis]: value };
        setRotation(newValues.x, newValues.y, newValues.z);
        return newValues;
      });
    },
    [setRotation]
  );

  const positionChangeHandler = useCallback(
    (axis: "x" | "y" | "z", value: number) => {
      setPositionValues((prev) => {
        const newValues = { ...prev, [axis]: value };
        setPosition(newValues.x, newValues.y, newValues.z);
        return newValues;
      });
    },
    [setPosition]
  );

  return (
    <div className="px-2 w-full">
      <Accordions.SingleAccordion toggleElementRef={rotationAccordionToggleRef}>
        <span className="text-sm" ref={rotationAccordionToggleRef}>
          Rotation
        </span>
        <div>
          <Inputs.LabeledNumberAmountButtons
            labelIcon={<FaX />}
            value={rotationValues.x}
            setValue={(value) => rotationChangeHandler("x", value)}
            step={0.01}
            negatable={true}
          />
          <Inputs.LabeledNumberAmountButtons
            labelIcon={<FaY />}
            value={rotationValues.y}
            setValue={(value) => rotationChangeHandler("y", value)}
            step={0.01}
            negatable={true}
          />
          <Inputs.LabeledNumberAmountButtons
            labelIcon={<FaZ />}
            value={rotationValues.z}
            setValue={(value) => rotationChangeHandler("z", value)}
            step={0.01}
            negatable={true}
          />
        </div>
      </Accordions.SingleAccordion>
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
        </div>
      </Accordions.SingleAccordion>
    </div>
  );
};

export default ModelToolbarBody;
