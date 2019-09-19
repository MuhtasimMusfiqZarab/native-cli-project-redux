//initial state can't be undefiend thus returning null
export default (state = null, action) => {
  //this is true for every reducer boilerplate (using swtich)
  switch (action.type) {
    case "select_restaurant":
      return action.payload;

    default:
      return state;
  }
};
