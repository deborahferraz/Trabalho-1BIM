const products = [
    { id: 1, name: "Camiseta Preta", category: "blusas", price: 59.90, promo: true, img: "./imagens/CamisetaPreta.png" },
    { id: 2, name: "Calça Jeans", category: "calcas", price: 89.90, promo: true, img: "./imagens/CalçaJeans.png" },
    { id: 3, name: "Jaqueta de Couro", category: "blusas", price: 149.90, promo: false, img: "./imagens/JaquetaCouro.png" },
    { id: 4, name: "Vestido Floral", category: "vestidos", price: 79.90, promo: true, img: "./imagens/VestidoFloral.png" },
    { id: 5, name: "Saia Plissada", category: "saias", price: 69.90, promo: false, img:"./imagens/SaiaPlissada.png" },
    { id: 6, name: "Colar de Coração", category: "acessorios", price: 29.90, promo: false, img: "./imagens/ColarCoracao.png" },
    { id: 7, name: "Brinco de Pérola", category: "acessorios", price: 19.90, promo: false, img: "./imagens/BrincoPerola.png" },
    { id: 8, name: "Macacão Jeans", category: "calcas", price: 129.90, promo: false, img: "./imagens/MacacaoJeans.png" },
    { id: 9, name: "Top Canelado", category: "blusas", price: 39.90, promo: false, img: "./imagens/Cropped.png" },
    { id: 10, name: "Vestido Longo", category: "vestidos", price: 99.90, promo: false, img: "./imagens/VestidoLongo.png" },
    { id: 11, name: "Blusa de Tricot", category: "blusas", price: 79.90, promo: false, img: "./imagens/BlusaTricot.png" },
    { id: 12, name: "Calça de Couro", category: "calcas", price: 159.90, promo: false, img: "./imagens/CalcaCouro.png" },
    { id: 13, name: "Casaco Estiloso", category: "blusas", price: 199.90, promo: false, img: "./imagens/CasacoLa.png" },
    { id: 14, name: "Vestido de Paetê", category: "vestidos", price: 179.90, promo: false, img: "./imagens/VestidoPaete.png" },
    { id: 15, name: "Saia Jeans", category: "saias", price: 89.90, promo: false, img: "./imagens/SaiaJeans.png" },
    { id: 16, name: "Anel de Prata", category: "acessorios", price: 49.90, promo: false, img: "./imagens/AnelPrata.png" },
    { id: 17, name: "Pulseira de Ouro", category: "acessorios", price: 79.90, promo: false, img: "./imagens/PulseiraOuro.png" },
    { id: 18, name: "Blusa Manga Longa", category: "blusas", price: 119.90, promo: false, img: "./imagens/BlusaSeda.png" },
    { id: 19, name: "Calça de Alfaiataria", category: "calcas", price: 119.90, promo: false, img: "./imagens/CalcaAlfaiataria.png" },
    { id: 20, name: "Macacão de Linho", category: "calcas", price: 149.90, promo: false, img: "./imagens/MacacaoLinho.png" },
    { id: 21, name: "Top Cropped", category: "blusas", price: 39.90, promo: false, img: "./imagens/TopCropped.png" },
    { id: 22, name: "Vestido Tubinho", category: "vestidos", price: 89.90, promo: false, img: "./imagens/VestidoTubinho.png" },
    { id: 23, name: "Saia de Couro", category: "saias", price: 99.90, promo: false, img: "./imagens/SaiaCouro.png" },
    { id: 24, name: "Brincos", category: "acessorios", price: 24.90, promo: false, img: "./imagens/BrincoArgola.png" },
    { id: 25, name: "Cinto de Couro", category: "acessorios", price: 59.90, promo: false, img: "./imagens/CintoCouro.png" },
    { id: 26, name: "Suéter de Lã", category: "blusas", price: 109.90, promo: false, img: "./imagens/SueterLa.png" },
    { id: 27, name: "Calça Cargo", category: "calcas", price: 89.90, promo: false, img: "./imagens/CalcaCargo.png" },
    { id: 28, name: "Camiseta Estampada", category: "blusas", price: 49.90, promo: false, img: "./imagens/CamisetaEstampada.png" },
    { id: 29, name: "Vestido", category: "vestidos", price: 899.90, promo: false, img: "./imagens/Vestido.png" },
    { id: 30, name: "Shorts Jeans", category: "saias", price: 59.90, promo: false, img: "./imagens/ShortsJeans.png" },
    { id: 31, name: "Top Regata", category: "blusas", price: 69.90, promo: false, img: "./imagens/TopRegata.png" },
    { id: 32, name: "Calça Cargo Branca", category: "calcas", price: 109.90, promo: false, img: "./imagens/CalcaCargoBranca.png" },
    { id: 33, name: "Camiseta Polo", category: "blusas", price: 39.90, promo: false, img: "./imagens/CamisetaPolo.png" },
    { id: 34, name: "Saia Midi", category: "saias", price: 79.90, promo: false, img: "./imagens/SaiaMidi.png" },
    { id: 35, name: "Brinco de Cristal", category: "acessorios", price: 69.90, promo: false, img: "./imagens/BrincoCristal.png" },
    { id: 36, name: "Colar de Pérolas", category: "acessorios", price: 89.90, promo: false, img: "./imagens/ColarPerolas.png" },
    { id: 37, name: "Jaqueta Jeans", category: "blusas", price: 169.90, promo: false, img: "./imagens/JaquetaJeans.png" },
    { id: 38, name: "Calça de Moletom", category: "calcas", price: 79.90, promo: false, img: "./imagens/CalcaMoletom.png" },
    { id: 39, name: "Vestido Estampado", category: "vestidos", price: 119.90, promo: false, img: "./imagens/VestidoEstampado.png" },
    { id: 40, name: "Saia Rodada", category: "saias", price: 89.90, promo: false, img: "./imagens/SaiaRodada.png" },
    { id: 41, name: "Camiseta Básica", category: "blusas", price: 29.90, promo: false, img: "./imagens/CamisetaBasica.png" },
    { id: 42, name: "Blusa de Manga Longa Azul", category: "blusas", price: 89.90, promo: false, img: "./imagens/BlusaMangaLonga.png" },
    { id: 43, name: "Saia Metalizada", category: "saias", price: 139.90, promo: false, img: "./imagens/SaiaMetalizada.png" },
    { id: 44, name: "Vestido Floral Rosa", category: "vestidos", price: 299.90, promo: false, img: "./imagens/VestidoFesta.png" },
    { id: 45, name: "Saia de Paete", category: "saias", price: 79.90, promo: false, img: "./imagens/SaiaPaete.png" },
    { id: 46, name: "Colar de Ouro", category: "acessorios", price: 119.90, promo: false, img: "./imagens/ColarOuro.png" },
    { id: 47, name: "Brinco de Prata", category: "acessorios", price: 59.90, promo: false, img: "./imagens/BrincoPrata.png" },
    { id: 48, name: "Blusa de Manga Curta", category: "blusas", price: 69.90, promo: false, img: "./imagens/BlusaMangaCurta.png" },
    { id: 49, name: "Calça Skinny", category: "calcas", price: 129.90, promo: false, img: "./imagens/CalcaSkinny.png" },
    { id: 50, name: "Vestido Curto", category: "vestidos", price: 69.90, promo: false, img: "./imagens/VestidoCurto.png" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// As demais funções seguem conforme o código original

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function renderProducts(productArray) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    productArray.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <div class="quantity-controls">
                <button class="decrease" onclick="updateQuantity(${product.id}, -1)">-</button>
                <span id="qty-${product.id}" class="quantity">1</span>
                <button class="increase" onclick="updateQuantity(${product.id}, 1)">+</button>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Adicionar ao carrinho</button>
        `;
        productList.appendChild(card);
    });
}

function filterByCategory(category) {
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
}

function updateQuantity(productId, change) {
    const quantityElement = document.getElementById(`qty-${productId}`);
    let currentQuantity = parseInt(quantityElement.innerText);
    currentQuantity += change;

    if (currentQuantity < 1) {
        currentQuantity = 1;
    }

    quantityElement.innerText = currentQuantity;
}

function addToCart(productId) {
    const quantity = parseInt(document.getElementById(`qty-${productId}`).innerText);
    const product = products.find(p => p.id === productId);

    if (!product) return;

    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    saveCart();
    updateCartCount();
}

function updateCartCount() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    const cartCountElement = document.getElementById("cartCount");
    const cartValueElement = document.getElementById("cartValue");
    const cartBtn = document.getElementById("cartBtn");

    if (cartCountElement && cartValueElement && cartBtn) {
        cartCountElement.innerText = `Carrinho (${totalItems} item${totalItems !== 1 ? 's' : ''})`;
        cartValueElement.innerText = `R$ ${totalValue.toFixed(2)}`;

        cartBtn.classList.add("animate-cart");
        setTimeout(() => {
            cartBtn.classList.remove("animate-cart");
        }, 500);
    }
}

function updateCartDisplay() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartModalBody = document.getElementById("cartModalBody");
    cartModalBody.innerHTML = "";

    if (cart.length === 0) {
        cartModalBody.innerHTML = "<p>Seu carrinho está vazio.</p>";
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>R$ ${item.price.toFixed(2)} x ${item.quantity}</p>
                <p>Total: R$ ${(item.price * item.quantity).toFixed(2)}</p>
            `;
            cartModalBody.appendChild(cartItem);
        });
    }

    const totalValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalElement = document.getElementById("totalAmount");
    if (totalElement) {
        totalElement.innerText = totalValue.toFixed(2);
    }

    // Salvar o valor total atualizado
    localStorage.setItem("checkoutTotal", totalValue.toFixed(2));
}

    const totalValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalElement = document.getElementById("totalAmount");
    if (totalElement) {
        totalElement.innerText = totalValue.toFixed(2);
    }


