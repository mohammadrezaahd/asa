import { FC } from "react";
import { ToolbarBody } from "./toolbarBodyItems";
import { ILight } from "@/types/components/global/controls";

interface IModelToolbarBodyProps {
  name: string;
  rotation: [number, number, number];
  position: [number, number, number];
  scale: number;
  lights: ILight[];
  setName: (name: string) => void;
  setRotation: (x: number, y: number, z: number) => void;
  setPosition: (x: number, y: number, z: number) => void;
  setScale: (value: number) => void;
  setLights: (lights: ILight[]) => void;
  img: Record<"file" | "fileUrl", File | string>;
  setImg: (file: File, fileUrl: string) => void;
}

const ModelToolbarBody: FC<IModelToolbarBodyProps> = ({
  name,
  rotation,
  position,
  scale,
  lights,
  img,
  setName,
  setRotation,
  setPosition,
  setScale,
  setLights,
  setImg,
}) => {
  return (
    <div className="px-2 w-full max-h-screen overflow-scroll overflow-x-hidden">
      <ToolbarBody.Name name={name} setName={setName} />
      <ToolbarBody.Rotation rotation={rotation} setRotation={setRotation} />
      <ToolbarBody.Position position={position} setPosition={setPosition} />
      <ToolbarBody.Lights lights={lights} onLightsChange={setLights} />
      <ToolbarBody.Scale scale={scale} setScale={setScale} />
      <ToolbarBody.Image img={img} setImg={setImg} />
    </div>
  );
};

export default ModelToolbarBody;
