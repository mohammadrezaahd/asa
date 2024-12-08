import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import { Euler, Vector3 } from "three";

interface ICustomControlsProps {
  onChange: (rotation: Euler, position: Vector3, scale: number) => void;
  rotation: [number, number, number];
  position: [number, number, number];
  scale: number;
}

const CustomControls: FC<ICustomControlsProps> = ({
  onChange,
  rotation,
  position,
  scale,
}) => {
  const { gl } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const rotationRef = useRef(new Euler(...rotation));
  const positionRef = useRef(new Vector3(...position));
  const scaleRef = useRef(scale);

  useEffect(() => {
    rotationRef.current.set(...rotation);
    positionRef.current.set(...position);
    scaleRef.current = scale;
  }, [rotation, position, scale]);

  const handleMouseDown = useCallback((event: MouseEvent) => {
    setIsDragging(true);
    setLastMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  const updateRotation = useCallback(
    (deltaX: number, deltaY: number, shiftKey: boolean) => {
      if (shiftKey) {
        rotationRef.current.z += deltaX * 0.01;
      } else {
        rotationRef.current.y += deltaX * 0.01;
        rotationRef.current.x += deltaY * 0.01;
      }
      onChange(rotationRef.current, positionRef.current, scaleRef.current);
    },
    [onChange]
  );

  const updatePosition = useCallback(
    (deltaX: number, deltaY: number) => {
      positionRef.current.x += deltaX * 0.01;
      positionRef.current.y -= deltaY * 0.01;
      onChange(rotationRef.current, positionRef.current, scaleRef.current);
    },
    [onChange]
  );

  const updateScale = useCallback(
    (deltaY: number) => {
      scaleRef.current += deltaY * -0.001;
      scaleRef.current = Math.max(0.1, Math.min(20, scaleRef.current));
      onChange(rotationRef.current, positionRef.current, scaleRef.current);
    },
    [onChange]
  );

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDragging || !lastMousePosition) return;
      const deltaX = event.clientX - lastMousePosition.x;
      const deltaY = event.clientY - lastMousePosition.y;
      if (event.buttons === 2) {
        // Right mouse button
        updatePosition(deltaX, deltaY);
      } else {
        updateRotation(deltaX, deltaY, event.shiftKey);
      }
      setLastMousePosition({ x: event.clientX, y: event.clientY });
    },
    [isDragging, lastMousePosition, updatePosition, updateRotation]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setLastMousePosition(null);
  }, []);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      updateScale(event.deltaY);
    },
    [updateScale]
  );

  const handleContextMenu = useCallback((event: MouseEvent) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    gl.domElement.addEventListener("mousedown", handleMouseDown);
    gl.domElement.addEventListener("mousemove", handleMouseMove);
    gl.domElement.addEventListener("mouseup", handleMouseUp);
    gl.domElement.addEventListener("wheel", handleWheel);
    gl.domElement.addEventListener("contextmenu", handleContextMenu);
    return () => {
      gl.domElement.removeEventListener("mousedown", handleMouseDown);
      gl.domElement.removeEventListener("mousemove", handleMouseMove);
      gl.domElement.removeEventListener("mouseup", handleMouseUp);
      gl.domElement.removeEventListener("wheel", handleWheel);
      gl.domElement.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [
    gl.domElement,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleWheel,
    handleContextMenu,
  ]);

  return null;
};

export default CustomControls;
