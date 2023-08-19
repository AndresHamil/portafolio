import React from "react";
import ReactDOM from "react-dom/client";

import { Card } from "./Card";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Card
      name="Luis Andres"
      amount={3000}
      married={true}
      ponts={[89, 79, 57, 97]}
      address={{
        city: "Cd. Lerdo",
        street: "Av. Coronado.",
      }}
    />
    <Button 
        tittle="Click me"
    />
    <Button 
        tittle="Pay"
    />
    <Button 
        tittle="Go to"
    />
    {/* <Card
      name="Luis Andres"
      amount={3000}
      married={true}
      ponts={[89, 79, 57, 97]}
      address={{
        city: "Cd. Lerdo",
        street: "Av. Coronado.",
      }}
    />
    <Card
      name="Luis Andres"
      amount={3000}
      married={false}
      ponts={[89, 79, 57, 97]}
      address={{
        city: "Cd. Lerdo",
        street: "Av. Coronado.",
      }}
    /> */}
  </>
);
