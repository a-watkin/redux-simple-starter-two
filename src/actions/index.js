export function selectBook(book) {
  //   console.log("A book has been selected: ", book);

  // select book is an action creator and needs to return an action
  // an object with a type property

  // this object is automatically sent to all reducers
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
