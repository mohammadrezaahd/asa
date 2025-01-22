import { FC } from "react";
import Basic from "./Basic";
import BoxLoader from "./Box";

interface ILoadingProps {
  type?: "basic" | "spinner" | "progress" | "box";
}

const Loading: FC<ILoadingProps> = ({ type = "basic" }) => {
  switch (type) {
    case "basic":
      return <Basic />;
    case "progress":
      return <div></div>;
    case "spinner":
      return <div></div>;
    case "box":
      return <BoxLoader />;
    default:
      return <h1>LOADING</h1>;
  }
};

export default Loading;
