import { ILights } from "@/types/components/global/controls";
import { FC } from "react";

interface ILightsProps {
  ambient: ILights;
  // directional: ILights;
  // spot: ILights;
  // point: ILights;
}

const Lights: FC<ILightsProps> = ({ ambient }) => {
  return (
    <>
      <ambientLight />
      {/* <directionalLight />
      <spotLight />
      <pointLight /> */}
    </>
  );
};

export default Lights;
