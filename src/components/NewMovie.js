import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import MovieCategory from "./MovieCategory";
import { connect } from "react-redux";
import "./css/Movies.css";
import { movies, app } from "../store/actions";

const { addMovie } = movies;
const { updateMovieName } = app;

class NewMovie extends Component {
  handleSaveClick = () => {
    this.props.addMovie("Test", "123");
  };

  handleNameChange = e => {
    this.props.updateMovieName(e.currentTarget.value);
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs={2}>
            <div className="space-bottom" />
          </Col>
          <Col xs={10}>
            <div className="space-bottom">New Movie:</div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}> </Col>
          <Col xs={5}>
            <input className="full-width" onChange={this.handleNameChange} />
          </Col>
          <Col xs={2}>
            <MovieCategory />
          </Col>
          <Col xs={3}> </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <div />
          </Col>
          <Col xs={10}>
            <span
              className="control space-right"
              onClick={this.handleSaveClick}
            >
              Save
            </span>
            <span className="control">Cancel</span>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { addMovie, updateMovieName }
)(NewMovie);
