"use client";
import DragComponents from "@/components/modules/partials/draggable";
import { FC, useRef, useState } from "react";
import { IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { PiDotsSixBold } from "react-icons/pi";
import ModelToolbarBody from "./toolbarBody";
import { Accordions } from "@/components/modules/partials/accordions";
import { ILight } from "@/interfaces/components/global/controls";

interface IModelToolbarProps {
  name: string;
  rotation: [number, number, number];
  position: [number, number, number];
  scale: number;
  lights: ILight[];
  img: Record<"file" | "fileUrl", File | string>;
  file: File;
  setName: (name: string) => void;
  setRotation: (x: number, y: number, z: number) => void;
  setPosition: (x: number, y: number, z: number) => void;
  setScale: (value: number) => void;
  setLights: (lights: ILight[]) => void;
  setImg: (file: File, fileUrl: string) => void;
}

const ModelToolbar: FC<IModelToolbarProps> = ({
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
}) => {
  const dragRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DragComponents handleRef={dragRef}>
      <Accordions.SingleAccordion toggleElementRef={toggleRef}>
        <div className="flex w-full px-2 justify-between">
          <div
            ref={toggleRef}
            onClick={() => setIsOpen((prev) => !prev)}
            className={`transition ${isOpen && "rotate-180"}`}
          >
            <IoIosArrowUp />
          </div>
          <div ref={dragRef}>
            <PiDotsSixBold className="cursor-move" />
          </div>
          <div>
            <IoIosSearch />
          </div>
        </div>
        <ModelToolbarBody
          name={name}
          rotation={rotation}
          position={position}
          scale={scale}
          lights={lights}
          img={img}
          file={file}
          setName={setName}
          setRotation={setRotation}
          setPosition={setPosition}
          setScale={setScale}
          setLights={setLights}
          setImg={setImg}
        />
      </Accordions.SingleAccordion>
    </DragComponents>
  );
};

export default ModelToolbar;
