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
          titulo: 'Programador Frontend & Backendd',
          texto: 'Combinando innovación visual con robustez técnica en un mundo digital.',
          img: 'https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-6/333269803_1256894074896685_7049032288644285287_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHcUyY8_7tTSM7KoEDCmIzF2OB8FnjuxI7Y4HwWeO7EjvScUdofZ7j4XLhORRVdYRjUgjKQW_bqlgbxSa7R9guD&_nc_ohc=FV48XrzNyKwAX_qWX1Z&_nc_ht=scontent.ftrc2-1.fna&oh=00_AfCf1pSs64hRmeBuYW0yBJqw0VPFatBjiS3kUu0pWKeBXQ&oe=64ECA966',
          infomacion: {
            titulo: 'Hola, soy Andres. Encantado de conocerlo.',
            texto: `Desde mis primeros pasos en programación, me han fascinado los
            desafíos y la creación de soluciones innovadoras. Mi verdadera
            pasión reside en transformar ideas en aplicaciones estéticamente
            atractivas y funcionalmente eficientes. Con cada línea de código,
            busco la perfección, y con cada proyecto, avanzo en mi constante
            búsqueda de la excelencia en el arte de programar.`
          }
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
        infomacion={data[0].presentacion.infomacion}
      />
      <div className="panel-cards">
        <div className="panel-card-box">
          d
          {/* <div className="panel-card-box-card">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate perspiciatis, magnam magni quos amet tempora libero consequatur. Expedita numquam fugiat quis iste quia optio dolorem illum at dolore, doloribus facere?
          </div>

          <div className="panel-card-box-card">
            ddd
          </div>

          <div className="panel-card-box-card">
            lol
            
          </div> */}
        </div>
      </div>
    </div>
  );
};


