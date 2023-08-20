import PropTypes from "prop-types";

import "./taskCard.css";

export function TaskCard({ titulo, descripcion, status }) {
  return (
    <div className="card">
      <div className="status" style={status ? {backgroundColor: "#c9bf3c"} : {backgroundColor: "#ff3636"}}></div>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </div>
  );
}

TaskCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

TaskCard.defaultProps = {
  titulo: "Sin titulo",
  descripcion: "Sin descripcion",
};
