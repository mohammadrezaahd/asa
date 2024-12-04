"use client";
import DefaultAccordion from "@/components/modules/partials/accordions";
import DragComponents from "@/components/modules/partials/draggable";
import { useRef } from "react";

const Test = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <DragComponents handleRef={headerRef}>
      <DefaultAccordion>
        <div ref={headerRef}>HEADER</div>
        <div>BODY</div>
      </DefaultAccordion>
    </DragComponents>
  );
};

export default Test;
