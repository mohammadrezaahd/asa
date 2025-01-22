import { FC, Suspense } from "react";
import Scene from "./Scene";
import ErrorBoundary from "@/helpers/ErrorBoundry";
import Loading from "../../partials/loaders";
import usePageLoaded from "@/hooks/pageLoadedContext";

interface IModelViewerProps {
  fileUrl: string;
}

const ModelViewer: FC<IModelViewerProps> = ({ fileUrl }) => {
  const isPageLoaded = usePageLoaded();

  return (
    <>
      <ErrorBoundary>
        {!isPageLoaded ? (
          <Loading />
        ) : (
          <Suspense fallback={null}>
            <Scene fileUrl={fileUrl} />
          </Suspense>
        )}
      </ErrorBoundary>
    </>
  );
};

export default ModelViewer;
