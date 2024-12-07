"use client";
import DragComponents from "@/components/modules/partials/draggable";
import { FC, useRef, useState } from "react";
import { IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { PiDotsSixBold } from "react-icons/pi";
import ModelToolbarBody from "./toolbarBody";
import { Accordions } from "@/components/modules/partials/accordions";

interface IModelToolbarProps {
  setVal: (x: number, y: number, z: number) => void;
  rotation: [number, number, number];
}

const ModelToolbar: FC<IModelToolbarProps> = ({ setVal, rotation }) => {
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
        <ModelToolbarBody setVal={setVal} rotation={rotation} />
      </Accordions.SingleAccordion>
    </DragComponents>
  );
};

export default ModelToolbar;
