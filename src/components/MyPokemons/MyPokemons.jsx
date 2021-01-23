import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonCard } from "../Button/ButtonCard";
import Card from "react-bootstrap/Card";

export function MyPokemons() {
  const [storagePokemon, setStoragePokemon] = useState([]);

  let getPokemonSelected = JSON.parse(localStorage.getItem("result"));

  function releasePokemon(id) {
    const result = getPokemonSelected.map((el) => {
      const filterResults = el.filter((e) => e.id !== id);
     // getPokemonSelected.splice(filterResults, 1);
      return filterResults;
    });
    localStorage.setItem("result", JSON.stringify(result));
    setStoragePokemon(result);
  }

  return (
    <div>
      {getPokemonSelected !== null ? (
        getPokemonSelected.map((el) => {
          return el.map((e) => {
            return (
              <div key={e.id} className="card-container">
                <Card style={{ width: "10rem" }}>
                  <Card.Img variant="top" src={e.sprites.front_default} />
                  <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <ButtonCard
                      name="Soltar"
                      onClick={() => releasePokemon(e.id)}
                    />
                  </Card.Body>
                </Card>
              </div>
            );
          });
        })
      ) : (
        <h2>Não há pokemons selecionados!</h2>
      )}
    </div>
  );
}
