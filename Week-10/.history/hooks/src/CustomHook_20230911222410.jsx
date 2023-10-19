

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
