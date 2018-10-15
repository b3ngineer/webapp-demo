import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-flexbox-grid";
import MovieCategory from "./MovieCategory";
import ReactStars from "react-stars";
import "./css/Movies.css";
import { movies } from "../store/actions";

const { removeMovie } = movies;

class FavoriteMovies extends Component {
  handleStarChange = value => {
    console.log(value);
  };

  handleCategoryChange = e => {
    console.log(e);
  };

  handleRemoveMovie = e => {
    const name = e.currentTarget.getAttribute("data-name");
    if (name) {
      this.props.removeMovie(name);
    }
  };

  render() {
    const favorites = Object.getOwnPropertyNames(this.props.favorites);
    return (
      <React.Fragment>
        <Row>
          <Col xs={2}>
            <div className="space-bottom" />
          </Col>
          <Col xs={7}>
            <div className="space-bottom">My favorite movies.</div>
          </Col>
          <Col xs={3}>
            <div className="space-bottom">Rating.</div>
          </Col>
        </Row>
        {favorites.length ? (
          favorites.map(name => (
            <Row key={name}>
              <Col xs={2}>
                <span
                  className="text-right control text-smaller"
                  onClick={this.handleRemoveMovie}
                  data-name={name}
                >
                  (remove)
                </span>
              </Col>
              <Col xs={5}>
                <input className="full-width" value={name} disabled />
              </Col>
              <Col xs={2}>
                <MovieCategory
                  selected={this.props.favorites[name]}
                  name={name}
                  onChange={this.handleCategoryChange}
                />
              </Col>
              <Col xs={3}>
                <ReactStars
                  count={5}
                  className="rating-stars"
                  onChange={this.handleStarChange}
                  size={24}
                  color2={"#ffd700"}
                />
              </Col>
            </Row>
          ))
        ) : (
          <Row>
            <Col xs={2}>
              <div className="space-bottom" />
            </Col>
            <Col xs={7}>
              <div className="space-bottom inactive">
                No favorite movies selected yet.
              </div>
            </Col>
            <Col xs={3}>
              <ReactStars
                count={5}
                className="rating-stars"
                size={24}
                edit={false}
              />
            </Col>
          </Row>
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    favorites: state.movies
  }),
  { removeMovie }
)(FavoriteMovies);
