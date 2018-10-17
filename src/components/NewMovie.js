import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import MovieCategory from "./MovieCategory";
import { connect } from "react-redux";
import "./css/Movies.css";
import { movies, app } from "../store/actions";
import "react-notifications/lib/notifications.css";

const { addMovie } = movies;
const { triggerError, triggerWarning } = app;

class NewMovie extends Component {
  clear = () => {
    this.newCategory = "";
    document.getElementById("new-name").value = this.newName = "";
    document.getElementById("new-category").selectedIndex = 0;
  };

  handleSaveClick = () => {
    if (!this.newName) {
      return this.props.triggerWarning(
        "Please fill in the movie name to continue"
      );
    }

    if (!this.validName()) {
      return this.props.triggerError(
        "The movie name contains invalid characters"
      );
    }

    if (!this.newCategory) {
      return this.props.triggerWarning(
        "Please select a category before saving"
      );
    }

    this.props.addMovie(this.newName, this.newCategory);
    this.clear();
  };

  validName = () => {
    return /^[a-z0-9\s]*$/i.test(this.newName);
  };

  handleNameChange = e => {
    this.newName = e.currentTarget.value;
    if (!this.validName()) {
      this.props.triggerError(
        "Only letters and numbers are allowed in movie names"
      );
    }
  };

  handleCategoryChange = e => {
    this.newCategory = e.currentTarget.value;
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs={1} sm={2} md={2}>
            <div className="space-bottom" />
          </Col>
          <Col xs={11} sm={10} md={10}>
            <div className="space-bottom">New Movie:</div>
          </Col>
        </Row>
        <Row>
          <Col xs={1} sm={2} md={2}>
            <div />
          </Col>
          <Col xs={4} sm={4} md={5}>
            <input
              id="new-name"
              className="full-width"
              onChange={this.handleNameChange}
            />
          </Col>
          <Col xs={2} sm={2} md={2}>
            <MovieCategory
              id="new-category"
              onChange={this.handleCategoryChange}
            />
          </Col>
          <Col xs={5} sm={4} md={3}>
            <div />
          </Col>
        </Row>
        <Row>
          <Col xs={1} sm={2} md={2}>
            <div />
          </Col>
          <Col xs={11} sm={10} md={10}>
            <span
              className="control space-right"
              onClick={this.handleSaveClick}
            >
              Save
            </span>
            <span className="control" onClick={this.clear}>
              Cancel
            </span>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { addMovie, triggerError, triggerWarning }
)(NewMovie);
