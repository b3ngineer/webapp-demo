import React, { Component } from "react";
import { connect } from "react-redux";
import { movies } from "../store/actions";
import Notifications from "./Notifications";
import FavoriteMovies from "./FavoriteMovies";
import NewMovie from "./NewMovie";
import "react-notifications/lib/notifications.css";
import "./css/Movies.css";

const { listMovies } = movies;

class Movies extends Component {
  componentDidMount() {
    this.props.listMovies();
  }

  render() {
    return (
      <div className="movies">
        <Notifications />
        <FavoriteMovies />
        <div className="space-top" />
        <NewMovie />
      </div>
    );
  }
}

export default connect(
  state => ({}),
  { listMovies }
)(Movies);
