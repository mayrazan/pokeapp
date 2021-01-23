import { URL_API } from "../../services/api.js";
import React, { useState, useEffect, useCallback } from "react";
import { getPokemons } from "../../services/getPokemons";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonCard } from "../Button/ButtonCard";
import Card from "react-bootstrap/Card";
import "./PokemonCard.css";
import { Loading } from "../Loading/Loading.jsx";
import { Detalhar } from "./Detail";
import { CustomDialog } from "react-st-modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { NavBarPage } from "../Navbar/Navbar";

export function PokemonCard() {
  const [pokes, setPokes] = useState([]);
  const [pages, setPages] = useState({
    previous: "",
    next: "",
  });
  const [load, setLoad] = useState(true);
  const [storagePokemon, setStoragePokemon] = useState([]);
  const [resultSearch, setResultSearch] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    (async () => {
      const response = await getPokemons(URL_API);
      setPokes(response.result);
      setPages({ previous: response.previous, next: response.next });
      setTimeout(() => setLoad(false), 500);
      setResultSearch(response.result);
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

  function capturePokemon(name) {
    const result = pokes.filter((el) => el.name === name);

    setStoragePokemon([...storagePokemon, result]);

    let pokemon = localStorage.setItem(
      "result",
      JSON.stringify(storagePokemon)
    );

    return pokemon;
  }

  function onChange(event) {
    setInput(event.target.value);
  }

   async function onSubmit() {
    if (input === "") {
      return pokes;
    } else {
      return await pokes.filter((pokemon) => {
        return pokemon.name.toLowerCase().indexOf(input) > -1;
      });
    }
  }


  const getSearchedList = useCallback(async () => {
    const data = await onSubmit();
    setResultSearch(data);
   
  }, []);

  useEffect(() => {
    (async () => {
      const data = await onSubmit();
      setResultSearch(data);
      console.log(data)
    })();
  }, []);

  return (
    <div>
      <NavBarPage>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Pesquisar"
            className="mr-sm-2"
            onChange={onChange}
          />
          <Button variant="outline-success" onClick={onSubmit}>
            Busca Pokemon
          </Button>
        </Form>
      </NavBarPage>
      {load ? (
        <Loading />
      ) : (
        <>
          {pokes.map((el) => {
            return (
              <div key={el.id} className="card-container">
                <Card style={{ width: "10rem" }}>
                  {/* <Card.Img variant="top" src={el.sprites.front_default} /> */}
                  <Card.Img
                    src={el.sprites.front_default}
                    alt=""
                    onClick={async () => {
                      await CustomDialog(<Detalhar id={el.id} />, {
                        title: "Detalhes do Pokemon",
                        showCloseIcon: true,
                      });
                    }}
                  ></Card.Img>
                  <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <ButtonCard
                      name="Capturar"
                      onClick={() => capturePokemon(el.name)}
                    />
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
