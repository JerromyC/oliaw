document.addEventListener("DOMContentLoaded", function () {
    fetch("dummy-products.json")
        .then(response => response.json())
        .then(products => {
            const productWrapper = document.querySelector(".shop-section_product-wrapper");
            productWrapper.innerHTML = ""; // Clear existing static HTML

            products.forEach(product => {
                const productHTML = `
                    <div class="tile shop-section_product">
                        <div class="action-wrapper">
                            <img src="./assets/star.gif" title="favorite" alt="Favorite">
                            <img src="./assets/cart.gif" title="add to cart" alt="Add to cart">
                        </div>
                        <img src="${product.images[0]}" alt="${product.title}">
                        <span>$${product.price.toFixed(2)}</span>
                        <p>${product.title}</p>
                        <a href="#" class="button small-button">View Details</a>
                    </div>
                `;
                productWrapper.innerHTML += productHTML;
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});
