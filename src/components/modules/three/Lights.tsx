import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

const Lights = () => {
  const ambientRef = useRef<THREE.AmbientLight>(null);
  const directionalRef = useRef<THREE.DirectionalLight>(null);

  useControls("Ambient Light", {
    visible: {
      value: true,
      onChange: (v) => {
        if (ambientRef.current) {
          ambientRef.current.visible = v;
        }
      },
    },
    color: {
      value: "#fff",
      onChange: (v) => {
        if (ambientRef.current) {
          ambientRef.current.color = new THREE.Color(v);
        }
      },
    },
  });
  useControls("Direct Light", {
    visible: {
      value: true,
      onChange: (v) => {
        if (directionalRef.current) {
          directionalRef.current.visible = v;
        }
      },
    },
    color: {
      value: "#fff",
      onChange: (v) => {
        if (directionalRef.current) {
          directionalRef.current.color = new THREE.Color(v);
        }
      },
    },
  });

  return (
    <>
      <ambientLight ref={ambientRef} />
      <directionalLight ref={directionalRef} />
    </>
  );
};

export default Lights;
