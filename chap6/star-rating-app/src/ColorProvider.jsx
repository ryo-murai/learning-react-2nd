import React, { createContext, useState, useContext } from "react";
import colorData from "./data/color-data";
import { v4 } from "uuid";

export const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) => {
    const newColor = {
      id: v4(),
      title,
      color,
      rating: 0,
    };
    setColors([...colors, newColor]);
  }

  const rateColor = (id, rating) => {
    const newColors = colors.map(color => color.id === id ? { ...color, rating } : color)
    setColors(newColors);
  };

  const removeColor = id => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  };


  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
};