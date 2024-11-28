import { FC, useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import { Euler, Vector3 } from "three";

interface ICustomControlsProps {
  onChange: (rotation: Euler, position: Vector3) => void;
}

const CustomControls: FC<ICustomControlsProps> = ({ onChange }) => {
  const { gl } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState<{ x: number; y: number } | null>(null);
  const rotationRef = useRef(new Euler(-Math.PI / 2, 0, Math.PI));
  const positionRef = useRef(new Vector3(0, 0, 0));

  const handleMouseDown = (event: MouseEvent) => {
    setIsDragging(true);
    setLastMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging || !lastMousePosition) return;

    const deltaX = event.clientX - lastMousePosition.x;
    const deltaY = event.clientY - lastMousePosition.y;

    rotationRef.current.y += deltaX * 0.01;
    rotationRef.current.x += deltaY * 0.01;

    setLastMousePosition({ x: event.clientX, y: event.clientY });
    onChange(rotationRef.current, positionRef.current);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setLastMousePosition(null);
  };

  useEffect(() => {
    gl.domElement.addEventListener("mousedown", handleMouseDown);
    gl.domElement.addEventListener("mousemove", handleMouseMove);
    gl.domElement.addEventListener("mouseup", handleMouseUp);

    return () => {
      gl.domElement.removeEventListener("mousedown", handleMouseDown);
      gl.domElement.removeEventListener("mousemove", handleMouseMove);
      gl.domElement.removeEventListener("mouseup", handleMouseUp);
    };
  }, [gl.domElement, isDragging, lastMousePosition]);

  return null;
};

export default CustomControls;
