import { useControls } from "leva";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  useRef,
  MouseEventHandler,
} from "react";

const Circle = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "#eee",
          border: "1px solid #222",
        }}
        {...props}
      />
    );
  }
);
Circle.displayName = "Circle";

export default function Test() {
  const isDragging = useRef(false);
  const circleRef = useRef<HTMLDivElement>(null);
  const [, set] = useControls(() => ({
    mousePosition: {
      value: { x: 100, y: 150 },
      onChange: (position) => {
        const element = circleRef.current;
        if (element) {
          element.style.transform = `translate3d(
            calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0)`;
        }
      },
    },
  }));

  const onDragStart: MouseEventHandler<HTMLDivElement> = (event) => {
    event.currentTarget.style.cursor = "grabbing";
    isDragging.current = true;
  };
  const onDragMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (isDragging.current) {
      const newPosition = {
        x: event.clientX,
        y: event.clientY,
      };
      set({ mousePosition: newPosition });
    }
  };
  const onDragStop: MouseEventHandler<HTMLDivElement> = (event) => {
    event.currentTarget.style.cursor = "initial";
    isDragging.current = false;
  };

  return (
    <div style={{ padding: "2em" }}>
      <p>Drag the circle around or change its position from leva input.</p>
      <Circle
        ref={circleRef}
        onPointerDown={onDragStart}
        onPointerMove={onDragMove}
        onPointerUp={onDragStop}
        onPointerOut={onDragStop}
      />
    </div>
  );
}
