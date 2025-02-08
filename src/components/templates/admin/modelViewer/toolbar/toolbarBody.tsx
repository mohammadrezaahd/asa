import { FC } from "react";
import { ToolbarBody } from "./toolbarBodyItems";
import { ILight } from "@/interfaces/global/controls";

interface IModelToolbarBodyProps {
  name: string;
  rotation: [number, number, number];
  position: [number, number, number];
  scale: number;
  lights: ILight[];
  img: Record<"file" | "fileUrl", File | string>;
  file: File;
  magnifier: { value: number; isActive: boolean };
  setName: (name: string) => void;
  setRotation: (x: number, y: number, z: number) => void;
  setPosition: (x: number, y: number, z: number) => void;
  setScale: (value: number) => void;
  setLights: (lights: ILight[]) => void;
  setImg: (file: File, fileUrl: string) => void;
  setMagnifier: (magnifier: { value: number; isActive: boolean }) => void;
}

const ModelToolbarBody: FC<IModelToolbarBodyProps> = ({
  name,
  rotation,
  position,
  scale,
  lights,
  img,
  file,
  setName,
  setRotation,
  setPosition,
  setScale,
  setLights,
  setImg,
  magnifier,
  setMagnifier,
}) => {
  return (
    <div className="px-2 w-full max-h-screen overflow-scroll overflow-x-hidden">
      <ToolbarBody.Name name={name} setName={setName} />
      <ToolbarBody.Rotation rotation={rotation} setRotation={setRotation} />
      <ToolbarBody.Position position={position} setPosition={setPosition} />
      <ToolbarBody.Lights lights={lights} onLightsChange={setLights} />
      <ToolbarBody.Scale
        scale={scale}
        setScale={setScale}
        magnifier={magnifier}
        setMagnifier={setMagnifier}
      />
      <ToolbarBody.Image img={img} setImg={setImg} />
      <ToolbarBody.ModelGallery />
      <ToolbarBody.SubmitBtn
        data={{
          title: name,
          thumbnail: img.file as File,
          scale: scale,
          lights: lights,
          position: position,
          rotation: rotation,
          file: file,
        }}
      />
    </div>
  );
};

export default ModelToolbarBody;
