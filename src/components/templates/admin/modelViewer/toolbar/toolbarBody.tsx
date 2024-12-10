import { FC } from "react";
import { ToolbarBody } from "./toolbarBodyItems";

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
  return (
    <div className="px-2 w-full max-h-screen overflow-scroll overflow-x-hidden">
      <ToolbarBody.Rotation rotation={rotation} setRotation={setRotation} />
      <ToolbarBody.Position position={position} setPosition={setPosition} />
    </div>
  );
};

export default ModelToolbarBody;
