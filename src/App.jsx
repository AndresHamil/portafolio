import React, {useState,useEffect} from "react";

import { Publicaciones } from "./Publicaciones";

import { Presentacion } from "./components/presentacion/Presentacion"; 

import "./app.css"

export const App = () => {

    const [titulo, setTitulo] = useState(null);
    const [descripcion, setDescripcion] = useState(null);
    const [publicaciones, setPublicaciones] = useState([]);

    const [data, setData] = useState([
      {
        presentacion: {
          titulo: 'Programador Frontend & Backend',
          texto: 'Combinando innovación visual con robustez técnica en un mundo digital.',
          img: 'https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-6/333269803_1256894074896685_7049032288644285287_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHcUyY8_7tTSM7KoEDCmIzF2OB8FnjuxI7Y4HwWeO7EjvScUdofZ7j4XLhORRVdYRjUgjKQW_bqlgbxSa7R9guD&_nc_ohc=FV48XrzNyKwAX_qWX1Z&_nc_ht=scontent.ftrc2-1.fna&oh=00_AfCf1pSs64hRmeBuYW0yBJqw0VPFatBjiS3kUu0pWKeBXQ&oe=64ECA966'
        }
      }
    ]);

    useEffect(() => {
      // fetch("https://jsonplaceholder.typicode.com/posts")
      //   .then((response) => response.json())
      //   .then((data) => setPosts(data))
      //   .catch((error) => console.log(error));
      // consultarInfomacion()
    }, []);

    function consultarInfomacion(){
      alert('Entro')
    }

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
      <Presentacion
        titulo={data[0].presentacion.titulo}
        texto={data[0].presentacion.texto}
        img={data[0].presentacion.img}
      />
    </div>
  );
};


