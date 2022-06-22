import './styles/main.scss';
import hide from './modules/switch.js'
import loadProducts from './modules/productHTML.js';
import {products, onCartTrue } from './modules/products.js';
import loadCart from './modules/cartHTML.js';
import { cart, updateCart } from './modules/cart.js';

if(localStorage.local) {
  let parsedLocal = JSON.parse(localStorage.local);
  parsedLocal.forEach((each) => {
    if (each.onCart) {
      onCartTrue(each.id, products);
    }
    else if (!each.onCart){
      document.querySelector('.card-container').innerHTML =  `<span class="message">The cart is empty! :(</span>`;
    }
  });
  updateCart(products);
  loadCart(cart);
}

hide();

loadProducts(products);