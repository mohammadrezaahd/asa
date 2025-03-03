import { Button } from "@material-tailwind/react";
import { FC, ReactNode } from "react";

interface IAppBtnProps {
  children: ReactNode;
  onClick: () => void;
  loading?: boolean;
  fullWidth?: boolean;
  variant?: "filled" | "gradient" | "outlined" | "text";
  color?: "blue" | "red" | "green" | "yellow" | "purple" | "gray";
  className?: string;
}

const AppButton: FC<IAppBtnProps> = ({
  onClick,
  loading = false,
  fullWidth = false,
  variant = "outlined",
  children,
  color = "gray",
  className,
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      loading={loading}
      color={color}
      className={className}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
};
export default AppButton;
