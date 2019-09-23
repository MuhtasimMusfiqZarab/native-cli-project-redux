import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

//helper function for pagination
const handleLoadMore = () => {
  console.log("HandleMoreLoad");
};

const ImageList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      {/* showing products using ImageList */}
      <FlatList
        data={results}
        //keyExtractor also has 2nd arg as index
        keyExtractor={result => result.id}
        showsHorizontalScrollIndicator={false}
        //renderItem has {item,index}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Image source={{ uri: item.url }} style={styles.imageStyle} />
              <Text style={styles.nameStyle}> {item.title}</Text>
              {/* <Text>
                {result.rating} Stars, {result.review_count} Reviews
              </Text> */}
            </View>
          );
        }}
        /// this is for pagination & load more
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: "bold"
  }
});

//have to wrap the component with with navigation
//exporting special version of ImageList
export default ImageList;
