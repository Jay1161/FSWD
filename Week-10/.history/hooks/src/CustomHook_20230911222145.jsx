import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Custom = (url, options) => {
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
