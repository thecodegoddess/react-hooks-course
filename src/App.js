import { Counter } from './Counter';
import React, { useRef, useMemo } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {
  const [dishName, setDishName] = useTitleInput('');

  const ref = useRef();

  const reverseWord = (word) => {
    console.log('i was called');
    console.log("the word", word);
    return word.split('').reverse().join('');
  };

  let title = 'Level Up Dishes';
  const pageTitle = useMemo(() => reverseWord(title), [title]);

  return (<div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.toggle('fake-class-here')}>
        { pageTitle }
      </h1>
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
