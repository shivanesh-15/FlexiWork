import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = '/api';  // Vite proxy will handle this to forward requests to backend

// Function to fetch data
const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const App = () => {
  const [data, setData] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Data from Backend:</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
    </div>
  );
};

export default App;
