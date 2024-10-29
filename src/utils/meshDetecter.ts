import { ThreeEvent } from "@react-three/fiber";
import { Mesh, MeshPhongMaterial } from "three";

const meshDetecter = (
  object: Mesh,
  handleMaterial: (material: MeshPhongMaterial) => void
) => {
  const selectedMesh = object as Mesh;

  if (selectedMesh.isMesh) {
    const material = selectedMesh.material;

    if (Array.isArray(material)) {
      material.forEach((mat) => {
        if (mat instanceof MeshPhongMaterial) {
          handleMaterial(mat);
        }
      });
    } else if (material instanceof MeshPhongMaterial) {
      handleMaterial(material);
    }
  }
};

export default meshDetecter;
