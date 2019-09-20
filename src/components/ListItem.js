//-----------------Dont Change This one (reference)

import React, { useEffect } from "react";
import { animate } from "../helpers/animation";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation
} from "react-native";

//-----------------These are the steps to call action & change redux state
//to update the currently selected library we need to call the action creator
//need to load all of the action creatos
import * as actions from "../actions";
import { connect } from "react-redux";

const Listitem = props => {
  console.log(props);
  const { id, title, description } = props.item.item; // this props is from restaurantList

  //helper function to render description
  const renderDescription = () => {
    if (props.expanded) {
      //return description description jsx
      return <Text style={styles.list}>{description}</Text>;
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        animate();
        props.selectRestaurant(id); // this action creator will be auto dispatched
      }}
    >
      <View style={styles.list}>
        <Text>{title}</Text>
        {renderDescription()}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    margin: 10
  }
});

//ownProps is is props passed to the component(here ListItem )=> this is for pre calculation
const mapStateToProps = (state, ownProps) => {
  //ownProps is equal to props inside the component
  const expanded = state.selectedResId === ownProps.item.item.id;

  return {
    expanded
  };
};

// 1ts arg of connect is mapStateToPorps to get the state => here it is null
//2nd arg of connect is to bind action creators to the component
// binding action creator does 2 things: 1) auto dispatches action 2) makes actions available to component

export default connect(
  mapStateToProps,
  actions
)(Listitem);
