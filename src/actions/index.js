// all of the action creatot for the projects
// action creator creates an action // need to pass the id
export const selectRestaurant = id => {
  // returning actions from here
  return {
    type: "select_restaurant",
    payload: id
  };
};
