import React from "react";
import PropTypes from "prop-types";
import "./css/Movies.css";

const MovieCategory = props => {
  return (
    <select id={props.id} onChange={props.onChange}>
      <option value="">-- select one --</option>
      {["action", "comedy", "drama", "horror", "indie", "romance"].map(
        value =>
          props.selected === value ? (
            <option key={value} value={value} selected>
              {value}
            </option>
          ) : (
            <option key={value} value={value}>
              {value}
            </option>
          )
      )}
    </select>
  );
};

MovieCategory.propTypes = {
  id: PropTypes.string,
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

MovieCategory.defaultProps = {
  id: "movie-category-" + Math.floor(Math.random() * 10000 + 1)
};

export default MovieCategory;
