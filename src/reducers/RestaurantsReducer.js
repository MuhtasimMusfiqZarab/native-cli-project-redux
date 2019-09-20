//initial state can't be undefiend thus returning empty arrray of objects
export default (state = [], action) => {
  //this is true for every reducer boilerplate (using swtich)
  switch (action.type) {
    case "FETCH_RESTAURANTS":
      return action.payload;

    default:
      return state;
  }
};
