/*
==================================================
|   E-COMMERCE & EMAILJS FUNCTIONALITY           |
|   Add your products and EmailJS keys here.     |
==================================================
*/

// 👉 Add or edit product details here
// This object acts as your product database.
// The 'key' (e.g., 'h1', 'f1') must match the 'data-id' in your index.html
const products = {
    // Home Product
    'h1': {
        name: 'New Burqa Collections 2026',
        price: '৳1500',
        img: 'assets/img/home.png',
        desc: 'Latest arrival of the new imported burqas of the 2026 series, with a modern and unique design.'
    },
    // Featured Products
    'f1': {
        name: 'Dubai Nida Burqa',
        price: '৳2000',
        img: 'assets/img/featured1.png',
        desc: 'A beautiful Dubai Nida Burqa, perfect for any special occasion. Made from high-quality, breathable fabric.'
    },
    'f2': {
        name: 'Closed Front Burq',
        price: '৳3500',
        img: 'assets/img/featured2.png',
        desc: 'Elegant closed-front burqa with intricate embroidery. Offers full coverage while maintaining a stylish look.'
    },
    'f3': {
        name: 'Layered Burqa',
        price: '৳4000',
        img: 'assets/img/featured3.png',
        desc: 'A stunning layered burqa in a deep navy and pink. The flowing layers provide a graceful silhouette.'
    },
    // Products Section
    'p1': {
        name: 'Abaya Style Burqa',
        price: '৳3000',
        img: 'assets/img/product1.png',
        desc: 'Classic Abaya style burqa in a lovely pink and brown. Comfortable and stylish for daily wear.'
    },
    'p2': {
        name: 'Closed Front Burqa (Navy)',
        price: '৳2000',
        img: 'assets/img/product2.png',
        desc: 'A beautiful closed-front burqa in navy blue, accented with pink and floral embroidery on the sleeves.'
    },
    'p3': {
        name: 'Kaftan Style Burqa',
        price: '৳1500',
        img: 'assets/img/product3.png',
        desc: 'A loose-fitting Kaftan style burqa with delicate gold embroidery. Provides comfort and elegance.'
    },
    'p4': {
        name: 'Maternity Burqa',
        price: '৳3000',
        img: 'assets/img/product4.png',
        desc: 'A stylish and comfortable maternity burqa in maroon, designed to provide ample space and a flattering drape.'
    },
    'p5': {
        name: 'Butterfly Cut Burqa',
        price: '৳2000',
        img: 'assets/img/product5.png',
        desc: 'Modern butterfly-cut burqa in black with grey accents. Features beautiful floral embroidery on the cuffs.'
    },
    // New Arrivals
    'n1': {
        name: 'Festive Burqa',
        price: '৳2500',
        img: 'assets/img/new1.png',
        desc: 'A gorgeous festive burqa in maroon, perfect for parties and events. Features detailed silver embroidery.'
    },
    'n2': {
        name: 'Dubai Nida Burqa (Black)',
        price: '৳2500',
        img: 'assets/img/new2.png',
        desc: 'High-quality Dubai Nida burqa in classic black. Features subtle floral patterns on the sleeves.'
    },
    'n3': {
        name: 'Closed Front Burqa (Blue Ombre)',
        price: '৳3000',
        img: 'assets/img/new3.png',
        desc: 'A unique closed-front burqa with a stunning blue-to-white ombre effect. Lightweight and eye-catching.'
    },
    'n4': {
        name: 'Butterfly Cut Burqa (Maroon)',
        price: '৳2000',
        img: 'assets/img/new4.png',
        desc: 'Elegant butterfly-cut burqa in a rich maroon color. Features a comfortable fit and beautiful gold chest embroidery.'
    }
};

/*
==================================================
|   EMAILJS CONFIGURATION                        |
==================================================
*/

// 👉 Add your EmailJS service ID here
const EMAILJS_SERVICE_ID = 'service_nwijlo4';

