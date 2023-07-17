import { Link } from "react-router-dom";
import "./singleChar.scss";

const SingleChar = ({ data }) => {
  const { name, description, thumbnail } = data;

  return (
    <div className="single-comic">
      <img src={thumbnail} alt={name} className="single-comic__char-img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{name}</h2>
        <p className="single-comic__descr">{description}</p>
      </div>
      <Link to={"/"} className="single-comic__back">
        Back to homepage
      </Link>
    </div>
  );
};

export default SingleChar;
