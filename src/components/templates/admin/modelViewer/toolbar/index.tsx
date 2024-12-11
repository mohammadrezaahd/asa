"use client";
import DragComponents from "@/components/modules/partials/draggable";
import { FC, useRef, useState } from "react";
import { IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { PiDotsSixBold } from "react-icons/pi";
import ModelToolbarBody from "./toolbarBody";
import { Accordions } from "@/components/modules/partials/accordions";
import { ILight } from "@/types/components/global/controls";

interface IModelToolbarProps {
  rotation: [number, number, number];
  position: [number, number, number];
  setRotation: (x: number, y: number, z: number) => void;
  setPosition: (x: number, y: number, z: number) => void;
  lights: ILight[];
  setLights: (lights: ILight[]) => void;
}

const ModelToolbar: FC<IModelToolbarProps> = ({
  rotation,
  position,
  setRotation,
  setPosition,
  lights,
  setLights,
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
          rotation={rotation}
          position={position}
          setRotation={setRotation}
          setPosition={setPosition}
          lights={lights}
          setLights={setLights}
        />
      </Accordions.SingleAccordion>
    </DragComponents>
  );
};

export default ModelToolbar;
