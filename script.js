document.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelector('.products');
    async function fetchProducts(url) {
        let data = await fetch(url);
            let response = await data.json();
            //console.log(response);
            for (let i = 0; i < response.length; i++){
                products.innerHTML += ` <div class="products">
<img src="${response[i].image}" alt="" class="product-img">
<h2 class="product-title">${response[i].title}</h2>
<h4 class="product-category">${response[i].category}</h4>
<p class="product-description">${response[i].description}</p>
<div class="product-price-container">

<h3 class="product-price">${response[i].price}</h3>
<a href="#!" data-productId="" class="add-to-cart"></a>
</div>`

            }


    };
    fetchProducts('https://fakestoreapi.com/products');
});