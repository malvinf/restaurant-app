import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState([]);

  //async is for wait response
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          limit: 50,
          location: "san jose",
        },
      });
      setResult(response.data.businesses);
    } catch (e) {
      setError("Something went wrong");
    }
  };

  //calling api only once when first rendered
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, result, error];
};
