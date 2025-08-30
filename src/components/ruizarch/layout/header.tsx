"use client";

import Link from "next/link";
import AppData from "@/data/app.json";
import { useState, useEffect, MouseEvent } from "react";
import { usePathname } from "next/navigation";

// Type definitions for menu structure
type MenuItem = {
  label: string;
  link: string;
  children: {
    label: string;
    link: string;
  }[];
};

type AppHeader = {
  logo: {
    image: string;
    alt: string;
  };
  menu: MenuItem[];
};

type AppDataType = {
  header: AppHeader;
};

const typedAppData = AppData as AppDataType;

const DefaultHeader = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const asPath = usePathname();

  const isPathActive = (path: string): boolean => {
    return (asPath.indexOf(path) !== -1 && path !== "/") || asPath === path;
  };

  const handleSubMenuClick = (
    index: number,
    e: MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  useEffect(() => {
    // close mobile menu
    setToggle(false);
  }, [asPath]);

  return (
    <>
      {/* top bar */}
      <div className="mil-top-panel">
        <div className="container-fluid">
          <div className="mil-top-panel-content">
            <Link href="/" className="mil-logo">
              <img
                src={typedAppData.header.logo.image}
                alt={typedAppData.header.logo.alt}
                style={{ width: "130px" }}
              />
            </Link>

            <div className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
              <nav>
                <ul>
                  {typedAppData.header.menu.map((item, index) => (
                    <li
                      className={`mil-has-children ${
                        isPathActive(item.link) ? "mil-active" : ""
                      }`}
                      key={`header-menu-item-${index}`}
                    >
                      <Link
                        href={item.link}
                        onClick={
                          item.children.length > 0
                            ? (e) => handleSubMenuClick(index, e)
                            : undefined
                        }
                      >
                        {item.label}
                      </Link>
                      {item.children.length > 0 && (
                        <ul
                          className={
                            activeSubMenu === index ? "mil-active" : ""
                          }
                        >
                          {item.children.map((subitem, subIndex) => (
                            <li
                              key={`header-submenu-item-${subIndex}`}
                              className={
                                isPathActive(subitem.link) ? "mil-active" : ""
                              }
                            >
                              <Link href={subitem.link}>{subitem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* right buttons */}
            <div className="mil-top-panel-buttons">
              <Link href="/contact" className="mil-button mil-sm">
                Start A Project
              </Link>

              <div
                className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
                onClick={() => setToggle(!toggle)}
              >
                <span></span>
              </div>
            </div>
            {/* right buttons end */}
          </div>
        </div>
      </div>
      {/* top bar end */}
    </>
  );
};
export default DefaultHeader;
