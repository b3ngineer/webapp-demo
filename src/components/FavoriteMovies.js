import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-flexbox-grid";
import MovieCategory from "./MovieCategory";
import StarRatings from "react-star-ratings";
import "./css/Movies.css";
import { movies } from "../store/actions";

const { removeMovie, rateMovie } = movies;

class FavoriteMovies extends Component {
  handleStarChange = (rating, name) => {
    this.props.rateMovie(name, rating);
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
    const yellow = "rgb(255, 226, 43)";
    const gray = "rgb(165, 165, 165)";
    const starDimension = "20px";
    const starSpacing = "2px";
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
              <Col xs={2}>
                <div
                  className="text-right control text-smaller"
                  onClick={this.handleRemoveMovie}
                  data-name={name}
                >
                  (remove)
                </div>
              </Col>
              <Col xs={5}>
                <input className="full-width" value={name} readOnly />
              </Col>
              <Col xs={2}>
                <MovieCategory
                  selected={this.props.favorites[name].category}
                  name={name}
                  onChange={this.handleCategoryChange}
                />
              </Col>
              <Col xs={3}>
                <div className="space-left">
                  <StarRatings
                    changeRating={this.handleStarChange}
                    rating={this.props.favorites[name].rating}
                    starDimension={starDimension}
                    starSpacing={starSpacing}
                    starRatedColor={yellow}
                    starHoverColor={yellow}
                    starEmptyColor={gray}
                    name={name}
                  />
                </div>
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
              <div className="space-left">
                <StarRatings
                  starDimension={starDimension}
                  starSpacing={starSpacing}
                  starRatedColor={gray}
                  starHoverColor={gray}
                  starEmptyColor={gray}
                />
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
    favorites: state.movies
  }),
  { removeMovie, rateMovie }
)(FavoriteMovies);
