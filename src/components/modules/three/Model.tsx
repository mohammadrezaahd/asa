import { ThreeEvent, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { FC } from "react";
import { Mesh, MeshPhongMaterial } from "three";
import { FBXLoader } from "three/examples/jsm/Addons.js";

interface IModelProps {
  fileUrl: string;
}

const Model: FC<IModelProps> = ({ fileUrl }) => {
  const fbx = useLoader(FBXLoader, fileUrl);

  const { rotationX, rotationY, rotationZ } = useControls({
    rotationX: { value: -Math.PI / 2, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationZ: { value: Math.PI / 2, min: -Math.PI, max: Math.PI, step: 0.01 },
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    const selectedMesh = event.object as Mesh;

    if (selectedMesh.isMesh) {
      const material = selectedMesh.material;

      if (Array.isArray(material)) {
        material.forEach((mat) => {
          if (mat instanceof MeshPhongMaterial) {
            mat.color.set("blue");
          }
        });
      } else if (material instanceof MeshPhongMaterial) {
        material.color.set("blue");
      }

      console.log("Selected Mesh:", selectedMesh);
    }
  };

  return (
    <primitive
      object={fbx}
      rotation={[rotationX, rotationY, rotationZ]}
      onClick={handleClick}
    />
  );
};

export default Model;
