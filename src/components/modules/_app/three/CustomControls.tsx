import { useCallback, useEffect, useRef, useState } from "react";
import { Euler, Vector3 } from "three";

interface CustomControlsProps {
  onChange: (rotation: Euler, position: Vector3, scale: number) => void;
  rotation: [number, number, number];
  position: [number, number, number];
  scale: number;
}

const CustomControls: React.FC<CustomControlsProps> = ({
  onChange,
  rotation,
  position,
  scale,
}) => {
  const rotationRef = useRef(new Euler(...rotation));
  const positionRef = useRef(new Vector3(...position));
  const scaleRef = useRef(scale);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const updateRotation = useCallback(
    (deltaX: number, deltaY: number, shiftKey: boolean) => {
      const factor = shiftKey ? 0.01 : 0.005;
      rotationRef.current.x += deltaY * factor;
      rotationRef.current.z -= deltaX * factor; // Swap x and z
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

  const handleMouseDown = useCallback((event: MouseEvent) => {
    setIsDragging(true);
    setLastMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      updateScale(event.deltaY);
    },
    [updateScale]
  );

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      if (!isDragging || !lastMousePosition) return;
      const touch = event.touches[0];
      const deltaX = touch.clientX - lastMousePosition.x;
      const deltaY = touch.clientY - lastMousePosition.y;
      updateRotation(deltaX, deltaY, event.shiftKey);
      setLastMousePosition({ x: touch.clientX, y: touch.clientY });
    },
    [isDragging, lastMousePosition, updateRotation]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setLastMousePosition(null);
  }, []);

  const handleTouchStart = useCallback((event: TouchEvent) => {
    const touch = event.touches[0];
    setIsDragging(true);
    setLastMousePosition({ x: touch.clientX, y: touch.clientY });
  }, []);

  const handleContextMenu = useCallback((event: MouseEvent) => {
    event.preventDefault();
  }, []);

  const handleSelectStart = useCallback((event: Event) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("selectstart", handleSelectStart);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("selectstart", handleSelectStart);
    };
  }, [
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleWheel,
    handleTouchMove,
    handleTouchEnd,
    handleTouchStart,
    handleContextMenu,
    handleSelectStart,
  ]);

  return null;
};

export default CustomControls;
