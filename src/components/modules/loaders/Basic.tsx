import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const Basic = () => {
  const { progress } = useProgress();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsLoaded(true);
    }
  }, [progress]);

  return (
    <>
      {!isLoaded && (
        <div className="flex justify-center items-center h-screen bg-red-600">
          <h1 className="text-blue-600 text-5xl">LOADING ....</h1>
        </div>
      )}
    </>
  );
};

export default Basic;
