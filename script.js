let cart = [];
let cartCount = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  document.getElementById("cart-count-top").textContent = cartCount;
  alert(`${name} agregado al carrito 🛒`);
}
