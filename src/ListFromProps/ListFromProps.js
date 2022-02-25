import React from 'react';

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
    },
];

const ListComponent = ({ items }) => {
    return (
        <ul style={{ float: 'left' }}>
            {items.map((item) => (
                <li>{item.title}</li>
            ))}
        </ul>
    );
};

const WrapperComponent = () => {
    return <ListComponent items={list} />;
};

export default WrapperComponent;
