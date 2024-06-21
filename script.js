document.addEventListener("DOMContentLoaded", function() {
    // Sample item data
    const sampleItem = {
        id: 1,
        name: "Sample Product",
        price: 100,
        image: "images/sample-product.jpg"
    };

    // Function to save data to local storage
    function saveToLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    // Function to get data from local storage
    function getFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    // Function to add item to cart
    function addToCart(item) {
        const cartItems = getFromLocalStorage("cartItems");
        cartItems.push(item);
        saveToLocalStorage("cartItems", cartItems);
    }

    // Function to add item to wishlist
    function addToWishlist(item) {
        const wishlistItems = getFromLocalStorage("wishlistItems");
        wishlistItems.push(item);
        saveToLocalStorage("wishlistItems", wishlistItems);
    }

    // Function to add item to checkout
    function addToCheckout(item) {
        const checkoutItems = getFromLocalStorage("checkoutItems");
        checkoutItems.push(item);
        saveToLocalStorage("checkoutItems", checkoutItems);
    }

    // Function to render items on a page
    function renderItems(container, items) {
        container.innerHTML = "";
        items.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("item");
            itemElement.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>Price: $${item.price}</p>
                    <button class="buy-now-button">Buy Now</button>
                </div>
            `;
            container.appendChild(itemElement);
        });
    }

    // Add event listeners to buttons
    const cartButton = document.querySelector(".cart-button");
    const wishlistButton = document.querySelector(".wishlist-button");
    const buyNowButton = document.querySelector(".buy-now-button");

    if (cartButton) {
        cartButton.addEventListener("click", function() {
            addToCart(sampleItem);
            alert("Item added to cart!");
        });
    }

    if (wishlistButton) {
        wishlistButton.addEventListener("click", function() {
            addToWishlist(sampleItem);
            alert("Item added to wishlist!");
        });
    }

    if (buyNowButton) {
        buyNowButton.addEventListener("click", function() {
            addToCheckout(sampleItem);
            window.location.href = "checkout.html";
        });
    }

    // Render items on cart page
    const cartContainer = document.querySelector(".cart-container");
    if (cartContainer) {
        const cartItems = getFromLocalStorage("cartItems");
        renderItems(cartContainer, cartItems);
    }

    // Render items on wishlist page
    const wishlistContainer = document.querySelector(".wishlist-container");
    if (wishlistContainer) {
        const wishlistItems = getFromLocalStorage("wishlistItems");
        renderItems(wishlistContainer, wishlistItems);
    }

    // Render items on checkout page
    const checkoutContainer = document.querySelector(".checkout-container");
    if (checkoutContainer) {
        const checkoutItems = getFromLocalStorage("checkoutItems");
        renderItems(checkoutContainer, checkoutItems);
    }
});
