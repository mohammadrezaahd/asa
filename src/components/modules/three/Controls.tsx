import { ILights } from "@/types/components/global/controls";
import { useControls } from "leva";
import { cloneElement, FC } from "react";
import * as THREE from "three";

interface ILightControlsProps {
  lights: ILights[];
}

interface IObjectColorControlsProps {
  objColor: string;
  setObjColor: (color: string) => void;
}

const LightControls: FC<ILightControlsProps> = ({ lights }) => {
  lights.map((light) => {
    useControls(light.label, {
      visible: {
        value: true,
        onChange: (v) => {
          if (light.ref.current) {
            light.ref.current.visible = v;
          }
        },
      },
      color: {
        value: "#fff",
        onChange: (v) => {
          if (light.ref.current) {
            light.ref.current.color = new THREE.Color(v);
          }
        },
      },
      position: {
        value: { x: 5, y: 5, z: 5 },
        onChange: ({ x, y, z }) => {
          if (light.ref.current) {
            light.ref.current.position.set(x, y, z);
          }
        },
      },
    });
  });

  return (
    <>
      {lights.map((light, index) =>
        cloneElement(light.element, {
          ref: light.ref,
          key: index,
        })
      )}
    </>
  );
};

const objectColorControls = ({
  objColor,
  setObjColor,
}: IObjectColorControlsProps) => {
  useControls("Object color", {
    color: {
      value: objColor,
      onChange: (v) => {
        setObjColor(v);
      },
    },
  });
};

const rotationControl = () => {
  const { rotationX, rotationY, rotationZ } = useControls("Rotation", {
    rotationX: { value: -Math.PI / 2, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationZ: { value: Math.PI / 2, min: -Math.PI, max: Math.PI, step: 0.01 },
  });

  return [rotationX, rotationY, rotationZ] as [number, number, number];
};

export const ModelControls = {
  LightControls,
  objectColorControls,
  rotationControl,
};
