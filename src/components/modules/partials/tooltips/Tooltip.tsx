import { Tooltip } from "@material-tailwind/react";
import { FC, ReactNode } from "react";

interface IAppTooltipProps {
  placement?: string;
  className?: string;
  content: ReactNode | string;
  children: ReactNode;
}

const AppTooltip: FC<IAppTooltipProps> = ({
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

export default AppTooltip;
