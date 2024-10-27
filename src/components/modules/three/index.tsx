import { Leva } from "leva";
import { FC } from "react";
import Scene from "./Scene";

interface IModelViewerProps {
  fileUrl: string;
}

const ModelViewer: FC<IModelViewerProps> = ({ fileUrl }) => {
  return (
    <>
      <Scene fileUrl={fileUrl} />
      <Leva />
    </>
  );
};

export default ModelViewer;
