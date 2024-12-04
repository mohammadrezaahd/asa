import { FC, Suspense } from "react";
import Scene from "./Scene";
import ErrorBoundary from "@/helpers/ErrorBoundry";
import { Modules } from "..";

interface IModelViewerProps {
  fileUrl: string;
}

const ModelViewer: FC<IModelViewerProps> = ({ fileUrl }) => {
  return (
    <>
      <ErrorBoundary>
        <Modules.Loading />
        <Suspense fallback={null}>
            <Scene fileUrl={fileUrl} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default ModelViewer;
