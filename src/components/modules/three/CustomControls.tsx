import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import { Euler, Vector3 } from "three";

interface ICustomControlsProps {
  onChange: (rotation: Euler, position: Vector3, scale: number) => void;
  initialRotation: [number, number, number];
  initialPosition: [number, number, number];
  initialScale: number;
}

const CustomControls: FC<ICustomControlsProps> = ({ onChange, initialRotation, initialPosition, initialScale }) => {
  const { gl } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const rotationRef = useRef(new Euler(...initialRotation));
  const positionRef = useRef(new Vector3(...initialPosition));
  const scaleRef = useRef(initialScale);

  const handleMouseDown = (event: MouseEvent) => {
    setIsDragging(true);
    setLastMousePosition({ x: event.clientX, y: event.clientY });
  };

  const updateRotation = useCallback((
    deltaX: number,
    deltaY: number,
    shiftKey: boolean
  ) => {
    if (shiftKey) {
      rotationRef.current.z += deltaX * 0.01;
    } else {
      rotationRef.current.y += deltaX * 0.01;
      rotationRef.current.x += deltaY * 0.01;
    }
    onChange(rotationRef.current, positionRef.current, scaleRef.current);
  }, [onChange]);

  const updatePosition = useCallback((deltaX: number, deltaY: number) => {
    positionRef.current.x += deltaX * 0.01;
    positionRef.current.y -= deltaY * 0.01;
    onChange(rotationRef.current, positionRef.current, scaleRef.current);
  }, [onChange]);

  const updateScale = useCallback((deltaY: number) => {
    scaleRef.current += deltaY * -0.001;
    scaleRef.current = Math.max(0.1, Math.min(20, scaleRef.current));
    onChange(rotationRef.current, positionRef.current, scaleRef.current);
  }, [onChange]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
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
  }, [isDragging, lastMousePosition, updatePosition, updateRotation]);

  const handleMouseUp = () => {
    setIsDragging(false);
    setLastMousePosition(null);
  };

  const handleWheel = useCallback((event: WheelEvent) => {
    updateScale(event.deltaY);
  }, [updateScale]);

  useEffect(() => {
    gl.domElement.addEventListener("mousedown", handleMouseDown);
    gl.domElement.addEventListener("mousemove", handleMouseMove);
    gl.domElement.addEventListener("mouseup", handleMouseUp);
    gl.domElement.addEventListener("wheel", handleWheel);

    return () => {
      gl.domElement.removeEventListener("mousedown", handleMouseDown);
      gl.domElement.removeEventListener("mousemove", handleMouseMove);
      gl.domElement.removeEventListener("mouseup", handleMouseUp);
      gl.domElement.removeEventListener("wheel", handleWheel);
    };
  }, [gl.domElement, isDragging, lastMousePosition, handleMouseMove, handleWheel]);

  return null;
};

export default CustomControls;
