import React from "react";
import "./estiloButton.css";

export function ButtonCard(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="estiloButton">
      Teste
    </button>
  );
}
