import {
    Bloom,
    ToneMapping,
    EffectComposer,
  } from "@react-three/postprocessing";
  import { FC, Fragment } from "react";
  import { ILight } from "@/interfaces/components/global/controls";
  
  interface ILightsProps {
    lights: ILight[];
  }
  
  const Lights: FC<ILightsProps> = ({ lights }) => {
    return (
      <>
        {lights.map((light, index) =>
          light.isVisible ? (
            <Fragment key={index}>
              {light.type === "Ambient" && (
                <ambientLight color={light.color} intensity={0.3} />
              )}
              {light.type === "Directional" && (
                <directionalLight
                  color={light.color}
                  position={light.position}
                  intensity={1.5}
                  castShadow
                  shadow-mapSize-width={2048}
                  shadow-mapSize-height={2048}
                  shadow-bias={-0.0001}
                />
              )}
              {light.type === "Point" && (
                <pointLight color={light.color} position={light.position} intensity={2} distance={10} />
              )}
            </Fragment>
          ) : null
        )}
  
        {/* Post-processing Effects */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.3}
            luminanceSmoothing={0.2}
            intensity={0.5}
          />
          <ToneMapping />
        </EffectComposer>
      </>
    );
  };
  
  export default Lights;
  