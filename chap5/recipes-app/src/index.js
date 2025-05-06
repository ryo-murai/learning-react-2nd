import React from "react";
import { render } from "react-dom";
import data from "../data/recipes.json";
import Menu from "./components/menu";

render(
  <Menu recipes={data} />,
  document.getElementById("root")
);