const BASE_URL = ' http://54.180.90.248:8000';

export const API = {
  movies: `${BASE_URL}`,
  feeds: `${BASE_URL}/movies?source=`,
  addFeeds: `${BASE_URL}/movies?rating=`,
};
