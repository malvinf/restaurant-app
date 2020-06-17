import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "./../components/SearchBar";
import useResult from "../hook/useResult";
import ResultList from "../components/ResultList";

const SearchScreen = ({ navigation }) => {
  const [term, setSearch] = useState("");
  const [searchApi, result, error] = useResult();

  const filterResultByPrice = (price) => {
    return result.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onSearch={setSearch}
        onSearchSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultList result={filterResultByPrice("$")} title="Cost Effective" />
        <ResultList result={filterResultByPrice("$$")} title="Bit Pricier" />
        <ResultList result={filterResultByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
