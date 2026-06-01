Nostra E-Commerce Website – Project Explanation

The Nostra E-Commerce Website is a frontend web development project designed to practice HTML, CSS, and JavaScript while building a modern, responsive shopping website. The project consists of three main pages and includes product search and filter functionality.

Project Objective

The goal of this project is to create a responsive e-commerce website where users can:

Browse products on the Home page.
View all products on the Collections page.
Search products instantly.
Filter products based on categories.
Contact the store using a Contact Us form.
Access the website seamlessly on desktop, tablet, and mobile devices.
Technologies Used
HTML

Used to create the structure of the website.

Examples:

Navigation Bar
Product Cards
Contact Form
Footer
CSS

Used for styling and responsiveness.

Examples:

Layout Design
Product Grid
Mobile Responsive Design
Hover Effects
Colors and Typography
JavaScript

Used to add interactivity.

Examples:

Product Search
Product Filtering
Menu Toggle (optional)
Dynamic User Interactions
Project Structure
Nostra/
│
├── index.html
├── collections.html
├── contact.html
├── style.css
└── script.js
Page 1: Home Page (index.html)

The Home page acts as the landing page of the website.

Sections Included
1. Navbar

Contains navigation links:

Home
Collections
Contact

Purpose:

Helps users move between pages.
2. Hero Section

Large banner with:

Level Up Your Style
Explore Our Latest Collection

Purpose:

Attract user attention.
Promote products.
3. Features Section

Displays advantages such as:

Free Shipping
Premium Quality
24/7 Support

Purpose:

Build trust with customers.
4. New Arrivals Section

Displays recently added products.

Example:

Casual Shirt
Hoodie
Jacket

Purpose:

Showcase featured products.
5. Footer

Contains:

Copyright Information
Social Links
Contact Information

Purpose:

Website ending section.
Page 2: Collections Page (collections.html)

This is the most important page because it contains the assignment functionalities.

Product Listing

Products are displayed using cards.

Example:

<div class="product-card">
    <img src="">
    <h3>Men Hoodie</h3>
    <p>₹1299</p>
</div>

Each card contains:

Product Image
Product Name
Price
Search Functionality

Users can search products using a search bar.

Example:

<input type="text" id="search">
How Search Works

JavaScript listens for typing events.

searchInput.addEventListener("keyup", filterProducts);

When the user types:

hoodie

JavaScript checks every product name.

If product name contains:

hoodie

The product remains visible.

Otherwise:

product.style.display = "none";

The product is hidden.

Search Flow
User Types
      ↓
JavaScript Reads Input
      ↓
Compare With Product Names
      ↓
Show Matching Products
      ↓
Hide Others
Filter Functionality

Users can filter products based on category.

Example:

Men
Women
Kids

using checkboxes.

<input type="checkbox" value="Men">
Product Category Storage

Each product contains:

data-category="Men"

Example:

<div class="product-card"
data-category="Men">
How Filter Works

JavaScript gets all checked categories.

const selectedCategories =
Array.from(filters)
.filter(filter => filter.checked)
.map(filter => filter.value);

Example:

If user selects:

Men
Women

Then:

["Men", "Women"]

is stored.

Filtering Logic

JavaScript checks:

selectedCategories.includes(category)

If category exists:

display:block

Else:

display:none
Filter Flow
User Selects Category
         ↓
Read Checkbox Values
         ↓
Compare Product Category
         ↓
Show Matching Products
         ↓
Hide Remaining Products
Combined Search + Filter

The best part of the project is that both features work together.

Example:

Search:

hoodie

Filter:

Men

Result:

Only Men's Hoodies

are displayed.

Page 3: Contact Us Page (contact.html)

Contains a contact form.

Fields:

Name
Email
Message

Example:

<form>

<input type="text">

<input type="email">

<textarea></textarea>

<button>Send</button>

</form>

Purpose:

Allows customers to communicate with the store.

Responsive Design

The website should work on:

Desktop
Large Screens

Products shown in multiple columns.

Tablet
Medium Screens

Products adjust automatically.

Mobile
Small Screens

Navigation stacks vertically.

Single-column product display.

Implemented using:

@media(max-width:768px)
JavaScript Workflow
Page Loads
    ↓
Get Products
    ↓
Get Search Input
    ↓
Get Filter Checkboxes
    ↓
User Types/Searches
    ↓
User Selects Filter
    ↓
Run filterProducts()
    ↓
Display Matching Products
Learning Outcomes

By completing this project, you will learn:

HTML
Semantic Tags
Forms
Navigation
Product Cards
CSS
Flexbox
Grid Layout
Responsive Design
Media Queries
Hover Effects
JavaScript
DOM Manipulation
Event Listeners
Search Functionality
Filtering Logic
Arrays and Loops
Expected Final Result

A modern fashion e-commerce website similar to the Nostra reference website that includes:

✅ Responsive Design

✅ Home Page

✅ Collections Page

✅ Contact Page

✅ Product Search

✅ Category Filter

✅ Mobile Friendly Layout

✅ Clean UI/UX

✅ Pure HTML, CSS, and JavaScript

This project is commonly used as a beginner-to-intermediate frontend project because it combines layout design, responsiveness, DOM manipulation, and real-world e-commerce functionality in a single application.
