import { Button } from "@material-tailwind/react";
import { FC, ReactNode } from "react";

interface IAppBtnProps {
  children: ReactNode;
  onClick: () => void;
  loading?: boolean;
  fullWidth?: boolean;
  variant?: "filled" | "gradient" | "outlined" | "text";
}

const AppButton: FC<IAppBtnProps> = ({
  onClick,
  loading = false,
  fullWidth = false,
  variant = "outlined",
  children,
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      loading={loading}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
};
export default AppButton;
