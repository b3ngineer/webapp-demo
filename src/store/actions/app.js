const actions = {
  APP_FORM_MOVIE_NAME: "APP_FORM_MOVIE_NAME",
  APP_ERROR: "APP_ERROR",
  updateMovieName: name => ({
    type: actions.APP_FORM_MOVIE_NAME,
    name
  })
};
export default actions;
