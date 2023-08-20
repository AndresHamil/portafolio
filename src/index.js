import React from "react";
import ReactDOM from "react-dom/client";

import { TaskCard } from "./TaskCard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard titulo={"Terraza"} descripcion={"Limpiar la terraza"} status={true} />

    <TaskCard titulo={"Lavar"} descripcion={"Lavar la ropa"} status={false} />

    <TaskCard titulo={"Compras"} descripcion={"Comprar pan"} status={false} />

    <TaskCard titulo={"Lavar"} descripcion={"Lavar la ropa"} status={true} />
  </>
);