// 👉 Add your EmailJS template ID here
const EMAILJS_TEMPLATE_ID = 'template_kc6ipeq';

// 👉 Add your EmailJS public key here
const EMAILJS_PUBLIC_KEY = 'f6UtKJBgEuWhs1rnK';

/*
==================================================
|   MODAL & ECOMMERCE FUNCTIONS                  |
==================================================
*/

// --- Get Modal Elements ---
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

/**
 * Parses a price string (e.g., "৳1500") into a number.
 * @param {string} priceString - The price string to parse.
 * @returns {number} The parsed price as a number.
 */
function parsePrice(priceString) {
    if (!priceString) return 0;
    return parseInt(priceString.replace('৳', '').replace(',', ''));
}

/**
 * Updates the delivery charge and total price display.
 */
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

    // Update the HTML
    modalProductBasePrice.innerText = `Price: ৳${basePrice}`;
    modalDeliveryChargeEl.innerText = `৳${deliveryCharge}`;
    modalTotalPriceEl.innerText = `৳${totalPrice}`;
    bkashTotalEl.innerText = `৳${totalPrice}`; // Update Bkash total as well
}

/**
 * Shows or hides the Bkash details section.
 */
function toggleBkashFields() {
    if (paymentBkashRadio.checked) {
        bkashDetailsEl.classList.remove('hidden');
        bkashTrxIdField.required = true; // Make TRX ID required
    } else {
        bkashDetailsEl.classList.add('hidden');
        bkashTrxIdField.required = false; // Make it not required
        bkashTrxIdField.value = ''; // Clear the field
    }
}

/**
 * Opens the order modal with product info
 * @param {string} productId - The ID from the 'data-id' attribute
 * @param {string} action - The type of action (e.g., "Add to Cart")
 */
function openOrderModal(productId, action) {
    const product = products[productId];
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // 1. Reset form fields
    modalForm.reset();
    toggleBkashFields(); // Hides Bkash details

    // 2. Populate product info
    modalProductName.innerText = product.name;
    modalProductImg.src = product.img;
    modalProductIdField.value = productId;
    modalActionField.value = action;

    // 3. Set initial prices
    const basePrice = parsePrice(product.price);
    modalProductBasePrice.innerText = `Price: ৳${basePrice}`;
    modalDeliveryChargeEl.innerText = '৳0';
    modalTotalPriceEl.innerText = `৳${basePrice}`; // Total starts as base price
    bkashTotalEl.innerText = `৳${basePrice}`;

    // 4. Show the modal
    if (orderModal) {
        orderModal.classList.add('show-modal');
    }
}

/**
 * Closes the order modal and clears all fields
 */
function closeOrderModal() {
    if (orderModal) {
        orderModal.classList.remove('show-modal');
        modalForm.reset(); // Resets all form fields
    }
}

/**
 * Navigates to the product details page
 * @param {string} productId - The ID from the 'data-id' attribute
 */
function goToProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

/**
 * Loads product details on product.html from URL parameter
 */
function loadProductDetails() {
    // This function only runs on product.html
    if (document.body.contains(document.getElementById('product-title'))) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = products[productId];

        if (product) {
            document.getElementById('product-img').src = product.img;
            document.getElementById('product-img').alt = product.name;
            document.getElementById('product-title').innerText = product.name;
            document.getElementById('product-price').innerText = product.price;
            document.getElementById('product-description').innerText = product.desc;

            // Store the product ID on the page for the buyNow function
            document.body.setAttribute('data-current-product-id', productId);
        } else {
            // Handle case where product is not found
            document.getElementById('product-title').innerText = 'Product Not Found';
            document.getElementById('product-description').innerText = 'This product does not exist. Please go back to the home page.';
            document.getElementById('product-price').innerText = '';
        }
    }
}

/**
 * "Add to Cart" button now opens the modal
 * @param {string} productId - The ID from the 'data-id' attribute
 */
function addToCart(productId) {
    openOrderModal(productId, 'Item Added to Cart');
}

