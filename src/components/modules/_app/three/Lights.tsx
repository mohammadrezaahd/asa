import { ILight } from "@/types/components/global/controls";
import { FC, Fragment } from "react";

interface ILightsProps {
  lights: ILight[];
}

const Lights: FC<ILightsProps> = ({ lights }) => {
  return (
    <>
      {lights.map((light, index) =>
        light.isVisible ? (
          <Fragment key={index}>
            {light.type === "Ambient" && (
              <ambientLight color={light.color} position={light.position} />
            )}
            {light.type === "Directional" && (
              <directionalLight color={light.color} position={light.position} />
            )}
          </Fragment>
        ) : null
      )}
    </>
  );
};

export default Lights;
