import React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { configureStore } from "../store";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MovieRating from "../components/MovieRating";
import MovieCategory from "../components/MovieCategory";
import NewMovie from "../components/NewMovie";
import FavoriteMovies from "../components/FavoriteMovies";

const history = createBrowserHistory();
const store = configureStore(history, {});
const storeWithFavoriteMovie = configureStore(history, {
  movies: {
    aliens: {
      category: "horror",
      rating: 5
    }
  }
});

const providerDecorator = story => <Provider store={store}>{story()}</Provider>;

storiesOf("MovieCategory", module)
  .add("Inactive", () => <MovieCategory selected="action" />)
  .add("Select one", () => <MovieCategory onChange={action("selected")} />);

storiesOf("MovieRating", module)
  .addDecorator(providerDecorator)
  .add("Default", () => <MovieRating />)
  .add("With rating", () => <MovieRating rating={3} />)
  .add("With action", () => (
    <MovieRating rating={1} onChange={action("rated")} />
  ));

storiesOf("NewMovie", module)
  .addDecorator(providerDecorator)
  .add("Default", () => <NewMovie />);

storiesOf("FavoriteMovies", module)
  .add("Default", () => (
    <Provider store={store}>
      <FavoriteMovies />
    </Provider>
  ))
  .add("With favorite movie", () => (
    <Provider store={storeWithFavoriteMovie}>
      <FavoriteMovies />
    </Provider>
  ));