document.getElementById("cartBtn").addEventListener("click", () => {
    document.getElementById("cartModal").style.display = "block";
    updateCartDisplay();
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("cartModal").style.display = "none";
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Seu carrinho está vazio.");
        return; // ← Impede o redirecionamento
    }

    const totalValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    localStorage.setItem("checkoutTotal", totalValue.toFixed(2));
    window.location.href = "checkout.html";
});


document.getElementById("clearCartBtn").addEventListener("click", () => {
    if (confirm("Tem certeza que deseja esvaziar o carrinho?")) {
        const trashSound = document.getElementById("trashSound");

        trashSound.currentTime = 0;
        trashSound.play();

        const items = document.querySelectorAll("#cartModalBody .cart-item");
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("fade-out");
            }, index * 100);
        });

        setTimeout(() => {
            cart.length = 0;
            saveCart();
            updateCartDisplay();
            updateCartCount();

            const totalElement = document.getElementById("totalAmount");
            if (totalElement) {
                totalElement.innerText = "0.00";
            }
        }, 600);
        document.getElementById("clearCartBtn").addEventListener("click", () => {
            const cartModalBody = document.getElementById("cartModalBody");
            const trashSound = document.getElementById("trashSound");
        
            cart.forEach((item, index) => {
                const cartItem = cartModalBody.children[index];
                if (cartItem) {
                    cartItem.classList.add("fade-out");
                }
            });
        
            setTimeout(() => {
                cart = [];
                saveCart();
                localStorage.removeItem("checkoutTotal"); // <- ESSA LINHA LIMPA O TOTAL SALVO
                updateCartDisplay();
                updateCartCount();
            }, 500);
        
            trashSound.play();
        });
        
    }
});

function goToCategory(category) {
    window.location.href = `categoria.html?cat=${category}`;
}

document.getElementById("search").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
});

const promoProducts = products.filter(p => p.promo);
renderProducts(promoProducts);
updateCartCount();
