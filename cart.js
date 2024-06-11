function decreaseQuantity(element) {
    const quantityElement = element.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = --quantity;
    }
}

function increaseQuantity(element) {
    const quantityElement = element.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = ++quantity;
}
