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
  const [isRightClick, setIsRightClick] = useState(false);
  const [isModelToolbarDragging, setIsModelToolbarDragging] = useState(false);
  const [initialDistance, setInitialDistance] = useState<number | null>(null);

  const updateRotation = useCallback(
    (deltaX: number, deltaY: number, shiftKey: boolean) => {
      const factor = shiftKey ? 0.01 : 0.005;
      rotationRef.current.x += deltaY * factor;
      if (shiftKey) {
        rotationRef.current.y += deltaX * factor; // Rotate around y-axis when shift key is pressed
      } else {
        rotationRef.current.z += deltaX * factor; // Reverse left and right rotation
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
      if (!isDragging || !lastMousePosition || isModelToolbarDragging) return;
      const deltaX = event.clientX - lastMousePosition.x;
      const deltaY = event.clientY - lastMousePosition.y;
      if (isRightClick) {
        updatePosition(deltaX, deltaY);
      } else {
        updateRotation(deltaX, deltaY, event.shiftKey);
      }
      setLastMousePosition({ x: event.clientX, y: event.clientY });
    },
    [
      isDragging,
      lastMousePosition,
      updatePosition,
      updateRotation,
      isRightClick,
      isModelToolbarDragging,
    ]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsRightClick(false);
    setLastMousePosition(null);
  }, []);

  const handleMouseDown = useCallback((event: MouseEvent) => {
    if (event.target !== event.currentTarget) return; // Only proceed if clicking on the scene
    if (event.button === 2) {
      setIsRightClick(true);
    }
    setIsDragging(true);
    setLastMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      updateScale(event.deltaY);
    },
    [updateScale]
  );

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      if (!isDragging || !lastMousePosition) return;
      if (event.touches.length === 1) {
        const touch = event.touches[0];
        const deltaX = touch.clientX - lastMousePosition.x;
        const deltaY = touch.clientY - lastMousePosition.y;
        updateRotation(deltaX, deltaY, event.shiftKey);
        setLastMousePosition({ x: touch.clientX, y: touch.clientY });
      } else if (event.touches.length === 2 && initialDistance !== null) {
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        const currentDistance = Math.sqrt(
          Math.pow(touch2.clientX - touch1.clientX, 2) +
          Math.pow(touch2.clientY - touch1.clientY, 2)
        );
        const deltaDistance = currentDistance - initialDistance;
        updateScale(deltaDistance);
        setInitialDistance(currentDistance);
      }
    },
    [isDragging, lastMousePosition, updateRotation, updateScale, initialDistance]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setLastMousePosition(null);
    setInitialDistance(null);
  }, []);

  const handleTouchStart = useCallback((event: TouchEvent) => {
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      setIsDragging(true);
      setLastMousePosition({ x: touch.clientX, y: touch.clientY });
    } else if (event.touches.length === 2) {
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      setInitialDistance(distance);
    }
  }, []);

  const handleContextMenu = useCallback((event: MouseEvent) => {
    event.preventDefault();
  }, []);

  const handleSelectStart = useCallback((event: Event) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    const canvasElement = document.querySelector("canvas"); // Assuming the canvas element is the target
    if (!canvasElement) return;

    canvasElement.addEventListener("mousemove", handleMouseMove);
    canvasElement.addEventListener("mousedown", handleMouseDown);
    canvasElement.addEventListener("mouseup", handleMouseUp);
    canvasElement.addEventListener("wheel", handleWheel, { passive: false });
    canvasElement.addEventListener("touchmove", handleTouchMove);
    canvasElement.addEventListener("touchend", handleTouchEnd);
    canvasElement.addEventListener("touchstart", handleTouchStart);
    canvasElement.addEventListener("contextmenu", handleContextMenu);
    canvasElement.addEventListener("selectstart", handleSelectStart);

    const handleModelToolbarDragStart = () => setIsModelToolbarDragging(true);
    const handleModelToolbarDragEnd = () => setIsModelToolbarDragging(false);

    window.addEventListener("modelToolbarDragStart", handleModelToolbarDragStart);
    window.addEventListener("modelToolbarDragEnd", handleModelToolbarDragEnd);

    return () => {
      canvasElement.removeEventListener("mousemove", handleMouseMove);
      canvasElement.removeEventListener("mousedown", handleMouseDown);
      canvasElement.removeEventListener("mouseup", handleMouseUp);
      canvasElement.removeEventListener("wheel", handleWheel);
      canvasElement.removeEventListener("touchmove", handleTouchMove);
      canvasElement.removeEventListener("touchend", handleTouchEnd);
      canvasElement.removeEventListener("touchstart", handleTouchStart);
      canvasElement.removeEventListener("contextmenu", handleContextMenu);
      canvasElement.removeEventListener("selectstart", handleSelectStart);
      window.removeEventListener("modelToolbarDragStart", handleModelToolbarDragStart);
      window.removeEventListener("modelToolbarDragEnd", handleModelToolbarDragEnd);
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
