import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { fetchImages } from "../actions";
class ImageList extends Component {
  state = {
    page: 1
  };

  //initial rendering
  componentDidMount() {
    this.props.fetchImages(this.state.page);
  }

  //handling paginatiion
  handleLoadMore = () => {
    console.log("on fetch");
    this.setState(
      state => {
        page: state.page + 1;
      },
      () => {
        console.log(this.state.page);
        //passing callback after setState is done
        this.props.fetchImages(this.state.page);
      }
    );
  };

  render() {
    // we destructure class props inside render
    const { title, images } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        {/* showing products using ImageList */}
        <FlatList
          data={images}
          //keyExtractor also has 2nd arg as index
          keyExtractor={image => image.id.toString()}
          showsHorizontalScrollIndicator={false}
          //renderItem has {item,index}
          renderItem={({ item }) => {
            return (
              <View style={styles.container}>
                <Image source={{ uri: item.url }} style={styles.imageStyle} />
                <Text style={styles.nameStyle}> {item.title}</Text>
                <Text style={styles.nameStyle}> {item.id}</Text>
              </View>
            );
          }}
          /// this is for pagination & load more
          onEndReached={() => this.handleLoadMore()}
          //how close to the end to make the next request
          onEndReachedThreshold={0}
        />
      </View>
    );
  }
}

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
//accessing state
const mapStateToProps = state => {
  //must return the stae
  return {
    images: state.imageList
  };
};

//have to wrap the component with with navigation
//exporting special version of ImageList
export default connect(
  mapStateToProps,
  { fetchImages }
)(ImageList);
