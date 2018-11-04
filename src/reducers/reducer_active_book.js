// reducers are always called by actions

// the state here is only for the part of the state it is responsible for
// it is not the overall application state
export default function(state = null, action) {
  // any dispatch will execute this code even when it does not concern it
  // any state change will call it basically

  // so only change state if the correct case is called
  switch (action.type) {
    case "BOOK_SELECTED":
      console.log("here?", state, action);
      return action.payload;
  }

  return state;
}

// state is set to null as a default because
// when the app is initialised the state will not be set
// setting it to null avoids it returning underfined
// which would break redux

// always return a fresh object
