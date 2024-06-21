function updateQuantity(change, element) {
    const quantityInput = element.parentNode.querySelector('.quantity-input');
    let quantity = parseInt(quantityInput.value);
    quantity += change;
    if (quantity < 1) {
        quantity = 1;
    }
    quantityInput.value = quantity;
    updateTotalPrice();
}

function updateTotalPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    cartItems.forEach(item => {
        const priceElement = item.querySelector('.product-price');
        const quantityElement = item.querySelector('.quantity-input');
        const price = parseFloat(priceElement.textContent.replace('KES ', ''));
        const quantity = parseInt(quantityElement.value);
        total += price * quantity;
    });
    document.getElementById('total-price').textContent = `KES ${total.toFixed(2)}`;
}

function checkout() {
    alert('Proceeding to checkout');
    // Implement checkout functionality
}

function removeFromCart(element) {
    const cartItem = element.closest('.cart-item');
    cartItem.remove();
    updateTotalPrice();
}
