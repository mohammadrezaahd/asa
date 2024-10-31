import { useProgress } from "@react-three/drei";
import { FC, useEffect, useState } from "react";
import Basic from "./Basic";

interface ILoadingProps {
  type?: "basic" | "spinner" | "progress";
}

const Loading: FC<ILoadingProps> = ({ type = "basic" }) => {
  const { progress } = useProgress();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsLoaded(true);
    }
  }, [progress]);

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
