import { URL_API, IMAGES_API } from "./api.js";

export async function getPokemons(value) {
  const pokemons = await fetch(URL_API(value)).then((response) =>
    response.json().then((data) => {
      //  console.log(data)
      return data;
    })
  );
  return pokemons;
}

export async function getImagesPokemons(value) {
  const pokemons = await fetch(IMAGES_API(value)).then((response) =>
    response.json().then((data) => {
        
      return data;
    })
  );
  return pokemons;
}
