import React, { createContext, useState } from "react";
import colorData from "./data/color-data";

export const ColorContext = createContext();

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);
  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
};