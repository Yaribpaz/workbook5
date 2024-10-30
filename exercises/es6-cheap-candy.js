"use strict";

let products = [    
    {product: "Gummy Worms", price: 5.79},    
    {product: "Plain M&Ms", price: 2.89},    
    {product: "Peanut M&Ms", price: 2.89},    
    {product: "Swedish Fish", price: 3.79},     
    {product: "Sour Patch Kids", price: 3.49},  
    {product: "Cadbury Chocolate Bar", price: 3.99},    
    {product: "Skittles", price: 4.29},        
    {product: "Twix", price: 2.99},       
    {product: "Milk Duds", price: 3.29},      
    {product: "Starburst", price: 2.49}
];

let cheapCandies = products.filter(candy => candy.price < 4.00);
console.log("Candies under $4.00", cheapCandies);

let mmCandies = products.filter(candy => candy.product.includes("M&M"));
console.log("Candies with M&M", mmCandies);

let hasSwedishFish = products.filter(candy => candy.product === "Swedish Fish").length > 0;
console.log("Do we carry Swedish Fish?", hasSwedishFish);
