const BASE_URL = 'http://10.58.5.46:8000';

export const API = {
  movies: `${BASE_URL}`,
  feeds: `${BASE_URL}/movies?source=`,
  addFeeds: `${BASE_URL}/movies?rating=`,
};
