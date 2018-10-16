import React from "react";
import StarRatings from "react-star-ratings";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./css/Movies.css";

const MovieRating = props => {
  const { name, onChange } = props;
  const yellow = "rgb(255, 226, 43)";
  const gray = "rgb(165, 165, 165)";
  let starDimension = "20px";
  let starSpacing = "2px";

  if (props.browser.lessThan.medium) {
    starDimension = "15px";
    starSpacing = "0px";
  }

  return onChange ? (
    <StarRatings
      changeRating={props.onChange}
      rating={props.rating}
      starDimension={starDimension}
      starSpacing={starSpacing}
      starRatedColor={yellow}
      starHoverColor={yellow}
      starEmptyColor={gray}
      name={name}
    />
  ) : (
    <StarRatings
      rating={props.rating}
      starDimension={starDimension}
      starSpacing={starSpacing}
      starRatedColor={yellow}
      starHoverColor={gray}
      starEmptyColor={gray}
    />
  );
};

MovieRating.propTypes = {
  rating: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  name: PropTypes.string,
  onChange: PropTypes.func
};

MovieRating.defaultProps = {
  rating: 0
};

export default connect(state => ({
  browser: state.browser
}))(MovieRating);
