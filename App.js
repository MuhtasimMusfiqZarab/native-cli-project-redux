import React from "react";
import Routes from "./Routes";

import { Provider } from "react-redux";
import { createStore } from "redux";

//get reducer over to createStore
import reducers from "./src/reducers";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <Routes />
    </Provider>
  );
};
export default App;
