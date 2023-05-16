import axios from "axios";

const API_KEY = "4e6a7a291f59592e86a9f346674dde5a";

const marvelApi = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/",
  params: {
    apikey: API_KEY,
    limit: 9,
    offset: 210,
  },
});

export const getAllCharacters = async () => {
  const { data } = await marvelApi.get("/characters");
  return data.data.results.map(transformCharacter);
};

export const getCharacterById = async (id) => {
  const { data } = await marvelApi.get(`/characters/${id}`);
  return transformCharacter(data.data.results[0]);
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
