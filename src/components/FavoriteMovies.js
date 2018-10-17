import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-flexbox-grid";
import MovieCategory from "./MovieCategory";
import MovieRating from "./MovieRating";
import "./css/Movies.css";
import { movies } from "../store/actions";

const { removeMovie, rateMovie } = movies;

class FavoriteMovies extends Component {
  handleStarChange = (rating, name) => {
    const category = this.props.favorites[name].category;
    this.props.rateMovie(name, category, rating);
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
          <Col xs={1} sm={2} md={2}>
            <div className="space-bottom" />
          </Col>
          <Col xs={6} sm={6} md={7}>
            <div className="space-bottom">My favorite movies.</div>
          </Col>
          <Col xs={5} sm={4} md={3}>
            <div
              className="space-bottom"
              style={{ textAlign: "center", marginLeft: "-1em" }}
            >
              Rating.
            </div>
          </Col>
        </Row>
        {favorites.length ? (
          favorites.map(name => (
            <Row key={name}>
              <Col xs={1} sm={2} md={2}>
                <div
                  className="text-right control"
                  onClick={this.handleRemoveMovie}
                  data-name={name}
                >
                  {this.props.browser.greaterThan.extraSmall ? (
                    <span>(remove)</span>
                  ) : (
                    <span>X</span>
                  )}
                </div>
              </Col>
              <Col xs={4} sm={4} md={5}>
                <input className="full-width" value={name} readOnly />
              </Col>
              <Col xs={2} sm={2} md={2}>
                <MovieCategory
                  selected={this.props.favorites[name].category}
                  name={name}
                />
              </Col>
              <Col xs={5} sm={4} md={3}>
                <div className="center">
                  <MovieRating
                    onChange={this.handleStarChange}
                    rating={this.props.favorites[name].rating}
                    name={name}
                  />
                </div>
              </Col>
            </Row>
          ))
        ) : (
          <Row>
            <Col xs={1} sm={2} md={2}>
              <div className="space-bottom" />
            </Col>
            <Col xs={6} sm={6} md={7}>
              <div className="space-bottom inactive">
                No favorite movies selected yet.
              </div>
            </Col>
            <Col xs={5} sm={4} md={3}>
              <div className="center">
                <MovieRating />
              </div>
            </Col>
          </Row>
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    favorites: state.movies,
    browser: state.browser
  }),
  { removeMovie, rateMovie }
)(FavoriteMovies);
