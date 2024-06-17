let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    // Add product to the cart
    cart.push({ product, price });
    
    // Update the cart display
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    // Update the cart items list
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    // Update the total price
    totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function removeFromCart(index) {
    // Remove item from the cart
    cart.splice(index, 1);
    
    // Update the cart display
    displayCart();
}

