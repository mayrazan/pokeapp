import React from "react";
import "./estiloButton.css";

export function Button(props) {
  const {onClick} = props
  return <button onClick={onClick} className="estiloButton">Teste</button>;
}


