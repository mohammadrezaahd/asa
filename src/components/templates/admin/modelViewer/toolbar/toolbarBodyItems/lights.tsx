import { FC } from "react";

const Lights:FC = () => {
  return (
    <>
      {/* <Accordions.SingleAccordion toggleElementRef={lightsAccordionToggleRef}>
        <span className="text-sm" ref={lightsAccordionToggleRef}>
          Lights
        </span>
        <div>
          {lights.map((light, index) => (
            <div key={index}>
              <div>
                <Inputs.LabeledNumberAmountButtons
                  labelIcon={<FaX />}
                  labelText={`${light.type} Light`}
                  value={positionValues.x}
                  setValue={(value) => positionChangeHandler("x", value)}
                  step={0.1}
                  negatable={true}
                />
              </div>
              <div className="flex justify-between">
                <Inputs.ColorPicker
                  color={light.color}
                  setColor={(val) => colorChangeHandler(index, val)}
                />
                <Inputs.Switch />
                <Inputs.Switch />
                <button onClick={() => console.log(light.color)}>CLICK</button>
              </div>
            </div>
          ))}
        </div>
      </Accordions.SingleAccordion> */}
    </>
  );
};
export default Lights;
