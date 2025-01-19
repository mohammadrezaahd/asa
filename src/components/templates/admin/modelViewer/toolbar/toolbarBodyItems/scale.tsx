import { Accordions } from "@/components/modules/partials/accordions";
import { Inputs } from "@/components/modules/partials/inputs";
import { FC, useCallback, useRef, useState, useEffect } from "react";

interface IScaleProps {
  scale: number;
  setScale: (value: number) => void;
}

const Scale: FC<IScaleProps> = ({ scale, setScale }) => {
  const scaleAccordionToggleRef = useRef(null);
  const [scaleValue, setScaleValue] = useState(scale);

  useEffect(() => {
    setScaleValue(scale);
  }, [scale]);

  // Handle rotation changes
  const rotationChangeHandler = useCallback(
    (value: number) => {
      const newValues = value;
      setScaleValue(newValues);
      setScale(newValues);
    },
    [setScale]
  );

  return (
    <Accordions.SingleAccordion toggleElementRef={scaleAccordionToggleRef}>
      <span className="text-sm" ref={scaleAccordionToggleRef}>
        Scale
      </span>
      <div>
        <Inputs.LabeledNumberAmountButtons
          value={scaleValue}
          setValue={(value) => rotationChangeHandler(value)}
          step={1}
          negatable={false}
        />
      </div>
    </Accordions.SingleAccordion>
  );
};

export default Scale;
