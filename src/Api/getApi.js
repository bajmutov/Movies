import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'fbcd27110e3ea351d2ea352461b15e7c';

export const fetchPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchFullInfoMovie = async searchId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${searchId}?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchReviewsMovie = async searchId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${searchId}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchActorsMovie = async searchId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${searchId}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};

export const fetchMovieByName = async searchName => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${searchName}&api_key=${API_KEY}`
  );
  console.log('first', response.data.results);
  return response.data.results;
};
