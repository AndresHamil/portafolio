import React, {useState} from "react";

import { Publicaciones } from "./Publicaciones";

import { Presentacion } from "./components/presentacion/Presentacion"; 

import "./app.css"

export const App = () => {

    const [titulo, setTitulo] = useState(null);
    const [descripcion, setDescripcion] = useState(null);
    const [publicaciones, setPublicaciones] = useState([]);

    function agregarTarea(){
        const nuevaPublicacion = {
            titulo: titulo, 
            descripcion: descripcion
        };
    
        setPublicaciones(prevPublicaciones => [...prevPublicaciones, nuevaPublicacion]);
    
        console.log(publicaciones); 

    }


  return (
    <div>
      {/* <input type="text" onChange={(e) => {setTitulo(e.target.value)}}/>
      <br />
      <input type="text" onChange={(e) => {setDescripcion(e.target.value)}}/>
      <button onClick={agregarTarea}>Agregar</button>
      {
        publicaciones.map((publicacion, index) =>{
            return (
                <Publicaciones
                    key={index}
                    titulo={publicacion.titulo}
                    descripcion={publicacion.descripcion}
                />
            )
        })
      } */}
      <Presentacion/>
    </div>
  );
};


