import { useWindowSize } from "../hooks/useWindowSize";
import { useMousePosition } from "../hooks/useMousePosition";

export default function UseLayoutEffectPanel() {
  const [width, height] = useWindowSize();
  const [x, y] = useMousePosition();

  return (
    <>
      <h4>Window size</h4>
      <p>
        {width} x {height}
      </p>
      <p>
        (x, y): {x}, {y}
      </p>
    </>
  )
}