import type {
  AccordionProps as OriginalAccordionProps,
  AccordionHeaderProps as OriginalAccordionHeaderProps,
  AccordionBodyProps as OriginalAccordionBodyProps,
  TypographyProps as OriginalTypographyProps,
  InputProps as OriginalInputProps,
  IconButtonProps as OriginalIconButtonProps,
  ButtonProps as OriginalButtonProps,
  CardProps as OriginalCardProps,
  CardBodyProps as OriginalCardBodyProps,
  CardFooterProps as OriginalCardFooterProps,
  CardHeaderProps as OriginalCardHeaderProps,
  CheckboxProps as OriginalCheckboxProps,
  ChipProps as OriginalChipProps,
  DialogProps as OriginalDialogProps,
  DialogBodyProps as OriginalDialogBodyProps,
  DialogFooterProps as OriginalDialogFooterProps,
  DialogHeaderProps as OriginalDialogHeaderProps,
  DrawerProps as OriginalDrawerProps,
  DropdownProps as OriginalDropdownProps,
  DropdownItemProps as OriginalDropdownItemProps,
  InputIconProps as OriginalInputIconProps,
  ListProps as OriginalListProps,
  ListItemProps as OriginalListItemProps,
  MenuProps as OriginalMenuProps,
  MenuItemProps as OriginalMenuItemProps,
  NavbarProps as OriginalNavbarProps,
  PopoverProps as OriginalPopoverProps,
  PopoverContentProps as OriginalPopoverContentProps,
  RadioProps as OriginalRadioProps,
  SelectProps as OriginalSelectProps,
  TabProps as OriginalTabProps,
  TabPanelProps as OriginalTabPanelProps,
  TabsProps as OriginalTabsProps,
  TextareaProps as OriginalTextareaProps,
  TooltipProps as OriginalTooltipProps,
  SwitchProps as OriginalSwitchProps,
  MenuListProps as OriginalMenuListProps,
  AvatarProps as OriginalAvatarProps,
  BreadcrumbsProps as OriginalBreadcrumbsProps,
} from "@material-tailwind/react";

