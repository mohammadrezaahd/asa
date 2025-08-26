"use client";
import React, { createElement } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import { IoCloudyNight } from "react-icons/io5";
import { useIsScrolled } from "@/hooks/isScrolledContext";
import Image from "next/image";
import { Inputs } from "@/components/modules/partials/inputs";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { BiSolidDashboard } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoBookmarksSharp } from "react-icons/io5";
import { CiPower } from "react-icons/ci";

import useCurrentUser from "@/hooks/currentUserContext";
import { signOut } from "next-auth/react";

// profile menu component
const profileMenuItems = [
  {
    label: "Dashboard",
    icon: BiSolidDashboard,
  },
  {
    label: "Profile",
    icon: CgProfile,
  },
  {
    label: "Saveds",
    icon: IoBookmarksSharp,
  },
  {
    label: "Sign Out",
    icon: CiPower,
  },
];

function ProfileMenu() {
  const currentUser = useCurrentUser();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
      {currentUser.authorized ? (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
            >
              <Avatar
                variant="circular"
                size="sm"
                alt={currentUser.name}
                className="border border-gray-900 p-0.5"
                src={currentUser.image}
              />
            </Button>
          </MenuHandler>
          <MenuList className="p-1">
            {profileMenuItems.map(({ label, icon }, key) => {
              const isLastItem = key === profileMenuItems.length - 1;
              return (
                <MenuItem
                  key={label}
                  onClick={closeMenu}
                  className={`flex items-center gap-2 rounded ${
                    isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : ""
                  }`}
                >
                  {React.createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                    onClick={
                      isLastItem
                        ? () => signOut({ callbackUrl: "/" })
                        : undefined
                    }
                  >
                    {label}
                  </Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      ) : (
        <Button>ads</Button>
      )}
    </>
  );
}

// nav list menu
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

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
    <React.Fragment>
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
        <IoCloudyNight className="h-[18px] w-[18px] text-blue-gray-500" /> Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
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

export function MainHeader() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const isScrolled = useIsScrolled();

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar
      className={`sticky z-50 top-0 p-2 max-w-none transition-all  lg:pl-6 ${
        isScrolled
          ? " max-w-screen-xl top-1 mx-auto lg:rounded-full"
          : "rounded-none"
      }`}
    >
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex justify-around items-center gap-3">
          <Typography
            href="#"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            <Image src={"/assets/logo.png"} alt="logo" width={80} height={80} />
          </Typography>
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
          <div className="hidden lg:block">
            <Inputs.Text
              value="asd"
              setValue={() => console.log("asd")}
              icon={<IoIosSearch />}
            />
          </div>
        </div>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
