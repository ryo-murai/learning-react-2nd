import React, { useRef } from "react";

export default function AddColorForm({ onNewColor = f => f }) {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = e => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    onNewColor(title, color);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        ref={txtTitle}
        placeholder="color title..."
        required
      />
      <input
        type="color"
        ref={hexColor}
        required
      />
      <button>Add</button>
    </form>
  );
}