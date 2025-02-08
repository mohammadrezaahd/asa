import AppAccordion from "@/components/modules/partials/accordions/Accordion";
import { Inputs } from "@/components/modules/partials/inputs";
import { FC, useCallback, useRef, useState, useEffect } from "react";
import { FaX, FaY, FaZ } from "react-icons/fa6";

interface IRotationProps {
  rotation: [number, number, number];
  setRotation: (x: number, y: number, z: number) => void;
}

const Rotation: FC<IRotationProps> = ({ rotation, setRotation }) => {
  const rotationAccordionToggleRef = useRef(null);
  const [rotationValues, setRotationValues] = useState({
    x: rotation[0],
    y: rotation[1],
    z: rotation[2],
  });

  useEffect(() => {
    setRotationValues({
      x: rotation[0],
      y: rotation[1],
      z: rotation[2],
    });
  }, [rotation]);

  // Handle rotation changes
  const rotationChangeHandler = useCallback(
    (axis: "x" | "y" | "z", value: number) => {
      const newValues = { ...rotationValues, [axis]: value };
      setRotationValues(newValues);
      setRotation(newValues.x, newValues.y, newValues.z);
    },
    [rotationValues, setRotation]
  );

  return (
    <AppAccordion toggleElementRef={rotationAccordionToggleRef}>
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
    </AppAccordion>
  );
};

export default Rotation;
