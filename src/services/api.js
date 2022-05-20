import axios from "axios";

const dadosApi = {
  baseUrl: "https://api.themoviedb.org/3/",
  movieUrl: "movie/now_playing",
  API_KEY: "d04f8e4889bda6c6b4f04ddda94f683e",
  language: "pt-BR",
};

const api = axios.create({
  baseURL: dadosApi.baseUrl,
});

async function getMovies() {
  const response = await api.get(dadosApi.movieUrl, {
    params: {
      api_key: dadosApi.API_KEY,
      language: dadosApi.language,
      page: 1,
    },
  });
  return response.data.results;
}

export { getMovies };
