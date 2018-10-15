import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import MovieCategory from "./MovieCategory";
import { connect } from "react-redux";
import "./css/Movies.css";
import { movies } from "../store/actions";

const { addMovie } = movies;

class NewMovie extends Component {
  clear = () => {
    this.newCategory = "";
    document.getElementById("new-name").value = this.newName = "";
    document.getElementById("new-category").selectedIndex = 0;
  };

  handleSaveClick = () => {
    // TODO: handle missing this.newCategory
    if (this.newName) {
      this.props.addMovie(this.newName, this.newCategory);
      this.clear();
    }
  };

  handleNameChange = e => {
    this.newName = e.currentTarget.value;
  };

  handleCategoryChange = e => {
    const select = e.currentTarget;
    this.newCategory = select.options[select.selectedIndex].value;
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
          <Col xs={2}>
            <div />
          </Col>
          <Col xs={5}>
            <input
              id="new-name"
              className="full-width"
              onChange={this.handleNameChange}
            />
          </Col>
          <Col xs={2}>
            <MovieCategory
              id="new-category"
              onChange={this.handleCategoryChange}
            />
          </Col>
          <Col xs={3}>
            <div />
          </Col>
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
  { addMovie }
)(NewMovie);