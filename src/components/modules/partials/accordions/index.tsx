"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { ReactNode, useState } from "react";

interface DefaultAccordionProps {
  children: ReactNode;
}

const DefaultAccordion: React.FC<DefaultAccordionProps> = ({ children }) => {
  const [header, body] = Array.isArray(children) ? children : [null, children];
  const [whichOpen, setWhichOpen] = useState<number>(1);

  const openAccordionHandler = (value: number) => {
    setWhichOpen(whichOpen === value ? 0 : value);
  };

  return (
    <Accordion open={whichOpen === 1}>
      <AccordionHeader onClick={() => openAccordionHandler(1)}>
        {header}
      </AccordionHeader>
      <AccordionBody>{body}</AccordionBody>
    </Accordion>
  );
};

export default DefaultAccordion;
