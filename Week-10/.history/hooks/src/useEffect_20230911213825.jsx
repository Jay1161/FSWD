import React, { useState, useEffect } from 'react';

function DataFetching() {
  // Declare a state variable to store data
  const [data, setData] = useState([]);

  // Declare a state variable to track loading state
  const [isLoading, setIsLoading] = useState(true);

  // Declare a state variable to track any error
  const [error, setError] = useState(null);

  // Define the effect to fetch data when the component mounts
  useEffect(() => {
    // Simulate an API call using a setTimeout
    const fetchData = async () => {
      try {
        // Simulate a fetch request
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Data Fetching Example</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetching;
