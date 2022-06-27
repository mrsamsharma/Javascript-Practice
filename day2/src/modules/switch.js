import {shopBtn, cartBtn, productsWrapper, cardWrapper} from './elementVariables.js';

export default () => {
  shopBtn.addEventListener('click', () => {
    cardWrapper.style.display = 'none';
    productsWrapper.style.display = 'flex';
  });
  
  cartBtn.addEventListener('click', () => {
    cardWrapper.style.display = 'flex';
    productsWrapper.style.display = 'none';
  });
};