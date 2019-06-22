import { Counter } from './Counter';
import React, { useRef } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {
  const [dishName, setDishName] = useTitleInput('');

  const ref = useRef();

  return (<div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.toggle('fake-class-here')}>Level Up Dishes</h1>
      <Toggle/>
      <Counter/>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input type="text" onChange={(event) => setDishName(event.target.value)} value={dishName}/>
        <button>Submit The Form</button>
      </form>
    </div>);
};

export default App;
