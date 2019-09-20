import React from "react";
import Routes from "./Routes";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

//thunk for async action creator
import thunk from "redux-thunk";

//get reducer over to createStore
import reducers from "./src/reducers";

const App = () => {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <Routes />
    </Provider>
  );
};
export default App;
