import axios from "axios";

export async function getPokemons(url) {
  const response = await axios.get(url);
  const nextPage = response.data.next;
  const previousPage = response.data.previous;

  const listPokemons = response.data.results.map(async (value) => {
    const getUrl = await axios.get(value.url);
    const { data } = await Promise.resolve(getUrl);

    return data;
  });

  const resultList = await Promise.all(listPokemons);

  return { previous: previousPage, next: nextPage, result: resultList };
}
