import { FC, Suspense } from "react";
import Scene from "./Scene";
import ErrorBoundary from "@/helpers/ErrorBoundry";
import { Leva } from "leva";
import { Modules } from "..";
import { ModelControls } from "@/hooks/modelControlContext";

interface IModelViewerProps {
  fileUrl: string;
}

const ModelViewer: FC<IModelViewerProps> = ({ fileUrl }) => {
  return (
    <>
      <ErrorBoundary>
        <Modules.Loading />
        <Leva />
        <Suspense fallback={null}>
          <ModelControls>
            <Scene fileUrl={fileUrl} />
          </ModelControls>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default ModelViewer;
