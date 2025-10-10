let productSection = document.querySelector('#productSection');


const productCart = [
    {
        brandName: "Apple",
        name: "Apple iPhone 16 (Black, 128 Gb)",
        image: "./images/iphone1.webp",
        finalRating: 4.6,
        ratings: 136634,
        reviews: 4114,
        price: 104900,
        realPrice:109900, 
        discountPercentage: 5,
        exchangeOfferPrice: 48650,
        features: [
            "128 GB ROM",
            "15.49 cm (6.1 inch) Super Retina XDR Display",
            "48MP + 12MP | 12MP Front Camera",
            "A18 Chip, 6 Core Processor Processor",
            "1 year warranty for phone and 1 year warranty for in Box Accessories"
        ] 
    },
    {
        brandName: "Google",
        name: "Google Pixel 10 Pro XL (Obsidian, 256)",
        image: "./images/pixel 10 pro xl.webp",
        finalRating: 4.8,
        ratings: 70,
        reviews: 8,
        price: 200000,
        realPrice: 210000,
        discountPercentage:4,
        exchangeOfferPrice: 48650,
        features: [
            "16 GB RAM",
            "17.27 cm (6.8 inch) Quad HD+ Display",
            "48MP + 48MP + 48MP | 42MP Front Camera",
            "5200 mAh Battery",
            "Tensor G5 Processor",
            "1 year Domestic warranty "
        ] 
    }
]

productCart.forEach((product) => {
    productSection.innerHTML += `<div class="product">
                        <div class="product-details-section">
                            <div class="product-image">
                                <div class="product-main-img">
                                    <img src="${product.image}" alt="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="N1bADF" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#C2C2C2" class="x1UMqG" stroke="#FFFFFF" fill-rule="evenodd" opacity=".9"></path></svg>
                                </div>
                                <div class="add-to-compare-main">
                                    <input type="checkbox" id="addToCompare" class="add-to-compater">
                                    <label for="addToCompare">Add to compare</label>
                                </div>
                            </div>
                            <div class="product-details">
                                <div class="product-name">
                                    ${product.name}
                                </div>
                                <div class="product-ratings-reviews">
                                    <div class="product-rating">
                                        <span>${product.finalRating}</span>
                                        <img src="logos/star.svg" alt="">
                                    </div>
                                    <div class="product-review">
                                        <span>${product.ratings} Ratings & ${product.reviews} Reviews</span>
                                    </div>
                                </div>
                                <div class="product-features">
                                    <ul>
                                        <li>128 GB ROM</li>
                                        <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                                        <li>48MP + 12MP | 12MP Front Camera</li>
                                        <li>A18 Chip, 6 Core Processor Processor</li>
                                        <li>1 year warrant for phone and 1 year warranty for in Box Accessories.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="product-price-section">
                            <div class="product-price">
                                <span>₹${product.price}</span>
                                <img src="logos/assured.png" alt="">
                            </div>
                            <div class="product-discount">
                                <span>₹${product.realPrice}</span>
                                <span>${product.discountPercentage}% off</span>
                            </div>
                            <div class="products-left">
                                Only 1 left
                            </div>
                            <div class="product-exchange-offer">
                                Upto <strong>₹${product.exchangeOfferPrice}</strong> off on Exchange
                            </div>
                        </div>
                    </div>`
});

