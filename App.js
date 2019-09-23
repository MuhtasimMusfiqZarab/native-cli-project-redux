import React from "react";
import Routes from "./Routes";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

//This is for readux dev tools extension
import { composeWithDevTools } from "redux-devtools-extension";

//thunk for async action creator
import thunk from "redux-thunk";

//get reducer over to createStore
import reducers from "./src/reducers";

const App = () => {
  return (
    <Provider
      store={createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))}
    >
      <Routes />
    </Provider>
  );
};
export default App;
