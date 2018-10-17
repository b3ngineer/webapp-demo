import actions from "../actions/app";

export default (state = { error: "", warning: "" }, action) => {
  switch (action.type) {
    case actions.ERROR:
      return Object.assign(
        {},
        {
          error: action.error,
          warning: ""
        }
      );
    case actions.WARNING:
      return Object.assign(
        {},
        {
          error: "",
          warning: action.warning
        }
      );
    default:
      return state;
  }
};