declare module "@material-tailwind/react" {
  export interface AccordionProps
    extends Omit<
      OriginalAccordionProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalAccordionProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalAccordionProps["onPointerLeaveCapture"];
    placeholder?: OriginalAccordionProps["placeholder"];
  }

  export interface AccordionHeaderProps
    extends Omit<
      OriginalAccordionHeaderProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalAccordionHeaderProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalAccordionHeaderProps["onPointerLeaveCapture"];
    placeholder?: OriginalAccordionHeaderProps["placeholder"];
  }

  export interface AccordionBodyProps
    extends Omit<
      OriginalAccordionBodyProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalAccordionBodyProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalAccordionBodyProps["onPointerLeaveCapture"];
    placeholder?: OriginalAccordionBodyProps["placeholder"];
  }

  export interface TypographyProps
    extends Omit<
      OriginalTypographyProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalTypographyProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalTypographyProps["onPointerLeaveCapture"];
    placeholder?: OriginalTypographyProps["placeholder"];
  }

  export interface InputProps
    extends Omit<
      OriginalInputProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalInputProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalInputProps["onPointerLeaveCapture"];
    placeholder?: OriginalInputProps["placeholder"];
    crossOrigin?: OriginalInputProps["crossOrigin"];
  }

  export interface IconButtonProps
    extends Omit<
      OriginalIconButtonProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalIconButtonProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalIconButtonProps["onPointerLeaveCapture"];
    placeholder?: OriginalIconButtonProps["placeholder"];
  }

  export interface ButtonProps
    extends Omit<
      OriginalButtonProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalButtonProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalButtonProps["onPointerLeaveCapture"];
    placeholder?: OriginalButtonProps["placeholder"];
  }

  export interface CardProps
    extends Omit<
      OriginalCardProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalCardProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalCardProps["onPointerLeaveCapture"];
    placeholder?: OriginalCardProps["placeholder"];
  }

  export interface CardBodyProps
    extends Omit<
      OriginalCardBodyProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalCardBodyProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalCardBodyProps["onPointerLeaveCapture"];
    placeholder?: OriginalCardBodyProps["placeholder"];
  }

  export interface CardFooterProps
    extends Omit<
      OriginalCardFooterProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalCardFooterProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalCardFooterProps["onPointerLeaveCapture"];
    placeholder?: OriginalCardFooterProps["placeholder"];
  }

  export interface CardHeaderProps
    extends Omit<
      OriginalCardHeaderProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalCardHeaderProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalCardHeaderProps["onPointerLeaveCapture"];
    placeholder?: OriginalCardHeaderProps["placeholder"];
  }

  export interface CheckboxProps
    extends Omit<
      OriginalCheckboxProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalCheckboxProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalCheckboxProps["onPointerLeaveCapture"];
    placeholder?: OriginalCheckboxProps["placeholder"];
    crossOrigin?: OriginalCheckboxProps["crossOrigin"];
  }

  export interface ChipProps
    extends Omit<
      OriginalChipProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalChipProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalChipProps["onPointerLeaveCapture"];
    placeholder?: OriginalChipProps["placeholder"];
  }

  export interface DialogProps
    extends Omit<
      OriginalDialogProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalDialogProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalDialogProps["onPointerLeaveCapture"];
    placeholder?: OriginalDialogProps["placeholder"];
  }

  export interface DialogBodyProps
    extends Omit<
      OriginalDialogBodyProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalDialogBodyProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalDialogBodyProps["onPointerLeaveCapture"];
    placeholder?: OriginalDialogBodyProps["placeholder"];
  }

  export interface DialogFooterProps
    extends Omit<
      OriginalDialogFooterProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalDialogFooterProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalDialogFooterProps["onPointerLeaveCapture"];
    placeholder?: OriginalDialogFooterProps["placeholder"];
  }

  export interface DialogHeaderProps
    extends Omit<
      OriginalDialogHeaderProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalDialogHeaderProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalDialogHeaderProps["onPointerLeaveCapture"];
    placeholder?: OriginalDialogHeaderProps["placeholder"];
  }

  export interface DrawerProps
    extends Omit<
      OriginalDrawerProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalDrawerProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalDrawerProps["onPointerLeaveCapture"];
    placeholder?: OriginalDrawerProps["placeholder"];
  }

  export interface DropdownProps
    extends Omit<
      OriginalDropdownProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalDropdownProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalDropdownProps["onPointerLeaveCapture"];
    placeholder?: OriginalDropdownProps["placeholder"];
  }

  export interface DropdownItemProps
    extends Omit<
      OriginalDropdownItemProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalDropdownItemProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalDropdownItemProps["onPointerLeaveCapture"];
    placeholder?: OriginalDropdownItemProps["placeholder"];
  }

  export interface InputIconProps
    extends Omit<
      OriginalInputIconProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalInputIconProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalInputIconProps["onPointerLeaveCapture"];
    placeholder?: OriginalInputIconProps["placeholder"];
  }

  export interface ListProps
    extends Omit<
      OriginalListProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalListProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalListProps["onPointerLeaveCapture"];
    placeholder?: OriginalListProps["placeholder"];
  }

  export interface ListItemProps
    extends Omit<
      OriginalListItemProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalListItemProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalListItemProps["onPointerLeaveCapture"];
    placeholder?: OriginalListItemProps["placeholder"];
  }

  export interface MenuProps
    extends Omit<
      OriginalMenuProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalMenuProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalMenuProps["onPointerLeaveCapture"];
    placeholder?: OriginalMenuProps["placeholder"];
  }

  export interface MenuItemProps
    extends Omit<
      OriginalMenuItemProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalMenuItemProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalMenuItemProps["onPointerLeaveCapture"];
    placeholder?: OriginalMenuItemProps["placeholder"];
  }

  export interface NavbarProps
    extends Omit<
      OriginalNavbarProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalNavbarProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalNavbarProps["onPointerLeaveCapture"];
    placeholder?: OriginalNavbarProps["placeholder"];
  }

  export interface PopoverProps
    extends Omit<
      OriginalPopoverProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalPopoverProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalPopoverProps["onPointerLeaveCapture"];
    placeholder?: OriginalPopoverProps["placeholder"];
  }

  export interface PopoverContentProps
    extends Omit<
      OriginalPopoverContentProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalPopoverContentProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalPopoverContentProps["onPointerLeaveCapture"];
    placeholder?: OriginalPopoverContentProps["placeholder"];
  }

  export interface RadioProps
    extends Omit<
      OriginalRadioProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalRadioProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalRadioProps["onPointerLeaveCapture"];
    placeholder?: OriginalRadioProps["placeholder"];
  }

  export interface SelectProps
    extends Omit<
      OriginalSelectProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalSelectProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalSelectProps["onPointerLeaveCapture"];
    placeholder?: OriginalSelectProps["placeholder"];
  }

  export interface TabProps
    extends Omit<
      OriginalTabProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalTabProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalTabProps["onPointerLeaveCapture"];
    placeholder?: OriginalTabProps["placeholder"];
  }

  export interface TabPanelProps
    extends Omit<
      OriginalTabPanelProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalTabPanelProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalTabPanelProps["onPointerLeaveCapture"];
    placeholder?: OriginalTabPanelProps["placeholder"];
  }

  export interface TabsProps
    extends Omit<
      OriginalTabsProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalTabsProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalTabsProps["onPointerLeaveCapture"];
    placeholder?: OriginalTabsProps["placeholder"];
  }

  export interface TextareaProps
    extends Omit<
      OriginalTextareaProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalTextareaProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalTextareaProps["onPointerLeaveCapture"];
    placeholder?: OriginalTextareaProps["placeholder"];
  }

  export interface TooltipProps
    extends Omit<
      OriginalTooltipProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalTooltipProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalTooltipProps["onPointerLeaveCapture"];
    placeholder?: OriginalTooltipProps["placeholder"];
  }
  export interface SwitchProps
    extends Omit<
      OriginalSwitchProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalSwitchProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalSwitchProps["onPointerLeaveCapture"];
    placeholder?: OriginalSwitchProps["placeholder"];
    crossOrigin?: OriginalSwitchProps["crossOrigin"];
  }
  export interface MenuListProps
    extends Omit<
      OriginalMenuListProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalMenuListProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalMenuListProps["onPointerLeaveCapture"];
    placeholder?: OriginalMenuListProps["placeholder"];
    crossOrigin?: OriginalMenuListProps["crossOrigin"];
  }
  export interface AvatarProps
    extends Omit<
      OriginalAvatarProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalAvatarProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalAvatarProps["onPointerLeaveCapture"];
    placeholder?: OriginalAvatarProps["placeholder"];
    crossOrigin?: OriginalAvatarProps["crossOrigin"];
  }
  export interface BreadcrumbsProps
    extends Omit<
      OriginalBreadcrumbsProps,
      "onPointerEnterCapture" | "onPointerLeaveCapture" | "placeholder"
    > {
    onPointerEnterCapture?: OriginalBreadcrumbsProps["onPointerEnterCapture"];
    onPointerLeaveCapture?: OriginalBreadcrumbsProps["onPointerLeaveCapture"];
    placeholder?: OriginalBreadcrumbsProps["placeholder"];
  }
}
