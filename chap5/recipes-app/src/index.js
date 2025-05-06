import React from "react";
import { createRoot } from "react-dom/client";
import data from "../data/recipes.json";
import Menu from "./components/menu";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Menu recipes={data} />
);