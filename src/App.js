import React, { useRef, useState, useEffect } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {
  const [name, setName] = useTitleInput('');
  const [dishes, setDishes] = useState([]);
  const ref = useRef();

  const fetchDishes = async () => {
    console.log('fetching data');
    const res = await fetch(
      'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes',
    );
    const dishes = await res.json();
    setDishes(dishes);
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.toggle('fake-class-here')}>
        Level Up Dishes
      </h1>
      <Toggle />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <button>Submit The Form</button>
      </form>
      {dishes &&
        dishes.map((dish) => {
          return (
            <article key={dish.name} className="dish-card dish-card--withImage">
              <h3>{dish.name}</h3>
              <p>{dish.desc}</p>
              <div className="ingredients">
                {dish.ingredients &&
                  dish.ingredients.map((ingredient) => (
                    <span key={`${dish.name}-${ingredient}`}>{ingredient}</span>
                  ))}
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default App;
