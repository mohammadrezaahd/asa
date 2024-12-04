import type {
  AccordionProps as OriginalAccordionProps,
  AccordionHeaderProps as OriginalAccordionHeaderProps,
} from "@material-tailwind/react";

declare module "@material-tailwind/react" {
  export interface AccordionHeaderProps
    extends Omit<
      OriginalAccordionHeaderProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalAccordionHeaderProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalAccordionHeaderProps["onPointerLeaveCapture"];
    placeholder?: OriginalAccordionHeaderProps["placeholder"];
  }
  export interface AccordionProps
    extends Omit<
      OriginalAccordionProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture"
    > {
    onPointerEnterCapture?: OriginalAccordionProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalAccordionProps["onPointerLeaveCapture"];
    placeholder?: OriginalAccordionHeaderProps["placeholder"];
  }
}
