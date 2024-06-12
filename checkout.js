document.addEventListener("DOMContentLoaded", function() {
    const mpesaButton = document.querySelector('.mpesa-button');
    const cardButton = document.querySelector('.card-button');
    const otherButton = document.querySelector('.other-button');

    mpesaButton.addEventListener('click', function() {
        alert('Pay with M-Pesa selected');
        // Add your M-Pesa payment logic here
    });

    cardButton.addEventListener('click', function() {
        alert('Pay with Card selected');
        // Add your Card payment logic here
    });

    otherButton.addEventListener('click', function() {
        alert('Other Payment Options selected');
        // Add your other payment logic here
    });
});
