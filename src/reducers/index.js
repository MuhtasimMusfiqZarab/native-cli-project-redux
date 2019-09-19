import { combineReducers } from "redux";
import { RestaurantsReducer } from "./RestaurantsReducer";

export default combineReducers({
  // HERE ARE THE LIST OF REDUCERS
  restaurants: RestaurantsReducer // by defaut this reducer always returns an array
});
