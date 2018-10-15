import React from "react";
import FavoriteMovies from "./FavoriteMovies";
import NewMovie from "./NewMovie";
import "./css/Movies.css";

export default () => (
  <div className="movies">
    <FavoriteMovies />
    <div className="space-top" />
    <NewMovie />
  </div>
);
