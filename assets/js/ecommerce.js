/*
==================================================
|   BUY SYSTEM & EMAILJS FUNCTIONALITY           |
|   Add your products and EmailJS keys here.     |
==================================================
*/

const products = {
    // Home Product
    'h1': {
        name: 'New Burqa Collections 2026',
        price: '৳1500',
        images: [
            'assets/img/home.png',
            'assets/img/home.png',
            'assets/img/home.png',
            'assets/img/home.png',
            'assets/img/home.png'
        ],
        desc: 'Latest arrival of the new imported burqas of the 2026 series, with a modern and unique design.'
    },
    // Featured Products
    'f1': {
        name: 'Dubai Nida Burqa',
        price: '৳2000',
        images: ['assets/img/featured1.png', 'assets/img/featured1.png', 'assets/img/featured1.png', 'assets/img/featured1.png', 'assets/img/featured1.png'],
        desc: 'A beautiful Dubai Nida Burqa, perfect for any special occasion.'
    },
    'f2': {
        name: 'Closed Front Burqa',
        price: '৳3500',
        images: ['assets/img/featured2.png', 'assets/img/featured2.png', 'assets/img/featured2.png', 'assets/img/featured2.png', 'assets/img/featured2.png'],
        desc: 'Elegant closed-front burqa with intricate embroidery.'
    },
    'f3': {
        name: 'Layered Burqa',
        price: '৳4000',
        images: ['assets/img/featured3.png', 'assets/img/featured3.png', 'assets/img/featured3.png', 'assets/img/featured3.png', 'assets/img/featured3.png'],
        desc: 'A stunning layered burqa in a deep navy and pink.'
    },
    // Products Section
    'p1': {
        name: 'Abaya Style Burqa',
        price: '৳3000',
        images: ['assets/img/product1.png', 'assets/img/product1.png', 'assets/img/product1.png', 'assets/img/product1.png', 'assets/img/product1.png'],
        desc: 'Classic Abaya style burqa in a lovely pink and brown.'
    },
    'p2': {
        name: 'Closed Front Burqa (Navy)',
        price: '৳2000',
        images: ['assets/img/product2.png', 'assets/img/product2.png', 'assets/img/product2.png', 'assets/img/product2.png', 'assets/img/product2.png'],
        desc: 'A beautiful closed-front burqa in navy blue.'
    },
    'p3': {
        name: 'Kaftan Style Burqa',
        price: '৳1500',
        images: ['assets/img/product3.png', 'assets/img/product3.png', 'assets/img/product3.png', 'assets/img/product3.png', 'assets/img/product3.png'],
        desc: 'A loose-fitting Kaftan style burqa with delicate gold embroidery.'
    },
    'p4': {
        name: 'Maternity Burqa',
        price: '৳3000',
        images: ['assets/img/product4.png', 'assets/img/product4.png', 'assets/img/product4.png', 'assets/img/product4.png', 'assets/img/product4.png'],
        desc: 'A stylish and comfortable maternity burqa in maroon.'
    },
    'p5': {
        name: 'Butterfly Cut Burqa',
        price: '৳2000',
        images: ['assets/img/product5.png', 'assets/img/product5.png', 'assets/img/product5.png', 'assets/img/product5.png', 'assets/img/product5.png'],
        desc: 'Modern butterfly-cut burqa in black with grey accents.'
    },
    // New Arrivals
    'n1': {
        name: 'Festive Burqa',
        price: '৳2500',
        images: ['assets/img/new1.png', 'assets/img/new1.png', 'assets/img/new1.png', 'assets/img/new1.png', 'assets/img/new1.png'],
        desc: 'A gorgeous festive burqa in maroon, perfect for parties.'
    },
    'n2': {
        name: 'Dubai Nida Burqa (Black)',
        price: '৳2500',
        images: ['assets/img/new2.png', 'assets/img/new2.png', 'assets/img/new2.png', 'assets/img/new2.png', 'assets/img/new2.png'],
        desc: 'High-quality Dubai Nida burqa in classic black.'
    },
    'n3': {
        name: 'Closed Front Burqa (Blue Ombre)',
        price: '৳3000',
        images: ['assets/img/new3.png', 'assets/img/new3.png', 'assets/img/new3.png', 'assets/img/new3.png', 'assets/img/new3.png'],
        desc: 'A unique closed-front burqa with a stunning blue-to-white ombre effect.'
    },
    'n4': {
        name: 'Butterfly Cut Burqa (Maroon)',
        price: '৳2000',
        images: ['assets/img/new4.png', 'assets/img/new4.png', 'assets/img/new4.png', 'assets/img/new4.png', 'assets/img/new4.png'],
        desc: 'Elegant butterfly-cut burqa in a rich maroon color.'
    }
};

