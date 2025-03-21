import { FC, useState, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Euler, Vector3 } from "three";
import CustomControls from "./CustomControls";
import ModelToolbar from "@/components/templates/admin/modelViewer/toolbar";
import Lights from "./Lights";
import { ILight } from "@/interfaces/global/controls";
import { constants } from "../../../../constants";
import { TDModelsApi } from "@/components/api/TDModels.api";

interface ISceneProps {
  fileUrl: string;
  file?: File;
  isAdmin: boolean;
}

const Scene: FC<ISceneProps> = ({ fileUrl, file, isAdmin }) => {
  // Lights
  const [lights, setLights] = useState<ILight[]>(
    constants.lightTypes.map((type, index) => ({
      type,
      color:
        type === "Ambient"
          ? "#ffffff"
          : type === "Directional"
          ? "#f8d898"
          : type === "Point"
          ? "#ffddaa"
          : type === "Spot"
          ? "#aaffaa"
          : "#ffffff",
      isVisible: true,
      position:
        type === "Directional"
          ? [5, 10, 5]
          : type === "Point"
          ? [0, 5, 0]
          : type === "Spot"
          ? [2, 8, 2]
          : [0, 0, 0],
      setColor: (color: string) => {
        setLights((prev) => {
          const newLights = [...prev];
          newLights[index] = { ...newLights[index], color };
          return newLights;
        });
      },
      setIsVisible: (isVisible: boolean) => {
        setLights((prev) => {
          const newLights = [...prev];
          newLights[index] = { ...newLights[index], isVisible };
          return newLights;
        });
      },
      setPosition: (x: number, y: number, z: number) => {
        setLights((prev) => {
          const newLights = [...prev];
          newLights[index] = { ...newLights[index], position: [x, y, z] };
          return newLights;
        });
      },
    }))
  );

  // Orbit controls
  const [controls, setControls] = useState({
    rotation: [-Math.PI / 2, 0, Math.PI] as [number, number, number],
    position: [0, 0, 0] as [number, number, number],
    scale: 30,
  });

  // General data
  const [generalData, setGeneralData] = useState({
    name: "",
    img: { fileUrl: "", file: new File([], "") },
  });

  const [magnifier, setMagnifier] = useState({
    isActive: false,
    value: 15,
  });

  const [viewUrl, setViewUrl] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const res = await TDModelsApi.getModelById(fileUrl, true);
      const data = res.data;
      setLights(data.lights);
      setControls({
        position: data.position,
        rotation: data.rotation,
        scale: data.scale,
      });
      setGeneralData({
        name: data.title,
        img: { fileUrl: data.thumbnail, file: new File([], "") },
      });
      setViewUrl(`/${data.file}`);
    };
    if (!file) {
      getData();
    }
  }, [fileUrl, file]);

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

  const changeImage = (file: File, fileUrl: string) => {
    setGeneralData((prev) => {
      return { ...prev, img: { file, fileUrl } };
    });
  };

  return (
    <>
      {isAdmin && file && (
        <ModelToolbar
          name={generalData.name}
          rotation={controls.rotation}
          position={controls.position}
          scale={controls.scale}
          lights={lights}
          img={generalData.img}
          magnifier={magnifier}
          file={file}
          setName={changeName}
          setRotation={changeRotation}
          setPosition={changePosition}
          setScale={changeScale}
          setLights={setLights}
          setImg={changeImage}
          setMagnifier={setMagnifier}
        />
      )}
      {file ||
        (viewUrl && (
          <Canvas style={{ height: "100vh" }} shadows>
            <group
              position={controls.position}
              rotation={controls.rotation}
              scale={magnifier.isActive ? magnifier.value : 5}
            >
              <Model fileUrl={file ? fileUrl : viewUrl} />
            </group>
            <Lights lights={lights} key={JSON.stringify(lights)} />

            <CustomControls
              onChange={controlChangeHandler}
              rotation={controls.rotation}
              position={controls.position}
              scale={controls.scale}
            />
            <PerspectiveCamera makeDefault position={[0, 0, controls.scale]} />
          </Canvas>
        ))}
    </>
  );
};

export default Scene;
