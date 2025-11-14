# Valid By Vogue - E-commerce Website 

This is a responsive e-commerce website for "Valid By Vogue," a modern online store specializing in burqas and modest fashion. The site is built using HTML, CSS (SASS), and vanilla JavaScript, with a focus on a clean user interface and a functional shopping experience.

It is developed using the **Mobile First** methodology, ensuring it is fully responsive and compatible with all mobile devices, as well as tablets and desktops.

## Key Features

* **Responsive Design:** Adapts seamlessly to all screen sizes, from small mobile phones to large desktops.
* **Dark/Light Mode:** Includes a theme toggle for user preference.
* **Product Showcase:** Features multiple sections for products:
    * Featured Products
    * All Products
    * New Arrivals (using Swiper.js carousel)
* **Product Details Page:** Users can click on any product to navigate to a dedicated details page.
* **Testimonials:** A testimonial slider built with Swiper.js.
* **Functional Order Modal:** A pop-up modal for placing orders directly from the "BUY NOW" buttons.
* **Dynamic Price Calculation:** The order modal automatically calculates the total price based on:
    * Base product price
    * Delivery charge (৳80 for Inside Dhaka, ৳140 for Outside Dhaka)
* **Payment Integration:**
    * **Cash on Delivery (COD)** option.
    * **Bkash** payment option, which conditionally shows an input field for the Transaction ID.
* **Order Submission:** Uses **EmailJS** to send all order details (customer info, product, pricing, and payment details) directly to the store owner's email.
* **Smooth Scrolling:** Easy navigation with active link highlighting for the current section.

## Technologies Used

* **HTML5**
* **CSS3 (SASS):** Used for structured and maintainable styling.
* **JavaScript (ES6+):** For all client-side logic, including:
    * Menu and cart toggles
    * Dark mode theme
    * Order modal logic
    * Dynamic price calculation
    * Bkash/COD field visibility
* **Swiper.js:** For responsive touch-friendly sliders (New Arrivals, Testimonials).
* **Boxicons:** For icons.
* **EmailJS:** For handling the form submission and sending order details via email.