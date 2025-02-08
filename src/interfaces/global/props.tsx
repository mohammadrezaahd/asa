import { ReactNode, RefObject } from "react";

export interface IAppAccordionProps {
  children: ReactNode;
  toggleElementRef: RefObject<HTMLDivElement>;
}

export interface IAppBtnProps {
  children: ReactNode;
  onClick: () => void;
  loading?: boolean;
  fullWidth?: boolean;
  variant?: "filled" | "gradient" | "outlined" | "text";
}

export interface IDragComponentsProps {
  children: ReactNode;
  handleRef: React.RefObject<HTMLDivElement>;
}

export interface IColorPickerProps {
  color: string;
  setColor: (color: string) => void;
}

export interface IFileInputProps {
  onFileSelect: (fileUrl: string, file: File) => void;
  fileFormat: string[];
  className?: string;
}

export interface ILabeledNumberAmountButtonsProps {
  labelIcon?: ReactNode;
  labelText?: string;
  description?: string;
  step?: number;
  negatable?: boolean;
  isDisabled?: boolean;
  value: number;
  setValue: (value: number) => void;
}

export interface ISwitchProps {
  label?: string;
  value: boolean;
  setValue: (value: boolean) => void;
}

export interface ITextInputProps {
  label?: string;
  value: string;
  setValue: (value: string) => void;
}

export interface ILoadingProps {
  type?: "basic" | "spinner" | "progress" | "box";
}

export interface IAppModalProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface IAppTooltipProps {
  placement?: string;
  className?: string;
  content: ReactNode | string;
  children: ReactNode;
}
