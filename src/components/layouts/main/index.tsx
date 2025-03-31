import { FC, ReactNode } from "react";
import { MainHeader } from "./header";

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
      <div>FOOTER</div>
    </>
  );
};

export default MainLayout;
