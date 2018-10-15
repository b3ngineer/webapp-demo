import React from "react";
import { Row, Col } from "react-flexbox-grid";
import MovieCategory from "./MovieCategory";
import ReactStars from "react-stars";
import "./css/Movies.css";

const handleStarChange = value => {
  console.log(value);
};

export default () => (
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
    <Row>
      <Col xs={2}>
        <div className="text-right control text-smaller">(remove)</div>
      </Col>
      <Col xs={5}>
        <input className="full-width" />
      </Col>
      <Col xs={2}>
        <MovieCategory />
      </Col>
      <Col xs={3}>
        <ReactStars
          count={5}
          className="rating-stars"
          onChange={handleStarChange}
          size={24}
          color2={"#ffd700"}
        />
      </Col>
    </Row>
  </React.Fragment>
);
