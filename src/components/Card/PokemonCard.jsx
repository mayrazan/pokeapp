import { URL_API } from "../../services/api.js";
import React, { useState, useEffect } from "react";
import { getPokemons } from "../../services/getPokemons";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { ButtonCard } from "../Button/ButtonCard";
import Card from "react-bootstrap/Card";
import "./PokemonCard.css";
import { Loading } from "../Loading/Loading.jsx";

export function PokemonCard() {
  const [pokes, setPokes] = useState([]);
  const [pages, setPages] = useState({
    previous: "",
    next: "",
  });
  const [load, setLoad] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getPokemons(URL_API);
      setPokes(response.result);
      setPages({ previous: response.previous, next: response.next });
      setTimeout(() => setLoad(false), 500);
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
      {load ? (
        <Loading />
      ) : (
        <>
          {pokes.map((el) => {
            return (
              <div key={el.id} className="card-container">
                <Card style={{ width: "10rem" }}>
                  <Card.Img variant="top" src={el.sprites.front_default} />
                  <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <ButtonCard name="Capturar" />
                  </Card.Body>
                </Card>
              </div>
            );
          })}
          <Button variant="warning" onClick={getPreviousPage}>
            Anterior
          </Button>
          <Button variant="warning" onClick={getNextPage}>
            Proximo
          </Button>
        </>
      )}
    </div>
  );
}