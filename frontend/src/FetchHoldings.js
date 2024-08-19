import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchHoldings() {
  const [holdings, setHoldings] = useState([]);

  const fetchHoldings = async () => {
    try {
      const response = await axios.get('http://localhost:3001/myTask');
      setHoldings(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchHoldings();
  }, []); // Fetch data on component mount

  return (
    <div>
      <h2>Existing Holdings</h2>
      <ul>
        {holdings.map((holding, index) => (
          <li key={index}>{holding.name} - {holding.phone}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchHoldings;
