export function Card(props) {
  return (
    <div>
      <hr />
      <h1>{props.name}</h1>
      <br />
      <h3>${props.amount}</h3>
      <br />
      <h1>{props.married ? "Casado" : "Soltero"}</h1>
      <br />
      <ul >
        <li>City: {props.address.city}</li>
        <li>Street: {props.address.street}</li>
      </ul>
      <hr />
    </div>
  );
}
