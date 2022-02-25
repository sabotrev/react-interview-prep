import React, { createContext, useContext, useState } from 'react';
import navigationItems from './navigationItems';

const NavigationContext = createContext();

const HeaderComponent = ({ items, openSet }) => {
    const context = useContext(NavigationContext);
    const { handleClick } = context;

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
                                openSet &&
                                openSet.has(item.key) && (
                                    <HeaderComponent
                                        items={item.subMenu}
                                        openSet={openSet}
                                    />
                                )}
                        </li>
                    );
                })}
        </ul>
    );
};

const NavigationHeaderContext = () => {
    let [openSet, setOpenSet] = useState(new Set());

    const handleClick = (event, key) => {
        event.stopPropagation();
        if (openSet.has(key)) {
            setOpenSet((prevState) => {
                let tempSet = new Set(prevState);
                tempSet.delete(key);
                return tempSet;
            });
        } else {
            setOpenSet((prevState) => {
                let tempSet = new Set(prevState);
                tempSet.add(key);
                return tempSet;
            });
        }
    };

    return (
        <NavigationContext.Provider value={{ handleClick }}>
            <HeaderComponent items={navigationItems} openSet={openSet} />
        </NavigationContext.Provider>
    );
};

export default NavigationHeaderContext;
