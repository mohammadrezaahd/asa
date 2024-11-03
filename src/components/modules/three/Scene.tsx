import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { FC } from "react";
import { ModelControls } from "@/hooks/modelControlContext";
import Lights from "./Lights";

interface ISceneProps {
  fileUrl: string;
}

const Scene: FC<ISceneProps> = ({ fileUrl }) => {
  return (
    <Canvas style={{ height: "100vh" }} shadows>
      <ModelControls>
        <Lights />
        <Model fileUrl={fileUrl} />
      </ModelControls>
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />
    </Canvas>
  );
};

export default Scene;
