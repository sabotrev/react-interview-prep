import React, { useEffect, useState } from 'react';
import { listItems, sortingCategories } from './data';

const DropDownMenu = ({ onChange }) => {
    return (
        <>
            <label htmlFor="sort_select">Sort</label>
            <br />
            <select
                name="sort"
                id="sort_select"
                onChange={(event) => onChange(event.target.value)}
            >
                {sortingCategories.map((category) => {
                    return (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

const ProductList = ({ products }) => {
    return (
        <div>
            {products.map((product) => {
                return (
                    <p key={product.id}>
                        {product.name}, ${product.price.toFixed(2)}
                    </p>
                );
            })}
        </div>
    );
};

const FilterList = () => {
    const [products, setProducts] = useState(listItems);
    const [filterValue, setFilterValue] = useState('');

    const sort = (sortType) => {
        let newOrder = [...products];
        switch (sortType) {
            case 'Name A-Z':
                setProducts(
                    newOrder.sort((a, b) => (a.name > b.name ? 1 : -1))
                );
                break;
            case 'Price High-Low':
                setProducts(newOrder.sort((a, b) => b.price - a.price));
                return;
            case 'Price Low-High':
                setProducts(newOrder.sort((a, b) => a.price - b.price));
                return;
            default:
                return;
        }
    };

    const filter = (inputValue) => {
        setFilterValue(inputValue);

        const newValues = [...listItems].filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        setProducts(newValues);
    };

    useEffect(() => {
        sort('Name A-Z');
    }, []);

    return (
        <>
            <label>
                Filter
                <input
                    name="filter"
                    value={filterValue}
                    onChange={(event) => filter(event.target.value)}
                />
            </label>
            <br />
            <DropDownMenu onChange={sort} />
            <ProductList products={products} />
        </>
    );
};

export default FilterList;
