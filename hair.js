// Sample Wig Data
const wigs = [
    {
        id: 1,
        name: "Curly Lace Front",
        price: 299,
        image: "images/pexels-rdne-6923254.jpg",
        description: "24-inch natural curly lace front wig"
    },
    {
        id: 2,
        name: "Straight Bob",
        price: 249,
        image: "images/pexels-rdne-6923196.jpg",
        description: "18-inch sleek straight bob wig"
    }
];

// Initialize Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Populate Wig Products
function renderWigs() {
    const wigGrid = document.querySelector('.wig-grid');
    
    wigs.forEach(wig => {
        const wigCard = document.createElement('div');
        wigCard.className = 'wig-card';
        wigCard.innerHTML = `
            <img src="${wig.image}" alt="${wig.name}">
            <div class="wig-info">
                <h3>${wig.name}</h3>
                <p>$${wig.price}</p>
                <button onclick="showProductModal(${wig.id})">Quick View</button>
                <button onclick="addToCart(${wig.id})">Add to Cart</button>
            </div>
        `;
        wigGrid.appendChild(wigCard);
    });
}

// Modal Functions
function showProductModal(wigId) {
    const wig = wigs.find(w => w.id === wigId);
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2>${wig.name}</h2>
        <img src="${wig.image}" alt="${wig.name}" style="max-width: 300px">
        <p>${wig.description}</p>
        <p>Price: $${wig.price}</p>
    `;
    
    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Cart Functions
function addToCart(wigId) {
    const wig = wigs.find(w => w.id === wigId);
    cart.push(wig);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}

// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
    renderWigs();
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};