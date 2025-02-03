import { FC, Suspense } from "react";
import Scene from "./Scene";
import ErrorBoundary from "@/helpers/ErrorBoundry";
import Loading from "../../partials/loaders";
import usePageLoaded from "@/hooks/pageLoadedContext";

interface IModelViewerProps {
  fileUrl: string;
  file: File;
}

const ModelViewer: FC<IModelViewerProps> = ({ fileUrl, file }) => {
  const isPageLoaded = usePageLoaded();

  return (
    <>
      <ErrorBoundary>
        {!isPageLoaded ? (
          <Loading />
        ) : (
          <Suspense fallback={null}>
            <Scene fileUrl={fileUrl} file={file} />
          </Suspense>
        )}
      </ErrorBoundary>
    </>
  );
};

export default ModelViewer;
