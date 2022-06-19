import './styles/main.scss';
import hide from './modules/switch.js'
import loadProducts from './modules/productHTML.js';
import {products, onCartTrue } from './modules/products.js';
import loadCart from './modules/cartHTML.js';
import { cart, updateCart } from './modules/cart.js';

if(localStorage.local) {
  onCartTrue(localStorage.local)  
  updateCart()
  loadCart(cart);
}


hide();

loadProducts(products);
