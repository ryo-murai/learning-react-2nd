import React from "react";
import { useInput } from "../hooks";
import { useColors } from "../ColorProvider";

export default function AddColorForm({ onNewColor = f => f }) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();

  const submit = e => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        {...titleProps}
        placeholder="color title..."
        required
      />
      <input
        type="color"
        {...colorProps}
        required
      />
      <button>Add</button>
    </form>
  );
}