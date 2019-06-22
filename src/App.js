import React, { useRef, createContext } from 'react';
import Toggle from './Toggle';
import { useTitleInput} from "./hooks/useTitleInput";

export const UserContext = createContext();

const App = () => {
  const [
    dishName,
    setDishName,
  ] = useTitleInput('');

  const ref = useRef();

  return (
    <UserContext.Provider
      value={{
        user: true,
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.toggle('fake-class-here')}>Level Up Dishes</h1>
        <Toggle />
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <input type="text" onChange={(event) => setDishName(event.target.value)} value={dishName}/>
          <button>Submit The Form</button>
        </form>
      </div>
    </UserContext.Provider>
  );
};


export default App;
