// useFetch.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the data from the API.
    axios.get(url, options).then((response) => {
      setData(response.data);
      setLoading(false);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, [url, options]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;

// App.jsx
import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';

const App = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return <div>The data is: {data}</div>;
  }
};

export default App;