/*
==================================================
|   EMAILJS CONFIGURATION                        |
==================================================
*/
const EMAILJS_SERVICE_ID = 'service_nwijlo4';
const EMAILJS_TEMPLATE_ID = 'template_kc6ipeq';
const EMAILJS_PUBLIC_KEY = 'f6UtKJBgEuWhs1rnK';

/*
==================================================
|   MODAL & BUY FUNCTIONS                        |
==================================================
*/

const orderModal = document.getElementById('order-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalForm = document.getElementById('order-form');

// Product Info
const modalProductName = document.getElementById('modal-product-name');
const modalProductImg = document.getElementById('modal-product-img');
const modalProductBasePrice = document.getElementById('modal-product-base-price');

// Form Fields
const modalNameField = document.getElementById('form-name');
const modalMobileField = document.getElementById('form-mobile');
const modalLocationField = document.getElementById('form-location');
const modalSizeField = document.getElementById('form-size');
const modalProductIdField = document.getElementById('modal-product-id');
const modalActionField = document.getElementById('modal-action');

// Delivery & Price
const deliveryInsideRadio = document.getElementById('delivery-inside');
const deliveryOutsideRadio = document.getElementById('delivery-outside');
const modalDeliveryChargeEl = document.getElementById('modal-delivery-charge');
const modalTotalPriceEl = document.getElementById('modal-total-price');

// Payment
const paymentCodRadio = document.getElementById('payment-cod');
const paymentBkashRadio = document.getElementById('payment-bkash');
const bkashDetailsEl = document.getElementById('bkash-details');
const bkashTotalEl = document.getElementById('bkash-total');
const bkashTrxIdField = document.getElementById('form-bkash-trxid');

// --- Helper Functions ---

// 🆕 PROFESSIONAL TOAST NOTIFICATION
function showNotification(message, type = "success") {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: type === "success" ? "var(--first-color)" : "red",
        stopOnFocus: true,
    }).showToast();
}

function parsePrice(priceString) {
    if (!priceString) return 0;
    return parseInt(priceString.replace('৳', '').replace(',', ''));
}

function updateTotalPrice() {
    const productId = modalProductIdField.value;
    const product = products[productId];
    if (!product) return;

    const basePrice = parsePrice(product.price);
    let deliveryCharge = 0;

    if (deliveryInsideRadio.checked) {
        deliveryCharge = 80;
    } else if (deliveryOutsideRadio.checked) {
        deliveryCharge = 140;
    }

    const totalPrice = basePrice + deliveryCharge;

    modalProductBasePrice.innerText = `Price: ৳${basePrice}`;
    modalDeliveryChargeEl.innerText = `৳${deliveryCharge}`;
    modalTotalPriceEl.innerText = `৳${totalPrice}`;
    bkashTotalEl.innerText = `৳${totalPrice}`;
}

function toggleBkashFields() {
    if (paymentBkashRadio.checked) {
        bkashDetailsEl.classList.remove('hidden');
        bkashTrxIdField.required = true;
    } else {
        bkashDetailsEl.classList.add('hidden');
        bkashTrxIdField.required = false;
        bkashTrxIdField.value = '';
    }
}

function openOrderModal(productId, action) {
    const product = products[productId];
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    modalForm.reset();
    toggleBkashFields();

    modalProductName.innerText = product.name;
    modalProductImg.src = product.images ? product.images[0] : product.img;
    modalProductIdField.value = productId;
    modalActionField.value = action;

    const basePrice = parsePrice(product.price);
    modalProductBasePrice.innerText = `Price: ৳${basePrice}`;
    modalDeliveryChargeEl.innerText = '৳0';
    modalTotalPriceEl.innerText = `৳${basePrice}`;
    bkashTotalEl.innerText = `৳${basePrice}`;

    if (orderModal) {
        orderModal.classList.add('show-modal');
    }
}

function closeOrderModal() {
    if (orderModal) {
        orderModal.classList.remove('show-modal');
        modalForm.reset();
    }
}

function goToProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

/**
 * 🆕 LOADS PRODUCT GALLERY & RELATED PRODUCTS
 */
