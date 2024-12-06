"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { ReactNode, useState, useEffect, FC, RefObject } from "react";

interface ISingleAccordionProps {
  children: ReactNode;
  toggleElementRef: RefObject<HTMLDivElement>;
}

const SingleAccordion: FC<ISingleAccordionProps> = ({
  children,
  toggleElementRef,
}) => {
  const [header, body] = Array.isArray(children) ? children : [null, children];
  const [whichOpen, setWhichOpen] = useState<number>(1);

  const openAccordionHandler = () => {
    setWhichOpen((prev) => (prev === 1 ? 0 : 1));
  };

  useEffect(() => {
    const toggleElement = toggleElementRef.current;
    if (toggleElement) {
      toggleElement.addEventListener("click", openAccordionHandler);
    }
    return () => {
      if (toggleElement) {
        toggleElement.removeEventListener("click", openAccordionHandler);
      }
    };
  }, [toggleElementRef]);

  return (
    <Accordion open={whichOpen === 1} className="bg-white w-1/5">
      <AccordionHeader>{header}</AccordionHeader>
      <AccordionBody>{body}</AccordionBody>
    </Accordion>
  );
};

export default SingleAccordion;
