import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
//importing the hooks we have created
import useResults from "../hooks/useResults";

//-------------using redux
import RestaurantsList from "../components/RestaurantsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  //extracting values from hooks
  const [searchAPI, results, errorMessage] = useResults();

  // helper func to filter according to price
  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    // flex: 1 lets the <View> / <> to use the visible area of the screen
    //use => when contents are cut off and expanding out of the screen
    <>
      {/* must provide both the term and onTermChange callback to change it */}
      <SearchBar
        term={term}
        onTermChange={newValue => setTerm(newValue)}
        onTermSubmit={() => searchAPI(term)} //term is from the state (search is done here)
      />
      {errorMessage ? <Text>Found :{results.length}</Text> : null}
      {/* scroll view allows to scroll */}
      <ScrollView>
        <ResultList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} />

        {/* This is for the test  */}
        <RestaurantsList />
      </ScrollView>
      {/* These components are using redux as a state
       */}
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
