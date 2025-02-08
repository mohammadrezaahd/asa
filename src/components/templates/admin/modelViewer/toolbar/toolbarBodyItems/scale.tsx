import AppAccordion from "@/components/modules/partials/accordions/Accordion";
import { Inputs } from "@/components/modules/partials/inputs";
import { FC, useCallback, useRef, useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface IScaleProps {
  scale: number;
  setScale: (value: number) => void;
  magnifier: { value: number; isActive: boolean };
  setMagnifier: (magnifier: { value: number; isActive: boolean }) => void;
}

const Scale: FC<IScaleProps> = ({
  scale,
  setScale,
  magnifier,
  setMagnifier,
}) => {
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

  const magnifierValueChangeHandler = useCallback(
    (value: number) => {
      setMagnifier({ ...magnifier, value });
    },
    [magnifier, setMagnifier]
  );

  const magnifierActiveChangeHandler = useCallback(
    (isActive: boolean) => {
      setMagnifier({ ...magnifier, isActive });
    },
    [magnifier, setMagnifier]
  );

  return (
    <AppAccordion toggleElementRef={scaleAccordionToggleRef}>
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
        <Inputs.LabeledNumberAmountButtons
          labelIcon={<FaMagnifyingGlass />}
          labelText="Magnifier"
          value={magnifier.value}
          setValue={magnifierValueChangeHandler}
          step={5}
          negatable={false}
          isDisabled={!magnifier.isActive}
        />
        <Inputs.Switch
          value={magnifier.isActive}
          setValue={magnifierActiveChangeHandler}
        />
      </div>
    </AppAccordion>
  );
};

export default Scale;
