import React from "react";
import Notifications from "./Notifications";
import FavoriteMovies from "./FavoriteMovies";
import NewMovie from "./NewMovie";
import "react-notifications/lib/notifications.css";
import "./css/Movies.css";

export default () => (
  <div className="movies">
    <Notifications />
    <FavoriteMovies />
    <div className="space-top" />
    <NewMovie />
  </div>
);
