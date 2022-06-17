import { cart } from "./cart.js";
import { onCartFalse } from "./products.js";
import { updateCart } from "./cart.js";
import { products } from "./products.js";

export default function loadCartProducts(arr) {
  arr.forEach((each) => {
    const productContainer = document.createElement('div');
    productContainer.className = 'product-container';
    const productImg = document.createElement('img');
    productImg.setAttribute('alt', each.imgAlt);
    productImg.setAttribute('class', each.imgClass);
    productImg.setAttribute('src', each.imgSrc);
    productContainer.appendChild(productImg);
    const productInfo = document.createElement('div');
    productInfo.className = 'product-info';
    const title = document.createElement('h2');
    title.textContent = each.title;
    productInfo.appendChild(title);
    const description = document.createElement('p');
    description.textContent = each.description;
    productInfo.appendChild(description);
    const price = document.createElement('span');
    price.textContent = each.price;
    productInfo.appendChild(price);
    const onCartBtn = document.createElement('button');
    onCartBtn.textContent = 'Remove from Cart';
    onCartBtn.setAttribute('id', each.id);
    onCartBtn.addEventListener('click', (e) => {
     onCartFalse(e.target.id, cart);
     e.target.parentElement.parentElement.remove();
    });
    productInfo.appendChild(onCartBtn);
    productContainer.appendChild(productInfo);
    document.querySelector('.card-container').appendChild(productContainer);
  });
}