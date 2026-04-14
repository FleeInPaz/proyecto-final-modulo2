// assets/js/app.js

const frutas = [
    { id: 1, nombre: "Manzana", precio: 1200, unidad: "kg", img: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400" },
    { id: 2, nombre: "Plátano", precio: 1500, unidad: "kg", img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400" },
    { id: 3, nombre: "Frutilla", precio: 3000, unidad: "kg", img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400" },
    { id: 4, nombre: "Palta Hass", precio: 4500, unidad: "kg", img: "https://portaluchile.uchile.cl//.imaging/default/dam/imagenes/Uchile/imagenes-noticias/143731_1_paltas-01-l_L/jcr:content.jpg" }
];

// Selectores del DOM
const grid = document.querySelector('#product-grid');
const badge = document.querySelector('#cart-count');
const cartList = document.querySelector('#cart-list');
const subtotalEl = document.querySelector('#subtotal');
const taxEl = document.querySelector('#tax');
const totalEl = document.querySelector('#total');

// Persistencia: Usaremos 'cart_data' consistentemente
let carrito = JSON.parse(localStorage.getItem('cart_data')) || [];

// Renderizar las cards
const render = () => {
    if (!grid) return;
    grid.innerHTML = '';
    frutas.forEach(f => {
        const card = document.createElement('div');
        card.className = "col-12 col-md-6 col-lg-3";
        card.innerHTML = `
            <div class="card h-100 shadow-sm border-0 transition-hover">
                <img src="${f.img}" class="card-img-top" alt="${f.nombre}">
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold">${f.nombre}</h5>
                    <p class="text-success fw-bold">$${f.precio.toLocaleString('es-CL')} / ${f.unidad}</p>
                    <button class="btn btn-success w-100" onclick="addToCart(${f.id})">Agregar</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
    updateUI(); 
};

// Agregar al carrito
window.addToCart = (id) => {
    const item = frutas.find(p => p.id === id);
    if (item) {
        carrito.push(item);
        localStorage.setItem('cart_data', JSON.stringify(carrito));
        updateUI();
    }
};

// Actualizar Modal y Badge
function updateUI() {
    if (badge) badge.innerText = carrito.length;
    if (!cartList) return;

    cartList.innerHTML = "";
    let subtotal = 0;

    carrito.forEach((item) => {
        subtotal += item.precio;
        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center border-0 border-bottom small";
        li.innerHTML = `${item.nombre} <span class="fw-bold">$${item.precio.toLocaleString('es-CL')}</span>`;
        cartList.appendChild(li);
    });

    const iva = subtotal * 0.19;
    const total = subtotal + iva;

    if (subtotalEl) subtotalEl.innerText = `$${subtotal.toLocaleString('es-CL')}`;
    if (taxEl) taxEl.innerText = `$${Math.round(iva).toLocaleString('es-CL')}`;
    if (totalEl) totalEl.innerText = `$${Math.round(total).toLocaleString('es-CL')}`;
}

// Finalizar Compra
window.finalizarCompra = () => {
    if (carrito.length === 0) return alert("El carrito está vacío");
    alert("¡Compra realizada con éxito en Feria Limache!");
    carrito = [];
    localStorage.removeItem('cart_data');
    updateUI();

    const modalElement = document.getElementById('cartModal');
    const instance = bootstrap.Modal.getInstance(modalElement);
    if (instance) instance.hide();
};

// Iniciar
document.addEventListener('DOMContentLoaded', render);