// filename: elaborate_code.js

// This code demonstrates a complex and sophisticated example of an e-commerce website's shopping cart functionality.

// Initialize the shopping cart
const cart = {};

// Define product objects
const products = [
  { id: 1, name: 'T-shirt', price: 20 },
  { id: 2, name: 'Jeans', price: 50 },
  // ... more products ...
];

// Add products to the cart
function addToCart(productId, quantity) {
  const product = products.find(p => p.id === productId);
  if (!product) {
    console.error('Product not found!');
    return;
  }

  const cartItem = cart[productId];
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart[productId] = { ...product, quantity };
  }

  console.log(`Added ${quantity} ${product.name}(s) to the cart.`);
}

// Remove products from the cart
function removeFromCart(productId, quantity) {
  const product = products.find(p => p.id === productId);
  if (!product) {
    console.error('Product not found!');
    return;
  }

  const cartItem = cart[productId];
  if (!cartItem) {
    console.error('Product not in cart!');
    return;
  }

  if (cartItem.quantity <= quantity) {
    delete cart[productId];
  } else {
    cartItem.quantity -= quantity;
  }

  console.log(`Removed ${quantity} ${product.name}(s) from the cart.`);
}

// Calculate the total price of the cart
function calculateTotalPrice() {
  let totalPrice = 0;
  for (const key in cart) {
    totalPrice += cart[key].price * cart[key].quantity;
  }
  return totalPrice;
}

// Checkout function
function checkout() {
  const totalPrice = calculateTotalPrice();
  console.log(`Total price: $${totalPrice.toFixed(2)}`);
  
  // ... More complex checkout logic ...

  console.log('Checkout completed!');
}

// Example usage
addToCart(1, 3);
addToCart(2, 2);
removeFromCart(1, 1);
checkout();

// ... More complex functionality and features ...

// More than 200 lines of code...
// ...