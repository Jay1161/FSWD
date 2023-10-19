import React, { useEffect, useState } from 'react';
import useFetch from './fetch';

const Custom = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return <div>The data is: {data}</div>;
  }
};

export default Custom;
