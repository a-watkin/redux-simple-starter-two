import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    // when the app first starts it's state will be null
    // this can cause a problem without this block
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
          <div>Title: {this.props.book.title}</div>
          <div>Pages: {this.props.book.pages}</div>
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
