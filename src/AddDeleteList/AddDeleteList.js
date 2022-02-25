/*
    https://hackernoon.com/top-3-coding-challenges-for-mid-level-react-developers
    Add and Delete Items From the List
 */
import React, { useState } from 'react';

const AddDeleteList = () => {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const add = () => {
        setList([...list, inputValue]);
        setInputValue('');
    };
    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    };
    const deleteHandler = (item) => {
        setList(list.filter((ele) => ele !== item));
    };
    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={inputChangeHandler}
            />
            <button onClick={add}>Add</button>
            <ul>
                {list.length > 0 &&
                    list.map((item) => {
                        return (
                            <li onClick={() => deleteHandler(item)}>{item}</li>
                        );
                    })}
            </ul>
        </>
    );
};

export default AddDeleteList;
