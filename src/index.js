import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting() {

    const mensaje = true;

    return <h1>{mensaje ? 'Operadores logicos usando componentes 😀' : 'Es genial alternar entre resultados 🙃'}</h1>

   
}

root.render(
    <div>
        <Greeting />
    </div>
);