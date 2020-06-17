import React, { useState, useEffect } from "react";
import { Image, Text, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text>{id} </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150,
  },
});

export default ResultShowScreen;
