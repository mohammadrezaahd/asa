import { FC, Suspense } from "react";
import Scene from "./Scene";
import ErrorBoundary from "@/helpers/ErrorBoundry";
import Loading from "../../partials/loaders";

interface IModelViewerProps {
  fileUrl: string;
}

const ModelViewer: FC<IModelViewerProps> = ({ fileUrl }) => {
  return (
    <>
      <ErrorBoundary>
        <Loading />
        <Suspense fallback={null}>
          <Scene fileUrl={fileUrl} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default ModelViewer;
