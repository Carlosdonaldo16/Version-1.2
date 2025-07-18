// carrito.js
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById('lista-carrito');
  if (!lista) return;
  lista.innerHTML = '';
  carrito.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - Q${producto.precio}`;
    lista.appendChild(li);
  });
}

window.addEventListener('DOMContentLoaded', mostrarCarrito);
