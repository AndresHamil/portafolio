// import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// import { Post } from "./Post";

import {App} from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"));

// function App() {
//   const [posts, setPosts] = useState(null);

//   const [mensaje, setMensaje] = useState(null);

//   const [mensajes, setMensajes] = useState([]);

//   useEffect(() => {
//     // fetch("https://jsonplaceholder.typicode.com/posts")
//     //   .then((response) => response.json())
//     //   .then((data) => setPosts(data))
//     //   .catch((error) => console.log(error));
//   }, []);

//   function consultarPosts() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => setPosts(data))
//       .catch((error) => console.log(error));
//   }

//   function addPost() {
//     if (mensaje) {
//       setMensajes((prevMensajes) => [...prevMensajes, mensaje]);
//       // Opcionalmente, puedes limpiar el input después de agregar el mensaje
//       setMensaje("");
//     }
//   }

//   return (
//     <>
//       {/* <input onChange={(e) => setMensaje(e.target.value)} value={mensaje || ''}/>
//       <button onClick={addPost}>Agregar</button>
//       <br />
//       {mensajes.map((mensaje, index) => {
//         return (
//           <div key={index}>
//             <label>{mensaje}</label>
//             <br />
//           </div>
//         );
//       })} */}
//       {/* <button onClick={consultarPosts}>Consultar publicaciones</button>
//       <button
//         onClick={() => {
//           setPosts(null);
//         }}
//       >
//         Reiniciar
//       </button>
//       {posts &&
//         posts.map((post) => {
//           return <Post key={post.id} title={post.title} body={post.body} />;
//         })} */}
//         <App/>
//     </>
//   );
// }

root.render(
  <>
    <App />
  </>
);
