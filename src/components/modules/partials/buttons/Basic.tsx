import { FC } from "react";

interface IBasicBtnProps {
  onClick: () => void;
}

const Basic: FC<IBasicBtnProps> = ({ onClick }) => {
  return <button onClick={() => onClick()}>CLICK</button>;
};
export default Basic;
