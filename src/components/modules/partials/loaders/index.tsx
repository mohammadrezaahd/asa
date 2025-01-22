import { FC } from "react";
import Basic from "./Basic";

interface ILoadingProps {
  type?: "basic" | "spinner" | "progress";
}

const Loading: FC<ILoadingProps> = ({ type = "basic" }) => {
  switch (type) {
    case "basic":
      return <Basic />;
    case "progress":
      return <div></div>;
    case "spinner":
      return <div></div>;
    default:
      return <h1>LOADING</h1>;
  }
};

export default Loading;
