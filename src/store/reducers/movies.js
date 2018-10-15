import actions from "../actions/movies";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.MOVIE_ADD:
      return Object.assign({}, state, {
        [action.payload.name]: action.payload.category
      });
    case actions.MOVIE_REMOVE:
      const newState = Object.assign({}, state);
      delete newState[action.name];
      return newState;
    default:
      return state;
  }
};