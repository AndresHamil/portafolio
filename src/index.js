import React from "react";
import ReactDOM from "react-dom/client";

import { Post } from "./Post";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

const post = [
  {
    id: 1,
    title: "Mi primera publicacion",
    body: "Hola mundo como estan, este es mi primera vez pasando objetos a componenetes",
  },
  {
    id: 2,
    title: "Ahora tengo 2 publicaciones jaja",
    body: "Hola mundo, he realizado mi segundo post.",
  },
  {
    id: 3,
    title: "Que son 2 sin un tercero?",
    body: "Hola mundo, he realizado mi tercer post.",
  },
];

root.render(
  <>
    <Button />
    {post.map((post) => {
      return <Post key={post.id} title={post.title} body={post.body} />;
    })}
  </>
);
