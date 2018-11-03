import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
// ensures the actuion flows through all the reducers
import { bindActionCreators } from "redux";

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

// anything returned from this function ends up as props on BookList container
function mapDispatchToProps(disaptch) {
  // the value selectBook is the action imported above, so that function is called whenever the key is evaluated

  // the result of selectBook passes throuh all the reducers
  return bindActionCreators({ selectBook: selectBook }, disaptch);
}

// export the container, two calls

// promote BookList from a component to a container, let it know about this new distpatch method, SelectBook, make it available as a prop via mapDispatchToProps
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
