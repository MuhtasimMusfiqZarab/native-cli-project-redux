import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";

//importing action creators to fetch resources
import { fetchRestaurant } from "../actions";

//importing other modules
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";

//This list is to check performance of flatlist component
import ImageList from "../components/ImageList";

const SearchScreen = props => {
  const init = "pasta";
  const [term, setTerm] = useState("");
  if (props.results.length == 0) {
    props.fetchRestaurant(init);
  }
  //destructuring from props
  const { results } = props;

  //cheching value
  console.log(results);

  // helper func to filter according to price
  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    <>
      {/* must provide both the term and onTermChange callback to change it */}
      {/* <SearchBar
        term={term}
        onTermChange={newValue => setTerm(newValue)}
        onTermSubmit={() => props.fetchRestaurant(term)} //term is from the state (search is done here)
      /> */}
      {/* ScrollView is used to provide scrolling abilities to the nested components */}
      <ScrollView>
        {/* <ResultList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} /> */}

        {/* This is for the testing FlatList listing */}
        <ImageList title="Image List" />
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
