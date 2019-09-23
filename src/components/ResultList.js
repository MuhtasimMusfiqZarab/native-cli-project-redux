import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

//importing this would allow navigation
// as a child, ResultDetail component does not inherit navigation from here
// thus we are passing with navigation to get navigation as a prop
import { withNavigation } from "react-navigation";

import ResultDetail from "./ResultDetail";

const ResultList = ({ title, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      {/* showing products using ResultList */}
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        showsHorizontalScrollIndicator={false}
        //renderItem has {item,index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              } // 2nd arg obj inside navigate communicates data to ResultsShow to be used from there
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  }
});

//have to wrap the component with with navigation
//exporting special version of resultList
export default withNavigation(ResultList);
