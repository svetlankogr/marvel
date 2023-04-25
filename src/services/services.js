import axios from "axios";

const API_KEY = "4e6a7a291f59592e86a9f346674dde5a";

const marvelApi = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/",
  params: {
    apikey: API_KEY,
  },
});

export const getAllCharacters = async () => {
  const { data } = await marvelApi.get("/characters");
  return data;
};

export const getCharacterById = async (id) => {
  const { data } = await marvelApi.get(`/characters/${id}`);
  return data;
};
