class Item {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const listItems = [
    new Item(1, 'Nike Air Max', 100.0),
    new Item(2, 'Nike Air Force 1', 130.0),
    new Item(3, 'Nike Dunk', 250.0),
    new Item(4, 'Nike Jordan', 220.0),
    new Item(5, 'Adidas Yeezy', 340.0),
    new Item(6, 'Adidas Ultra Boost', 110.0),
    new Item(7, 'Adidas Stan Smith', 85.0),
];

const sortingCategories = ['Name A-Z', 'Price High-Low', 'Price Low-High'];

export { listItems, sortingCategories };
