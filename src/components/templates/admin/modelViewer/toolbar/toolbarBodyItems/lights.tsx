import { FC, useRef } from "react";
import { Accordions } from "@/components/modules/partials/accordions";
import { Inputs } from "@/components/modules/partials/inputs";
import { FaX, FaY, FaZ } from "react-icons/fa6";
import { ILight } from "@/types/components/global/controls";

interface ILightsManagerProps {
  lights: ILight[];
  onLightsChange: (lights: ILight[]) => void;
}

const LightsManager: FC<ILightsManagerProps> = ({ lights, onLightsChange }) => {
  const lightsAccordionToggleRef = useRef(null);

  const colorChangeHandler = (index: number, value: string) => {
    const newLights = [...lights];
    newLights[index].color = value;
    onLightsChange(newLights);
  };

  const visibilityChangeHandler = (index: number, value: boolean) => {
    const newLights = [...lights];
    newLights[index].isVisible = value;
    onLightsChange(newLights);
  };

  const positionChangeHandler = (
    index: number,
    axis: "x" | "y" | "z",
    value: number
  ) => {
    const newLights = [...lights];
    const newPosition = [...newLights[index].position] as [
      number,
      number,
      number
    ];
    if (axis === "x") newPosition[0] = value;
    if (axis === "y") newPosition[1] = value;
    if (axis === "z") newPosition[2] = value;
    newLights[index].position = newPosition;
    onLightsChange(newLights);
  };

  return (
    <Accordions.SingleAccordion toggleElementRef={lightsAccordionToggleRef}>
      <span className="text-sm" ref={lightsAccordionToggleRef}>
        Lights
      </span>
      <div>
        {lights.map((light, index) => (
          <div key={index}>
            <div>
              <Inputs.LabeledNumberAmountButtons
                labelIcon={<FaX />}
                labelText={`${light.type} Light X Position`}
                value={light.position[0]}
                setValue={(value) => positionChangeHandler(index, "x", value)}
                step={0.1}
                negatable={true}
              />
              <Inputs.LabeledNumberAmountButtons
                labelIcon={<FaY />}
                labelText={`${light.type} Light Y Position`}
                value={light.position[1]}
                setValue={(value) => positionChangeHandler(index, "y", value)}
                step={0.1}
                negatable={true}
              />
              <Inputs.LabeledNumberAmountButtons
                labelIcon={<FaZ />}
                labelText={`${light.type} Light Z Position`}
                value={light.position[2]}
                setValue={(value) => positionChangeHandler(index, "z", value)}
                step={0.1}
                negatable={true}
              />
            </div>
            <div className="flex justify-between">
              <Inputs.ColorPicker
                color={light.color}
                setColor={(val) => colorChangeHandler(index, val)}
              />
              <Inputs.Switch
                value={light.isVisible}
                setValue={(val) => visibilityChangeHandler(index, val)}
              />
            </div>
          </div>
        ))}
      </div>
    </Accordions.SingleAccordion>
  );
};

export default LightsManager;
