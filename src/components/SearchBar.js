import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ term, onSearch, onSearchSubmit }) => {
  return (
    <View style={styles.viewParent}>
      <FontAwesome
        style={styles.iconStyle}
        name="search"
        size={24}
        color="black"
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onSearch}
        onEndEditing={onSearchSubmit}
        value={term}
        placeholder="Search"
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewParent: {
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#e0dede",
    height: 50,
  },

  textInput: {
    flex: 1,
  },

  iconStyle: {
    marginHorizontal: 15,
    alignSelf: "center",
  },
});

export default SearchBar;
