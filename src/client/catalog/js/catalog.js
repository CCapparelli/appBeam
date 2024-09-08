

function showProducts(category) {
    if (category.classList.contains('selectedCategory')) {
        category.classList.remove("selectedCategory");
        category.nextElementSibling.style.display = "none";
        return;
    }
    collapseCategories();
    category.nextElementSibling.style.display = "block";
    category.classList.add("selectedCategory");
}

function collapseCategories() {
    var categories = document.getElementsByClassName("category");
    Array.from(categories).forEach((child) => {
        child.firstElementChild.className = "categoryName";
        child.firstElementChild.nextElementSibling.style.display = "none";
    });
}


