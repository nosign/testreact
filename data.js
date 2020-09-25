const data = [
    {
        product_name: "Nail",
        count: 67,
        price_for_all: 364
    },
    {
        product_name: "Hammer",
        count: 43,
        price_for_all: 453
    },
    {
        product_name: "Tile",
        count: 23,
        price_for_all: 553
    }
];

function sumItems (array) {
    let sum = {count: 0, price: 0};
    for (let i = 0; i < array.length; i++) {
        sum.count += array[i].count;
        sum.price += array[i].price_for_all;
    }
    return sum;
}

console.log(sumItems(data));