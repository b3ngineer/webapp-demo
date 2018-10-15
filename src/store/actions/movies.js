const actions = {
  MOVIE_ADD: "MOVIE_ADD",
  MOVIE_ADD_SUCCESS: "MOVIE_ADD_SUCCESS_RESULT",
  MOVIE_ERROR: "MOVIE_ERROR",
  addMovie: (name, category) => ({
    type: actions.MOVIE_ADD,
    payload: { name, category }
  })
};
export default actions;
