import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const user = {
    firtname: 'Luis Andres',
    lastname: 'Rodriguez Campos'
  }

  return (
    <div>
        <label>Nombre: </label>{user.firtname}
        <br/>
        <label>Apellido: </label>{user.lastname}
    </div>
  )
}

root.render(
  <div>
    <Greeting />
  </div>
);
