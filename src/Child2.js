import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(CounterReducer, 1);
    return(
        <div>
            <h2>This is Second Child using Counter Reducer</h2>
            <h4>Value of Reducer State is: {state}</h4>
            <button onClick = {() => dispatch('INCREMENT')}>Increment Reducer</button>
        </div>

    )

}

export default Child2