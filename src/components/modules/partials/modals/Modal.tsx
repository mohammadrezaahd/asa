import React, { FC, ReactNode } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

interface IAppModalProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: (value: boolean) => void;
}

const AppModal: FC<IAppModalProps> = ({
  size = "md",
  isOpen = false,
  children,
  setIsOpen,
}) => {
  const [header, body, footer] = Array.isArray(children)
    ? children
    : [null, children];

  return (
    <>
      <Dialog open={isOpen} size={size || "md"} handler={setIsOpen}>
        <DialogHeader>{header}</DialogHeader>
        <DialogBody>{body}</DialogBody>
        <DialogFooter>{footer}</DialogFooter>
      </Dialog>
    </>
  );
};

export default AppModal;
