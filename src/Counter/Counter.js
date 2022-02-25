/*
    https://hackernoon.com/top-3-coding-challenges-for-mid-level-react-developers
    Create a Counter but with a twist
 */
import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext(0);

const Child = () => {
    const context = useContext(CountContext);
    const { increment } = context;

    return (
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

const Counter = () => {
    let [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    return (
        <CountContext.Provider value={{ increment }}>
            <Child />
            <h2>{count}</h2>
        </CountContext.Provider>
    );
};

export default Counter;
