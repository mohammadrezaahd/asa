import { FC } from "react";
import Scene from "./Scene";
import ErrorBoundary from "@/helpers/ErrorBoundry";
import { Leva } from "leva";

interface IModelViewerProps {
  fileUrl: string;
}

const ModelViewer: FC<IModelViewerProps> = ({ fileUrl }) => {
  return (
    <>
      <ErrorBoundary>
        <Leva />
        <Scene fileUrl={fileUrl} />
      </ErrorBoundary>
    </>
  );
};

export default ModelViewer;
