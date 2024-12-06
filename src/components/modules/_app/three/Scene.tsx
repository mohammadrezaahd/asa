import { FC, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
// import Lights from "./Lights";
import { Euler, Vector3 } from "three";
import CustomControls from "./CustomControls";
import { IOrbits } from "@/types/components/global/controls";
import ModelToolbar from "@/components/templates/admin/modelViewer/toolbar";

interface ISceneProps {
  fileUrl: string;
}

const Scene: FC<ISceneProps> = ({ fileUrl }) => {
  
  const [orbitControls, setOrbitControls] = useState<IOrbits>({
    rotation: [-Math.PI / 2, 0, Math.PI],
    position: [0, 0, 0],
    scale: 1,
  });

  const controlChangeHandler = (
    newRotation: Euler,
    newPosition: Vector3,
    newScale: number
  ) => {
    setOrbitControls({
      position: [newPosition.x, newPosition.y, newPosition.z],
      rotation: [newRotation.x, newRotation.y, newRotation.z],
      scale: newScale,
    });
  };

  return (
    <>
      <ModelToolbar />

      <Canvas style={{ height: "100vh" }} shadows>
        {/* <Lights /> */}
        <group
          position={orbitControls.position}
          rotation={orbitControls.rotation}
          scale={orbitControls.scale}
        >
          <Model fileUrl={fileUrl} />
        </group>
        <CustomControls
          onChange={controlChangeHandler}
          initialRotation={orbitControls.rotation}
          initialPosition={orbitControls.position}
          initialScale={orbitControls.scale}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
      </Canvas>
    </>
  );
};

export default Scene;