import { URL_API } from "../../services/api.js";
import React, { useState, useEffect } from "react";
import { getPokemons } from "../../services/getPokemons";
import { Detalhar } from "./Detail";
import { CustomDialog } from 'react-st-modal';

export function Card() {
  
  const [pokes, setPokes] = useState([]);
  const [pages, setPages] = useState({
    previous: "",
    next: "",
  });

  useEffect(() => {
    (async () => {
      const response = await getPokemons(URL_API);
      setPokes(response.result);
      setPages({ previous: response.previous, next: response.next });
    })();
  }, []);

  const getPreviousPage = async () => {
    if (pages.previous != null) {
      const response = await getPokemons(pages.previous);
      setPokes(response.result);
      setPages({ previous: response.previous, next: response.next });
    }
  };

  const getNextPage = async () => {
    const response = await getPokemons(pages.next);
    setPokes(response.result);
    setPages({ previous: response.previous, next: response.next });
  };

  return (
    <div>
      {pokes.map((el) => {
        return (
          <div key={el.id}>
            {el.name}
            <img src={el.sprites.front_default} alt=""  onClick={async () => 
            {await CustomDialog(<Detalhar id={el.id}/>,
            {
              title: 'Detalhes do Pokemon',
              showCloseIcon: true,
            });}}></img>
          </div>
        );
      })}
      <button onClick={getPreviousPage}>Anterior</button>
      <button onClick={getNextPage}>Proximo</button>
    </div>
  );
}
