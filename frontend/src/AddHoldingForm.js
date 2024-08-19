import React, { useState } from 'react';
import axios from 'axios';

function AddHoldingForm({ onAdd }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/addTask', { name, phone })
      .then(() => {
        alert('Data inserted successfully!');
        onAdd(); // Trigger data refresh
        setName(''); // Clear input fields
        setPhone('');
      })
      .catch(error => {
        console.error('There was an error inserting the data:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Phone: </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddHoldingForm;
