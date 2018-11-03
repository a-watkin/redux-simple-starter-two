import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";

// tells redux how to create application state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
