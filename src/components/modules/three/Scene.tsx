import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { FC, useRef } from "react";
import Lights from "./Lights";
import { useModelControls } from "@/hooks/modelControlContext";
import { OrbitControls as IOrbitControls } from "three-stdlib";

interface ISceneProps {
  fileUrl: string;
}

const Scene: FC<ISceneProps> = ({ fileUrl }) => {
  const { setRotation } = useModelControls();
  const controlsRef = useRef<IOrbitControls>(null);

  const controlChangeHandler = () => {
    if (controlsRef.current) {
      const { x, y, z } = controlsRef.current.object.rotation;
      setRotation([x, y, z]);
    }
  };

  return (
    <Canvas style={{ height: "100vh" }} shadows>
      <Lights />
      <Model fileUrl={fileUrl} />
      <OrbitControls ref={controlsRef} onChange={controlChangeHandler} />
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />
    </Canvas>
  );
};

export default Scene;
