import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";

//importing action creators to fetch resources
import { fetchRestaurant, fetchImages } from "../actions";

//importing other modules
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";

//This list is to check performance of flatlist component
import ImageList from "../components/ImageList";

const SearchScreen = props => {
  const init = "pasta";
  //This page value is for pagination
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState("");
  if (props.results.length == 0) {
    props.fetchRestaurant(init);
  }

  // initializing Fake image list
  if (props.images.length == 0) {
    props.fetchImages();
  }
  //destructuring from props
  const { results, images } = props;

  //cheching value
  console.log(results);
  console.log(images);

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
      {/* ScrollView is used to provide scrolling abilities to the nested components */}
      <ScrollView>
        <ResultList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} />

        {/* This is for the testing FlatList listing */}
        <ImageList title="Image List" results={images} />
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
    results: state.restaurants,
    images: state.imageList
  };
};

export default connect(
  mapStateToProps,
  { fetchRestaurant, fetchImages }
)(SearchScreen);
