import api from "../../services/getPokemons.js";
import React, { useState, useEffect } from "react";
import axios from "axios";

export function Card() {
  const [lastPokes, setLastPokes] = useState([]);
  const [pokes, setPokes] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPokemons, setCurrentPokemons] = useState(
    `https://pokeapi.co/api/v2/pokemon/?${count}=0&limit=20`
  );

  const pokeData = async (id) => {
    const data = await api.get(`pokemon/${id}`);
    const po = await data.data;
    setPokes((value) => [...value, po]);
    return po;
  };

  async function getPokemons(offset) {
    const response = (
      await axios.get(`https://pokeapi.co/api/v2/pokemon/?${offset}=0&limit=20`)
    ).data;
    const pokenames = response.results;
    const next = response.results?.map(async (e) => {
      const r = await axios.get(e.url);
      const { data } = await Promise.resolve(r);

      return {
        name: e.name,
        id: data.id,
        image: data?.sprites.front_default,
      };
    });

    (async () => {
      const result = await Promise.all(next);
      setPokes(result);
    })();

    console.log(pokenames);

    // for (let i = 1; i <= 20; i++) {
    //   const result = await pokeData(i);

    //   setLastPokes((value) => [...value, result]);

    //   //console.log(result);
    // }

    //return pokenames;
  }

  useEffect(() => {
    getPokemons(count);
  }, [count]);

  function onClick() {
    setCount(count + 20);
  }

  return (
    <div>
      {pokes.map((el) => {
        return (
          <div key={el.name}>
            {el.name}
            <img src={el.image} alt=""></img>
          </div>
        );
      })}
      <button onClick={onClick}>Proximo</button>
    </div>
  );
}
