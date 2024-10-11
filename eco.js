let cart = [];
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h3').innerText;
        const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('$', ''));

        const productInCart = cart.find(item => item.id === productId);
        if (productInCart) {
            productInCart.quantity++;
        } else {
            cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }
        
        updateCart();
        alert(`${productName} has been added to your cart!`); // Alert message
    });
});

document.getElementById("view-cart").addEventListener('click', () => {
    cartModal.style.display = "block";
});

document.querySelector(".close").addEventListener('click', () => {
    cartModal.style.display = "none";
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `<div>${item.name} - $${item.price} x ${item.quantity}</div>`;
    });
    
    cartTotal.innerText = `Total: $${total}`;
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
};