function loadProductDetails() {
    if (document.body.contains(document.getElementById('product-title'))) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = products[productId];

        if (product) {
            document.getElementById('product-title').innerText = product.name;
            document.getElementById('product-price').innerText = product.price;
            document.getElementById('product-description').innerText = product.desc;
            document.body.setAttribute('data-current-product-id', productId);

            // 🆕 LIGHTBOX ENABLED GALLERY
            const swiperWrapper = document.getElementById('product-swiper-wrapper');
            if (swiperWrapper && product.images) {
                swiperWrapper.innerHTML = '';
                product.images.forEach(imgSrc => {
                    const slide = document.createElement('div');
                    slide.className = 'swiper-slide';
                    // Added <a> tag for fslightbox
                    slide.innerHTML = `
                        <a data-fslightbox="gallery" href="${imgSrc}">
                            <img src="${imgSrc}" alt="${product.name}" class="home__img">
                        </a>
                    `;
                    swiperWrapper.appendChild(slide);
                });

                new Swiper(".product-swiper", {
                    spaceBetween: 30,
                    loop: true,
                    pagination: { el: ".swiper-pagination", clickable: true },
                    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                });

                // Refresh lightbox to detect new images
                if (typeof refreshFsLightbox === 'function') refreshFsLightbox();
            }

            // 🆕 LOAD RELATED PRODUCTS
            loadRelatedProducts(productId);

        } else {
            document.getElementById('product-title').innerText = 'Product Not Found';
            document.getElementById('product-description').innerText = 'This product does not exist.';
            document.getElementById('product-price').innerText = '';
        }
    }
}

// 🆕 RANDOM RELATED PRODUCTS GENERATOR
function loadRelatedProducts(currentId) {
    const container = document.getElementById('related-products-container');
    if (!container) return;

    // Get all product keys except current
    const keys = Object.keys(products).filter(k => k !== currentId);

    // Shuffle array
    keys.sort(() => 0.5 - Math.random());

    // Take first 3 items
    const selectedKeys = keys.slice(0, 3);

    container.innerHTML = ''; // Clear container
    selectedKeys.forEach(key => {
        const p = products[key];
        // Using 'featured__card' design
        const cardHTML = `
            <article class="featured__card">
                <img src="${p.images ? p.images[0] : p.img}" alt="${p.name}" class="featured__img" onclick="goToProduct('${key}')" style="cursor:pointer;">
                <div class="featured__data">
                    <h3 class="featured__title">${p.name}</h3>
                    <span class="featured__price">${p.price}</span>
                </div>
                <button class="button featured__button" onclick="buyProduct('${key}')">BUY NOW</button>
            </article>
        `;
        container.innerHTML += cardHTML;
    });
}

function buyProduct(productId) {
    openOrderModal(productId, 'NEW ORDER (Direct Buy)');
}

function buyNow() {
    const productId = document.body.getAttribute('data-current-product-id');
    if (!productId) {
        showNotification('Error: Could not find product.', 'error');
        return;
    }
    openOrderModal(productId, 'NEW ORDER (Product Page)');
}

(function() {
    if (typeof emailjs !== 'undefined') emailjs.init(EMAILJS_PUBLIC_KEY);

    if (orderModal) {
        modalCloseBtn.addEventListener('click', closeOrderModal);
        deliveryInsideRadio.addEventListener('change', updateTotalPrice);
        deliveryOutsideRadio.addEventListener('change', updateTotalPrice);
        paymentCodRadio.addEventListener('change', toggleBkashFields);
        paymentBkashRadio.addEventListener('change', toggleBkashFields);

        // 🆕 LOADING STATE ON SUBMIT
        modalForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const submitBtn = document.getElementById('modal-submit-btn');
            const originalText = submitBtn.innerText;

            // Disable Button
            submitBtn.innerText = "Processing...";
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.7";
            submitBtn.style.cursor = "not-allowed";

            const productId = modalProductIdField.value;
            const product = products[productId];

            const templateParams = {
                action: modalActionField.value,
                product_name: product.name,
                product_price: `৳${parsePrice(product.price)}`,
                product_image_link: window.location.origin + '/' + (product.images ? product.images[0] : product.img),
                buyer_name: modalNameField.value,
                buyer_mobile: modalMobileField.value,
                buyer_location: modalLocationField.value,
                buyer_size: modalSizeField.value,
                delivery_location: deliveryInsideRadio.checked ? "Inside Dhaka" : "Outside Dhaka",
                delivery_charge: modalDeliveryChargeEl.innerText,
                total_price: modalTotalPriceEl.innerText,
                payment_method: paymentCodRadio.checked ? "Cash on Delivery" : "Bkash",
                bkash_trx_id: paymentBkashRadio.checked ? bkashTrxIdField.value : "N/A"
            };

            // Send Email
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
                .then(function(response) {
                    showNotification("Order Placed Successfully!");
                    closeOrderModal();
                }, function(error) {
                    showNotification("Failed to send order. Please try again.", 'error');
                    console.error(error);
                })
                .finally(() => {
                    // Reset Button
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = "1";
                    submitBtn.style.cursor = "pointer";
                });
        });
    }

    if (document.getElementById('product-title')) {
        loadProductDetails();
    }
})();