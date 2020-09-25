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

let count = 0, price = 0;

for (let i = 0; i < data.length; ++i) {
    count += data[i].count;
    price += data[i].price_for_all;
}

console.log("{ count: " + count +", price: " + price + "}");