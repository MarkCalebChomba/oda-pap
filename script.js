// Toggle menu
document.getElementById('menu-icon').addEventListener('click', function() {
    const navBar = document.getElementById('nav-bar');
    if (navBar.style.display === 'block') {
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'block';
    }
});

// Search functionality
document.getElementById('search-icon').addEventListener('click', function() {
    let searchQuery = prompt('Enter search query:');
    if (searchQuery) {
        alert('You searched for: ' + searchQuery);
        // Implement actual search functionality here
    }
});

// Notification icon alert
document.getElementById('notification-icon').addEventListener('click', function() {
    alert('You have no new notifications.');
});

// Cart icon alert
document.getElementById('cart-icon').addEventListener('click', function() {
    alert('Your cart is empty.');
});
