import React, { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <input type="checkbox" checked={checked} onChange={() => setChecked(checked => !checked)} />
      {checked ? "checked" : "unchecked"}
    </>
  );
}