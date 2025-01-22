import { Tooltip } from "@material-tailwind/react";
import { FC, ReactNode } from "react";

interface IBasicTooltipProps {
  placement?: string;
  className?: string;
  content: ReactNode | string;
  children: ReactNode;
}

const Basic: FC<IBasicTooltipProps> = ({
  placement = "top",
  content,
  children,
  className,
}) => {
  return (
    <Tooltip
      placement={placement}
      content={content}
      className={className ? className : ""}
    >
      {children}
    </Tooltip>
  );
};

export default Basic;
