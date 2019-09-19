import React from "react";
import { View, Text, FlatList } from "react-native";

import { connect } from "react-redux";
import ListItem from "./ListItem";

//helper method for renderItem
const renderItem = item => {
  //returning each list item from here
  return <ListItem item={item} />;
};

const RestaurantsList = props => {
  return (
    <FlatList
      // data to iterate
      data={props.restaurants}
      renderItem={renderItem} //referencing the helper
      keyExtractor={item => item.id}
    />
  );
};

const mapStateToProps = state => {
  //must return an object with a key
  // returning an object from here will be shown as props from the component
  return {
    restaurants: state.restaurants
  };
};

//connect is always called with mapStateToProps
export default connect(mapStateToProps)(RestaurantsList);
