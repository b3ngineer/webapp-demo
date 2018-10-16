import React from "react";
import PropTypes from "prop-types";
import "./css/Movies.css";

const MovieCategory = props => {
  const { onChange, selected } = props;
  return onChange ? (
    <select id={props.id} value={selected} onChange={onChange}>
      <option value="">-- select one --</option>
      {["action", "comedy", "drama", "horror", "indie", "romance"].map(
        value => (
          <option key={value} value={value}>
            {value}
          </option>
        )
      )}
    </select>
  ) : (
    <select id={props.id} value={selected} readOnly>
      <option value={selected}>{selected}</option>
    </select>
  );
};

MovieCategory.propTypes = {
  id: PropTypes.string,
  selected: PropTypes.string,
  onChange: PropTypes.func
};

MovieCategory.defaultProps = {
  id: "movie-category-" + Math.floor(Math.random() * 10000 + 1)
};

export default MovieCategory;
