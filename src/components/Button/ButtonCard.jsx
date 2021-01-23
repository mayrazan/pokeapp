import React from "react";
import "./estiloButton.css";

export function ButtonCard(props) {
  const { onClick, name } = props;
  return (
    <button onClick={onClick} className="estiloButton">
      {name}
    </button>
  );
}
