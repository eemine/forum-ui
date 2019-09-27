import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imagePath, title, description, link }) => (
  <div className="card" style={{ width: "18rem" }}>
    <img src={imagePath} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <Link to={link} className="btn btn-primary">
        Open
      </Link>
    </div>
  </div>
);

export default Card;
