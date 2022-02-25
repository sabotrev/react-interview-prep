import React, { useReducer } from 'react';
import navigationItems from './navigationItems';

function init(initialSet) {
    return { openSet: initialSet };
}
const reducer = (state, action) => {
    const { key } = action;
    switch (action.type) {
        case 'set':
            if (state.openSet !== undefined) {
                if (state.openSet.has(key)) {
                    let tempSet = new Set(state.openSet);
                    tempSet.delete(key);
                    return { openSet: tempSet };
                } else {
                    let tempSet = new Set(state.openSet);
                    tempSet.add(key);
                    return { openSet: tempSet };
                }
            }
    }
};

const HeaderComponent = ({ items, initialSet }) => {
    const [state, dispatch] = useReducer(reducer, initialSet, init);

    const handleClick = (event, key) => {
        event.stopPropagation();
        dispatch({ type: 'set', key: key });
    };
    console.log('here', state);

    return (
        <ul>
            {items &&
                items.map((item) => {
                    return (
                        <li
                            key={item.key}
                            onClick={(e) => handleClick(e, item.key)}
                        >
                            <h3>{`${item.name} key: ${item.key}`}</h3>
                            {item?.subMenu &&
                                state.openSet &&
                                state.openSet.has(item.key) && (
                                    <HeaderComponent
                                        items={item.subMenu}
                                        initialSet={state.openSet}
                                    />
                                )}
                        </li>
                    );
                })}
        </ul>
    );
};

const NavigationHeaderReducer = () => {
    return <HeaderComponent items={navigationItems} initialSet={new Set()} />;
};

export default NavigationHeaderReducer;