/**
 * "Buy Now" button now opens the modal
 * This function reads the ID stored on the product.html page
 */
function buyNow() {
    const productId = document.body.getAttribute('data-current-product-id');
    if (!productId) {
        console.error('No product ID found on the page.');
        alert('Error: Could not find product. Please try again.');
        return;
    }
    openOrderModal(productId, 'NEW ORDER (Buy Now)');
}

/**
 * Helper function to send the email with all new fields.
 * * 🔔 IMPORTANT 🔔
 * You MUST update your EmailJS template to include these new variables:
 * {{delivery_location}}, {{delivery_charge}}, {{total_price}}, 
 * {{payment_method}}, {{bkash_trx_id}}
 */
function sendEmail(templateParams) {
    console.log("Sending email with params:", templateParams);

    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS is not loaded.');
        alert('Email service is not available. Please try again later.');
        return;
    }

    // Check if credentials are placeholders
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID_HERE' || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID_HERE' || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
        alert('EmailJS is not configured. Please add your credentials to assets/js/ecommerce.js');
        return;
    }

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function(response) {
            console.log('EmailJS SUCCESS!', response.status, response.text);
            if (templateParams.action.includes('NEW ORDER')) {
                alert(`Order for ${templateParams.product_name} placed successfully! We will contact you shortly.`);
            } else {
                alert(`${templateParams.product_name} added to cart! We have your details.`);
            }
        }, function(error) {
            console.log('EmailJS FAILED...', error);
            alert('There was an error sending your request. Please try again.');
        });
}

// --- Event Listeners ---
(function() {
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    } else {
        console.error('EmailJS script not loaded');
    }

    // Event Listeners for Modal
    if (orderModal) {
        // 1. Close button
        modalCloseBtn.addEventListener('click', closeOrderModal);

        // 2. Update price on delivery change
        deliveryInsideRadio.addEventListener('change', updateTotalPrice);
        deliveryOutsideRadio.addEventListener('change', updateTotalPrice);

        // 3. Toggle Bkash fields on payment change
        paymentCodRadio.addEventListener('change', toggleBkashFields);
        paymentBkashRadio.addEventListener('change', toggleBkashFields);

        // 4. Submit form
        modalForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop form from reloading page

            // Get product data
            const productId = modalProductIdField.value;
            const product = products[productId];

            // Get all form values
            const action = modalActionField.value;
            const name = modalNameField.value;
            const mobile = modalMobileField.value;
            const location = modalLocationField.value;
            const size = modalSizeField.value;

            // Get delivery data
            const deliveryLocation = deliveryInsideRadio.checked ? "Inside Dhaka" : "Outside Dhaka";
            const deliveryCharge = deliveryInsideRadio.checked ? 80 : 140;

            // Get price data
            const basePrice = parsePrice(product.price);
            const totalPrice = basePrice + deliveryCharge;

            // Get payment data
            const paymentMethod = paymentCodRadio.checked ? "Cash on Delivery" : "Bkash";
            const bkashTrxId = (paymentMethod === "Bkash") ? bkashTrxIdField.value : "N/A";

            // Create the full image URL
            const fullImageUrl = window.location.origin + '/' + product.img;

            // 🔔 IMPORTANT 🔔
            // These variable names MUST match your EmailJS template
            const templateParams = {
                action: action,
                product_name: product.name,
                product_price: `৳${basePrice}`,
                product_image_link: fullImageUrl,
                buyer_name: name,
                buyer_mobile: mobile,
                buyer_location: location,
                buyer_size: size,
                delivery_location: deliveryLocation,
                delivery_charge: `৳${deliveryCharge}`,
                total_price: `৳${totalPrice}`,
                payment_method: paymentMethod,
                bkash_trx_id: bkashTrxId
            };

            // Send the email with all the data
            sendEmail(templateParams);

            // Close the modal
            closeOrderModal();
        });
    }

    // Run this on page load to set up product.html if we are on it
    if (document.getElementById('product-title')) {
        loadProductDetails();
    }
})();