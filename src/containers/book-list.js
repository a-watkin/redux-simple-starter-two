import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// When state changes this rerenders
// takes in application state and returns props
// links redux to react
function mapStateToProps(state) {
  // whatever is return will show up as props inside BookList
  // whatever is returned here is set to this.props of the component
  return {
    books: state.books
  };
}

// export the container, two calls
export default connect(mapStateToProps)(BookList);
