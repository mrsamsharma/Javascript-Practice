import './styles/main.scss';
import hide from './modules/switch.js'
import loadProducts from './modules/productHTML.js';
import { products } from './modules/products.js';

hide();

loadProducts(products);
