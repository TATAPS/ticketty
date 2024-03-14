import React from "react";
import "./RenderCard.css";

const Card = ({ title, children }) => {
  return (
    <div>
      {children}
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
