import React, {useState} from 'react';
import Parent from './Parent';
import './App.css';
import CounterContext from './CounterContext';
import counterContext from './CounterContext';

function App() {

  let countState = useState(1)
  // let [count, SetCount] = useState(1)

  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent />
    </div>
    </CounterContext.Provider>
    
  );
}

export default App;
