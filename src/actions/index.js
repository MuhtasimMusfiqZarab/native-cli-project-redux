import yelp from "../api/yelp";
import json from "../api/jsonPlaceholder";

// all of the action creatot for the projects
// action creator creates an action // need to pass the id
export const selectRestaurant = id => {
  // returning actions from here
  return {
    type: "select_restaurant",
    payload: id
  };
};

// Action for fetching all the restaurants(async action creator)

export const fetchRestaurant = searchTerm => {
  //func inside acions creator to get async data ==> then dispatch action manually
  return async function(dispatch, getState) {
    const response = await yelp.get("/search", {
      //parameters to customize the search we make
      params: {
        //appending to the requested url
        limit: 50,
        term: searchTerm,
        location: "san jose"
      }
    });
    //manually dispatching this action object from action creator
    dispatch({ type: "FETCH_RESTAURANTS", payload: response.data.businesses });
    //saving to results array
    // setResults(response.data.businesses);
  };
};

//---------This action fetches images from a fake image

export const fetchImages = page => {
  return async function(dispatch, getState) {
    const response = await json.get(`/photos?_limit=10&_page=${page}`);
    //manually dispatching this action object from action creator
    dispatch({ type: "FETCH_IMAGES", payload: response.data });
  };
};
