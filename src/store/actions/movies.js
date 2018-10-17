const actions = {
  MOVIE_LIST: "MOVIE_LIST",
  MOVIE_LIST_SUCCESS: "MOVIE_LIST_SUCCESS",
  MOVIE_ADD: "MOVIE_ADD",
  MOVIE_ADD_SUCCESS: "MOVIE_ADD_SUCCESS",
  MOVIE_REMOVE: "MOVIE_REMOVE",
  MOVIE_REMOVE_SUCCESS: "MOVIE_REMOVE_SUCCESS",
  MOVIE_RATE: "MOVIE_RATE",
  MOVIE_RATE_SUCCESS: "MOVIE_RATE_SUCCESS",
  MOVIE_ERROR: "MOVIE_ERROR",
  listMovies: () => ({
    type: actions.MOVIE_LIST
  }),
  addMovie: (name, category) => ({
    type: actions.MOVIE_ADD,
    payload: { name, category }
  }),
  removeMovie: name => ({
    type: actions.MOVIE_REMOVE,
    name
  }),
  rateMovie: (name, category, rating) => ({
    type: actions.MOVIE_RATE,
    payload: { name, category, rating }
  })
};
export default actions;
