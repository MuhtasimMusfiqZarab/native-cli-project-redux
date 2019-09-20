import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";

import { fetchRestaurant } from "../actions";

//importing other modules
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";

const SearchScreen = props => {
  const init = "pasta";
  const [term, setTerm] = useState("");
  props.fetchRestaurant(init);
  //destructuring from props
  const { results } = props;

  // helper func to filter according to price
  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    <>
      {/* must provide both the term and onTermChange callback to change it */}
      <SearchBar
        term={term}
        onTermChange={newValue => setTerm(newValue)}
        onTermSubmit={() => props.fetchRestaurant(term)} //term is from the state (search is done here)
      />

      <ScrollView>
        <ResultList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} />

        {/* This is for the test  */}
        {/* <RestaurantsList /> */}
      </ScrollView>
      {/* These components are using redux as a state
       */}
    </>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  //must return to be used by this component
  return {
    results: state.restaurants
  };
};

export default connect(
  mapStateToProps,
  { fetchRestaurant }
)(SearchScreen);
