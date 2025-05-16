import { useEffect } from "react";
import { useAnyKeyToRender } from "../hooks/useAnyKeyToRender";

const words = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit.",
];

export default function ConsoleOutPanel({ children }) {
  useAnyKeyToRender();

  useEffect(() => {
    console.log("panel: fresh render");
  }, [words]);

  return <h4>Open the console</h4>;
}