//Iniciating the program
console.log("Data management with objects, sets and maps!")

//Define the product object
const products = {
    1: { id: 1, name: "Laptop", price: 1500},
    2: { id: 2, name: "Mouse", price: 25},
    3: { id: 3, name: "Keyboard", price: 50}
};

console.log("Products object:", products);

//Create a Set with the names of the products
const setProducts = new Set(Object.values(products).map(product => product.name));
console.log("Set of unique products:", products);


//Create a map to add categories to products
const mapProducts = new Map([
    ["Electronics", "Laptop"],
    ["Accesories", "Mouse"],
    ["Accesories", "Keyboard"]
]); 

console.log("Products and categories map:", mapProducts);

//To go through the product object
for (const id in products) {
    console.log(`Product ID: ${id}, Details:` ,products[id]);
    
}

//To go through the set of products
for (const product of setProducts) {
    console.log("Unique product", product);
}

//To go through the Map of products 
mapProducts.forEach((product, category) => {
    console.log(`Category: ${category}, Product: ${product}`);
    
});

console.log("Complete data manage testing:");
console.log("List of products (Object):", products);
console.log("List of unique products (Set):", setProducts);
console.log("Category and products (Map):", mapProducts);