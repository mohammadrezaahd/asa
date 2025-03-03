import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ReactNode, useState, MouseEvent } from "react";
import { IoChevronUpCircleOutline } from "react-icons/io5";

interface IAppMenuProps<T> {
  data: T[];
  renderItem: (item: T) => ReactNode;
  children: ReactNode;
  getKey: (item: T) => number;
  getSubs?: (item: T) => T[] | undefined;
}

const AppMenu = <T,>({
  data,
  renderItem,
  children,
  getKey,
  getSubs,
}: IAppMenuProps<T>) => {
  const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});
  let timeoutId: NodeJS.Timeout | null = null;

  const handleMenuToggle = (value: number, isOpen: boolean) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [value]: isOpen,
    }));
  };

  const handleMouseEnter = (value: number) => {
    if (timeoutId) clearTimeout(timeoutId);
    handleMenuToggle(value, true);
  };

  const handleMouseLeave = (value: number) => {
    timeoutId = setTimeout(() => {
      handleMenuToggle(value, false);
    }, 200);
  };

  const handleItemClick = (event: MouseEvent) => {
    event.nativeEvent.stopImmediatePropagation();
  };

  const renderMenuItems = (items: T[]) => {
    return items.map((item) => {
      const subs = getSubs ? getSubs(item) : undefined;
      if (subs && subs.length > 0) {
        return (
          <Menu
            key={getKey(item)}
            placement="right-start"
            open={!!openMenus[getKey(item)]}
            offset={15}
          >
            <MenuHandler
              className="flex items-center justify-between"
              onMouseEnter={() => handleMouseEnter(getKey(item))}
              onMouseLeave={() => handleMouseLeave(getKey(item))}
            >
              <MenuItem onClick={handleItemClick}>
                {renderItem(item)}
                <IoChevronUpCircleOutline
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenus[getKey(item)] ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList
              onMouseEnter={() => handleMouseEnter(getKey(item))}
              onMouseLeave={() => handleMouseLeave(getKey(item))}
            >
              {renderMenuItems(subs)}
            </MenuList>
          </Menu>
        );
      } else {
        return (
          <MenuItem key={getKey(item)} onClick={handleItemClick}>
            {renderItem(item)}
          </MenuItem>
        );
      }
    });
  };

  return (
    <Menu allowHover dismiss={{ itemPress: false }}>
      <MenuHandler>{children}</MenuHandler>
      <MenuList>{renderMenuItems(data)}</MenuList>
    </Menu>
  );
};

export default AppMenu;
