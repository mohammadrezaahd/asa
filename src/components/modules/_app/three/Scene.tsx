import { FC, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Euler, Vector3 } from "three";
import CustomControls from "./CustomControls";
import ModelToolbar from "@/components/templates/admin/modelViewer/toolbar";
import Lights from "./Lights";
import { ILight } from "@/types/components/global/controls";
import { constants } from "../../../../constants";

interface ISceneProps {
  fileUrl: string;
}
const Scene: FC<ISceneProps> = ({ fileUrl }) => {
  //Lights
  const [lights, setLights] = useState<ILight[]>(
    constants.lightTypes.map((type, index) => ({
      type,
      color: "#ffffff",
      isVisible: true,
      position: [0, 0, 0],
      setColor: (color: string) => {
        setLights((prev) => {
          const newLights = [...prev];
          newLights[index].color = color;
          return newLights;
        });
      },
      setIsVisible: (isVisible: boolean) => {
        setLights((prev) => {
          const newLights = [...prev];
          newLights[index].isVisible = isVisible;
          return newLights;
        });
      },
      setPosition: (x: number, y: number, z: number) => {
        setLights((prev) => {
          const newLights = [...prev];
          newLights[index].position = [x, y, z];
          return newLights;
        });
      },
    }))
  );

  //Orbit controls
  const [controls, setControls] = useState({
    rotation: [-Math.PI / 2, 0, Math.PI] as [number, number, number],
    position: [0, 0, 0] as [number, number, number],
    scale: 1,
  });

  //General data
  const [generalData, setGeneralData] = useState({ name: "", imgPath: "" });

  const controlChangeHandler = (
    newRotation: Euler,
    newPosition: Vector3,
    newScale: number
  ) => {
    setControls({
      position: [
        Number(newPosition.x.toFixed(2)),
        Number(newPosition.y.toFixed(2)),
        Number(newPosition.z.toFixed(2)),
      ],
      rotation: [
        Number(newRotation.x.toFixed(2)),
        Number(newRotation.y.toFixed(2)),
        Number(newRotation.z.toFixed(2)),
      ],
      scale: newScale,
    });
  };

  const changeRotation = (x: number, y: number, z: number) => {
    setControls((prev) => ({
      ...prev,
      rotation: [x, y, z],
    }));
  };

  const changePosition = (x: number, y: number, z: number) => {
    setControls((prev) => ({
      ...prev,
      position: [x, y, z],
    }));
  };

  const changeScale = (value: number) => {
    setControls((prev) => ({
      ...prev,
      scale: value,
    }));
  };

  const changeName = (value: string) => {
    setGeneralData((prev) => {
      return { ...prev, name: value };
    });
  };
  return (
    <>
      <ModelToolbar
        name={generalData.name}
        rotation={controls.rotation}
        position={controls.position}
        scale={controls.scale}
        lights={lights}
        setName={changeName}
        setRotation={changeRotation}
        setPosition={changePosition}
        setScale={changeScale}
        setLights={setLights}
      />
      <Canvas style={{ height: "100vh" }} shadows>
        <group
          position={controls.position}
          rotation={controls.rotation}
          scale={controls.scale}
        >
          <Model fileUrl={fileUrl} />
        </group>
        <Lights lights={lights} key={JSON.stringify(lights)} />

        <CustomControls
          onChange={controlChangeHandler}
          rotation={controls.rotation}
          position={controls.position}
          scale={controls.scale}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
      </Canvas>
    </>
  );
};

export default Scene;
