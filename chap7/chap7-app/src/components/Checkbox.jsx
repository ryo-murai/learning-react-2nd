import React, { useReducer, useEffect } from "react";

export default function Checkbox() {
  const [checked, toggle] = useReducer(checked => !checked, false);

  useEffect(() => {
    // alert(`checked: ${checked}`);
  });

  return (
    <>
      <input type="checkbox" checked={checked} onChange={toggle} />
      {checked ? "checked" : "unchecked"}
    </>
  );
}