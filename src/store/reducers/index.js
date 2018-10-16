import { createResponsiveStateReducer } from "redux-responsive";

export const browser = createResponsiveStateReducer({
  extraSmall: 576,
  small: 768,
  medium: 1000,
  large: 1280,
  extraLarge: 1400
});

export { default as app } from "./app";
export { default as movies } from "./movies";
