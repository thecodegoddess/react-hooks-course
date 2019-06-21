import React, { useState } from 'react';

const App = () => {
  const [
    dishName,
    setDishName,
  ] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        formSubmit(dishName, setDishName);
      }}>
        <input type="text" onChange={(event) => setDishName(event.target.value)} value={dishName} />
        <button>Submit The Form</button>
      </form>
    </div>
  );
};

const formSubmit = (value, setValue) => {
  console.log(`email has been sent to ${value}`);
  setValue('');
};

export default App;
