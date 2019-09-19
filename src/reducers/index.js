import { combineReducers } from "redux";
import RestaurantsReducer from "./RestaurantsReducer";
import SelectionReducer from "./SelectionReducer";

//need to combine different reducers
export default combineReducers({
  // HERE ARE THE LIST OF REDUCERS
  // key defines how its gonna show inside of the redux state
  restaurants: RestaurantsReducer, // by defaut this reducer always returns an array
  selectedResId: SelectionReducer
});
