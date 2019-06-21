import React, { useState, useEffect } from 'react';

const App = () => {
  const [
    dishName,
    setDishName,
  ] = useState('');

  useEffect(() => {
    document.title = `Dish name is ${dishName}`;
  });

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input type="text" onChange={(event) => setDishName(event.target.value)} value={dishName} />
        <button>Submit The Form</button>
      </form>
    </div>
  );
};

export default App;
