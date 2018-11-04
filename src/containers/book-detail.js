import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    return (
      <div>
        <h3>Detail for: </h3>
        <div>{this.props.title}</div>
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
