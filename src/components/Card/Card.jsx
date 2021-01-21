import React, { useEffect, useState } from "react";
import { getPokemons, getImagesPokemons } from "../../services/getPokemons";

export function Card() {
  const [pokemons, setPokemons] = useState([]);
  const [imagesPokemons, setImagesPokemons] = useState([]);
  const [arrayPokemons, setArrayPokemons] = useState([]);
  const [count, setCount] = useState(1);
  const [pages, setPages] = useState({
    next: "",
    previous: "",
    current: [],
    offset: 20,
  });

  const array = [];
  useEffect(() => {
    (async () => {
      const data = await getPokemons(pages.offset);
      setPokemons(data.results);
      setPages({
        next: data.next,
        previous: data.previous,
        current: data.results,
      });
    })();
    
    while (count <= 20) {
      showPokemons();
      setCount(count+1)
    }
  }, []);

  const getNext = useEffect(() => {
    (async () => {
      await setPages(pages.offset + 20);
    })();
  }, [pages.offset]);

  console.log(arrayPokemons);

  async function showPokemons() {
    const imagesData = await getImagesPokemons(count);
    array.push(imagesData);
    setArrayPokemons(imagesData);
    setImagesPokemons(arrayPokemons);
  }

  return (
    <div>
      {/* {Object.entries(arrayPokemons.name)}
      <img src={arrayPokemons.sprites.front_default} alt=""/> */}
      {Object.keys(arrayPokemons).map((poke) => {
        return (
          <div key={poke.id}>
            {poke.name}
            <img src={poke.sprites} />
          </div>
        );
      })}

      <button onClick={getNext}>1</button>
    </div>
  );
}
