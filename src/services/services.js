import axios from "axios";

const API_KEY = "a8a46741ba8bb1eb05cc87c982c1aa61";

const marvelApi = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/",
  params: {
    apikey: API_KEY,
    limit: 9,
  },
});

export const getAllCharacters = async (offset) => {
  const { data } = await marvelApi.get(`/characters?offset=${offset}`);
  return data.data.results.map(transformCharacter);
};

export const getCharacterById = async (id) => {
  const { data } = await marvelApi.get(`/characters/${id}`);
  return transformCharacter(data.data.results[0]);
};

export const getCharacterByName = async (name) => {
  const { data } = await marvelApi.get(`/characters?name=${name}`);
  return data.data.results.map(transformCharacter);
};

export const getAllComics = async (offset) => {
  const { data } = await marvelApi.get(
    `/comics?orderBy=issueNumber&limit=8&offset=${offset}`
  );
  return data.data.results.map(transformComics);
};

export const getComicById = async (id) => {
  const { data } = await marvelApi.get(`/comics/${id}`);
  return transformComics(data.data.results[0]);
};

const transformCharacter = (char) => {
  return {
    id: char.id,
    name: char.name,
    description: char.description
      ? `${char.description.slice(0, 210)}...`
      : "There is no description for this character",
    thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
    homepage: char.urls[0].url,
    wiki: char.urls[1].url,
    comics: char.comics.items,
  };
};

const transformComics = (comics) => {
  return {
    id: comics.id,
    title: comics.title,
    description: comics.description || "There is no description",
    pageCount: comics.pageCount
      ? `${comics.pageCount} p.`
      : "No information about the number of pages",
    thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
    language: comics.textObjects[0]?.language || "en-us",
    price: comics.prices[0].price
      ? `${comics.prices[0].price}$`
      : "not available",
  };
};
