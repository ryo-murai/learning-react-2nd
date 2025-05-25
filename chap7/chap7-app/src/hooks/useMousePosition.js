import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const move = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return [x, y];
}