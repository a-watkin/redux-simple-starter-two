import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import activeBook from "./reducer_active_book";

// tells redux how to create application state
// add the global state books
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: activeBook
});

export default rootReducer;
