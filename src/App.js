import React, { useState } from 'react';

const App = () => {
  const [
    dishName,
    setDishName,
  ] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <input type="text" onChange={(event) => setDishName(event.target.value)} value={dishName} />
    </div>
  );
};

export default App;
