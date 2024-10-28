import { useControls } from "leva";
import { useRef } from "react";
import { AmbientLight } from "three";
import * as THREE from "three";

const Lights = () => {
  const ambientRef = useRef<AmbientLight>(null);
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

  return (
    <>
      <ambientLight ref={ambientRef} />
    </>
  );
};

export default Lights;
