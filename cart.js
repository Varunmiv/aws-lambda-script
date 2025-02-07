// Select all cart icons with the class "add-to-cart"
document.querySelectorAll('.add-to-cart').forEach(cartIcon => {
    cartIcon.addEventListener('click', event => {
        // Prevent the default link behavior
        event.preventDefault();
        
        // Get the data attributes from the clicked cart icon
        const itemFilter = cartIcon.getAttribute('data-filter');
        const itemName = cartIcon.getAttribute('data-name');
        const itemPrice = cartIcon.getAttribute('data-price');
        
        // Add the item to the cart
        addToCart(itemFilter, itemName, itemPrice);
    });
});
