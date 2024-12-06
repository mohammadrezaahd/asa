"use client";
import { ReactNode, useState, useEffect, useCallback } from "react";

interface DragComponentsProps {
  children: ReactNode;
  handleRef: React.RefObject<HTMLDivElement>;
}

const DragComponents: React.FC<DragComponentsProps> = ({
  children,
  handleRef,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const startDrag = useCallback(
    (e: MouseEvent) => {
      setDragging(true);
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    },
    [position.x, position.y]
  );

  const onDrag = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return;
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    },
    [dragging, offset.x, offset.y]
  );

  const endDrag = () => setDragging(false);

  useEffect(() => {
    const handle = handleRef.current;
    if (handle) {
      handle.addEventListener("mousedown", startDrag);
    }
    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", endDrag);

    return () => {
      if (handle) {
        handle.removeEventListener("mousedown", startDrag);
      }
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", endDrag);
    };
  }, [handleRef, onDrag, startDrag]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
};

export default DragComponents;
