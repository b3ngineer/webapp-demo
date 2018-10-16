import actions from "../actions/movies";

export default (state = {}, action) => {
  let name = "";
  switch (action.type) {
    case actions.MOVIE_ADD:
      name = action.payload.name;
      return Object.assign({}, state, {
        [name]: {
          category: action.payload.category,
          rating: action.payload.rating || 0
        }
      });
    case actions.MOVIE_RATE:
      name = action.payload.name;
      return Object.assign({}, state, {
        [name]: {
          category: state[name].category,
          rating: action.payload.rating
        }
      });
    case actions.MOVIE_REMOVE:
      const newState = Object.assign({}, state);
      delete newState[action.name];
      return newState;
    default:
      return state;
  }
};
