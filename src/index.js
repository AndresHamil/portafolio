import React from "react";
import ReactDOM from "react-dom/client";

import { Card } from "./Card";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    <Card tittle="Hola NodeJS" />
    <Card tittle="Hola Js" />
    <Card tittle="Hola JSX" />
    <Card tittle="Hola React" />
  </>
);
