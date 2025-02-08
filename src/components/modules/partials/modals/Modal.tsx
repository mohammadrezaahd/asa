import React, { FC, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

interface IAppModalProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const AppModal: FC<IAppModalProps> = ({ size = "md" }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="mb-3 flex gap-3">
        <Button onClick={() => setIsOpen(true)} variant="gradient">
          Open Modal XS
        </Button>
      </div>
      <Dialog open={isOpen} size={size || "md"} handler={setIsOpen}>
        <DialogHeader>Its a simple modal.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setIsOpen(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => setIsOpen(false)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AppModal;
