function fetchFirstImages(nextQuery) {
  return fetch(
    `https://pixabay.com/api/?q=${nextQuery}&key=6725923-1edca42cf91687372f6490452&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}

function fetchLoadMore(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=6725923-1edca42cf91687372f6490452&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}

const api = {
  fetchFirstImages,
  fetchLoadMore,
};

export default api;
