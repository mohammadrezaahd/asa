import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { FC } from "react";
import Lights from "./Lights";

interface ISceneProps {
  fileUrl: string;
}

const Scene: FC<ISceneProps> = ({ fileUrl }) => {
  return (
    <Canvas style={{ height: "100vh" }} shadows>
      <Lights />
      <Model fileUrl={fileUrl} />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
