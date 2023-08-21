import PropTypes from "prop-types";

export function Button({ tittle }) {
  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => console.log(data));


  }

  return <button onClick={getData}>{tittle}</button>;
}

Button.propTypes = {
  tittle: PropTypes.string.isRequired,
};

Button.defaultProps = {
  tittle: "Boton",
};
