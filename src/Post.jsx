import PropTypes from "prop-types";
import "./post.css";

export const Post = ({ title, body }) => {
  return (
    <>
      <div className="box">
        <div className="tittle">{title}</div>
        <div className="body">{body}</div>
      </div>
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
