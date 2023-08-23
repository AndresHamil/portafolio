import PropTypes from "prop-types";
import { MdAccountCircle } from "react-icons/md";
import "./post.css";

export const Post = ({ title, body, avatar }) => {
  return (
    <>
      <div className="box">
        <div className="header">
            <div className="icon">
                <MdAccountCircle />
            </div>
            <div>
                {title}
            </div>
        </div>
        <div className="body">{body}</div>
      </div>
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
