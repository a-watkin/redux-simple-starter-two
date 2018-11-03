import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";

// tells redux how to create application state
// add the global state books
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
