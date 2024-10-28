import { useControls } from "leva";
import { useRef } from "react";
import { AmbientLight } from "three";
import * as THREE from "three";

const Lights = () => {
  const ambientRef = useRef<AmbientLight>(null);

  // useControls("Ambient Light", {
  //   visible: {
  //     value: false,
  //     onChange: (v) => {
  //       if (ambientRef.current) {
  //         ambientRef.current.visible = v;
  //       }
  //     },
  //   },
  //   color: {
  //     value: "#fff",
  //     onChange: (v) => {
  //       if (ambientRef.current) {
  //         ambientRef.current.color = new THREE.Color(v);
  //       }
  //     },
  //   },
  // });

  const { ambientLightColor } = useControls({
    ambientLightColor: "#fff",
  });

  return (
    <>
      <ambientLight ref={ambientRef} args={[ambientLightColor]} />
    </>
  );
};

export default Lights;
