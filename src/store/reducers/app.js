import actions from "../actions/app";

export default (state = { newMovie: "" }, action) => {
  switch (action.type) {
    case actions.APP_FORM_MOVIE_NAME:
      return Object.assign({}, state, { newMovie: actions.name });
    default:
      return state;
  }
};
