import React from "react";

export default function Ingredient({ name, measurement, unit }) {
  return (
    <li>
      {name} - {measurement} {unit}
    </li>
  );
}