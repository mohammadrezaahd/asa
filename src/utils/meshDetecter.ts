import { Mesh, MeshPhongMaterial, MeshStandardMaterial, Material } from "three";

const meshDetecter = (
  object: Mesh,
  handleMaterial: (material: Material) => void
) => {
  const selectedMesh = object as Mesh;

  if (selectedMesh.isMesh) {
    const material = selectedMesh.material;

    if (Array.isArray(material)) {
      material.forEach((mat) => {
        if (mat instanceof MeshPhongMaterial || mat instanceof MeshStandardMaterial) {
          handleMaterial(mat);
        }
      });
    } else if (material instanceof MeshPhongMaterial || material instanceof MeshStandardMaterial) {
      handleMaterial(material);
    }
  }
};

export default meshDetecter;
