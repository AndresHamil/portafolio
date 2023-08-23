import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { Post } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [posts, setPosts] = useState(null);

  function consultarPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <button onClick={consultarPosts}>Consultar publicaciones</button>
      {posts && posts.map((post) => {
        return <Post 
                    key={post.id}
                    title={post.title}
                    body={post.body}
                />
      })}
    </>
  );
}


root.render(
  <>
    <App/>
  </>
);
