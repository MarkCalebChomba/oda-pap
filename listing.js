document.addEventListener("DOMContentLoaded", function() {
    // Function to save data to local storage
    function saveToLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    // Function to get data from local storage
    function getFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    // Handle listing form submission
    const listingForm = document.getElementById("item-listing-form");
    if (listingForm) {
        listingForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const itemName = document.getElementById("item-name").value;
            const itemPrice = document.getElementById("item-price").value;
            const itemCategory = document.getElementById("item-category").value;
            const itemImage = document.getElementById("item-image").files[0];

            if (itemImage) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const newItem = {
                        id: Date.now(),
                        name: itemName,
                        price: itemPrice,
                        category: itemCategory,
                        image: e.target.result
                    };

                    const items = getFromLocalStorage("items");
                    items.push(newItem);
                    saveToLocalStorage("items", items);

                    alert("Item listed successfully!");
                    listingForm.reset();
                };
                reader.readAsDataURL(itemImage);
            } else {
                alert("Please select an image to upload.");
            }
        });
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

    // Render items on index page
    const galleryContainer = document.querySelector(".gallery");
    if (galleryContainer) {
        const items = getFromLocalStorage("items");
        renderItems(galleryContainer, items);
    }
});
