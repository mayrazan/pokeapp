export const URL_API = (value) =>
  `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${value}`;

export const IMAGES_API = (value) =>
  `https://pokeapi.co/api/v2/pokemon/${value}/`;
