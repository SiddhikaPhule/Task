import React, { useState } from 'react';
import FetchHoldings from './FetchHoldings';
import AddHoldingForm from './AddHoldingForm';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleAdd = () => {
    setRefresh(!refresh); // Toggle refresh state
  };

  return (
    <div className="App">
      <h1>Holding Data</h1>
      <AddHoldingForm onAdd={handleAdd} />
      <FetchHoldings key={refresh} /> {/* Use key to force re-render on refresh */}
    </div>
  );
}

export default App;
