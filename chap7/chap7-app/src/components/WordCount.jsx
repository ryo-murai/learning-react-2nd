import { useEffect, useMemo } from "react";
import { useAnyKeyToRender } from "../hooks/useAnyKeyToRender";

export default function WordCount({ children }) {
  useAnyKeyToRender();

  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log(`WordCount: ${words.length} words`);
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} words</strong>
      </p>
    </>
  );
}