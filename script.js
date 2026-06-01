const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product-card");
const filters = document.querySelectorAll(".filter");

function filterProducts() {

    const searchValue =
    searchInput.value.toLowerCase();

    const selectedCategories =
    Array.from(filters)
    .filter(filter => filter.checked)
    .map(filter => filter.value);

    products.forEach(product => {

        const name =
        product.querySelector("h3")
        .textContent
        .toLowerCase();

        const category =
        product.dataset.category;

        const matchesSearch =
        name.includes(searchValue);

        const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(category);

        if(matchesSearch && matchesCategory){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }

    });
}

if(searchInput){

    searchInput.addEventListener(
    "keyup",
    filterProducts
    );

    filters.forEach(filter => {

        filter.addEventListener(
        "change",
        filterProducts
        );

    });
}