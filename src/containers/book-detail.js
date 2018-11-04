import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div>
          <h4>Select a book to get started.</h4>
        </div>
      );
    }

    return (
      <div>
        <h3>
          Detail for:
          <div>{this.props.book.title}</div>{" "}
        </h3>
        Book detail
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
