import { FC } from "react";
import { ToolbarBody } from "./toolbarBodyItems";
import { ILight } from "@/types/components/global/controls";

interface IModelToolbarBodyProps {
  rotation: [number, number, number];
  position: [number, number, number];
  lights: ILight[];
  setRotation: (x: number, y: number, z: number) => void;
  setPosition: (x: number, y: number, z: number) => void;
  setLights: (lights: ILight[]) => void;
}

const ModelToolbarBody: FC<IModelToolbarBodyProps> = ({
  rotation,
  position,
  setRotation,
  setPosition,
  lights,
  setLights,
}) => {
  return (
    <div className="px-2 w-full max-h-screen overflow-scroll overflow-x-hidden">
      <ToolbarBody.Rotation rotation={rotation} setRotation={setRotation} />
      <ToolbarBody.Position position={position} setPosition={setPosition} />
      <ToolbarBody.Lights lights={lights} onLightsChange={setLights} />
    </div>
  );
};

export default ModelToolbarBody;
