// Starting the program
console.log("Data management with objects, sets and maps!");

// Define an object with products
const products = {
    1: { id: 1, name: "Laptop", price: 1500 },
    2: { id: 2, name: "Mouse", price: 25 },
    3: { id: 3, name: "Keyboard", price: 50 }
};

console.log("Products object:", products);

// Validate that product data is complete
for (const key in products) {
    const { id, name, price } = products[key];
    if (!id || !name || !price) {
        console.warn(`Product with key ${key} has incomplete data`);
    }
}

// Create a Set with unique product names
const setProducts = new Set(Object.values(products).map(product => product.name));
console.log("Set of unique products:", setProducts);

// Create a Map with categories as keys and arrays of product names as values
const mapProducts = new Map([
    ["Electronics", ["Laptop"]],
    ["Accessories", ["Mouse", "Keyboard"]]
]);

console.log("Products and categories map:", mapProducts);

// Iterate through the object using for(in)
for (const id in products) {
    console.log(`Product ID: ${id}, Details:`, products[id]);
}

// Iterate through the Set using for(of)
for (const product of setProducts) {
    console.log("Unique product:", product);
}

// Iterate through the Map using forEach
mapProducts.forEach((items, category) => {
    console.log(`Category: ${category}, Products: ${items.join(", ")}`);
});

// Display object methods
console.log("Keys:", Object.keys(products));
console.log("Values:", Object.values(products));
console.log("Entries:", Object.entries(products));

// Final output
console.log("Full list of products (Object):", products);
console.log("List of unique products (Set):", setProducts);
console.log("Categories and products (Map):", mapProducts);

// Show the products in the page
const productList = document.getElementById('product-list');
Object.values(products).forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    productList.appendChild(li);
});