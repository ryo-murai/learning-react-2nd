import React, { useState, useEffect } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    alert(`checked: ${checked}`);
  });

  return (
    <>
      <input type="checkbox" checked={checked} onChange={() => setChecked(checked => !checked)} />
      {checked ? "checked" : "unchecked"}
    </>
  );
}