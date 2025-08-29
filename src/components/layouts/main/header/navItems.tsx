"use client";
import {
  Card,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  MobileNav,
  Typography,
} from "@material-tailwind/react";
import { createElement, Fragment, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCloudyNight } from "react-icons/io5";

const NavItems = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  const navListMenuItems = [
    {
      title: "@material-tailwind/html",
      description:
        "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
      title: "@material-tailwind/react",
      description:
        "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
      title: "Material Tailwind PRO",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ];
  const navListItems = [
    {
      label: "Account",
      icon: IoCloudyNight,
    },
    {
      label: "Blocks",
      // icon: IoCloudyNight,
    },
    {
      label: "Docs",
      // icon: IoCloudyNight,
    },
  ];
  //   const renderItems = navListMenuItems.map(({ title, description }) => (
  //     <a href="#" key={title}>
  //       <MenuItem>
  //         <Typography variant="h6" color="blue-gray" className="mb-1">
  //           {title}
  //         </Typography>
  //         <Typography variant="small" color="gray" className="font-normal">
  //           {description}
  //         </Typography>
  //       </MenuItem>
  //     </a>
  //   ));

  function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const renderItems = navListMenuItems.map(({ title, description }) => (
      <a href="#" key={title}>
        <MenuItem>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            {title}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {description}
          </Typography>
        </MenuItem>
      </a>
    ));

    return (
      <Fragment>
        <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
          <MenuHandler>
            <Typography as="a" href="#" variant="small" className="font-normal">
              <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                Pages
                <IoMdArrowDropdown
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </MenuItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
            <Card
              color="blue"
              shadow={false}
              variant="gradient"
              className="col-span-3 grid h-full w-full place-items-center rounded-md"
            >
              <IoCloudyNight strokeWidth={1} className="h-28 w-28" />
            </Card>
            <ul className="col-span-4 flex w-full flex-col gap-1">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
          <IoCloudyNight className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
          Pages{" "}
        </MenuItem>
        <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
          {renderItems}
        </ul>
      </Fragment>
    );
  }

  function NavList() {
    return (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        <NavListMenu />
        {navListItems.map(({ label, icon }) => (
          <Typography
            key={label}
            as="a"
            href="#"
            variant="small"
            color="gray"
            className="font-medium text-blue-gray-500"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {icon && (
                <>{createElement(icon, { className: "h-[18px] w-[18px]" })}</>
              )}
              <span className="text-gray-900"> {label}</span>
            </MenuItem>
          </Typography>
        ))}
      </ul>
    );
  }
  return (
    <>
      <div className="hidden lg:block">
        <NavList />
      </div>
      <IconButton
        size="sm"
        color="blue-gray"
        variant="text"
        onClick={toggleIsNavOpen}
        className="ml-auto mr-2 lg:hidden"
      >
        <IoCloudyNight className="h-6 w-6" />
      </IconButton>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </>
  );
};

export default NavItems;
