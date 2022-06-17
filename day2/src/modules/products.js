import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';

export let products = [
  {
    id: 'a1',
    onCart: false,
    imgClass: 'productImg1',
    imgAlt: 'The Man Company Perfume',
    imgSrc: product1,
    title: 'The Man Company Premium Noir EDT (Eau De Toilette)',
    description: 'Every Party Begins with you',
    price: '$29.99',
  },
  {
    id: 'a2',
    onCart: false,
    imgClass: 'productImg2',
    imgAlt: 'Jaguar Perfume',
    imgSrc: product2,
    title: 'Jaguar Classic Edt 100ml (Eau De Toilette)',
    description: 'Lavender, Musk , Grapefruit, Floral, Wood',
    price: '$19.99',
  },
  {
    id: 'a3',
    onCart: false,
    imgClass: 'productImg3',
    imgAlt: 'Calvin Klien Perfume',
    imgSrc: product3,
    title: 'Calvin Klein Eternity EDT for Men (Eau De Toilette)',
    description: 'A Timeless, Refreshing Masculine Scent',
    price: '$49.99',
  },
  {
    id: 'a4',
    onCart: false,
    imgClass: 'productImg4',
    imgAlt: 'Jaguar Perfume',
    imgSrc: product4,
    title: 'Jaguar For Men Eau de Toilette 100ml',
    description: 'THE PLEASURE OF A DYNAMIC FRAGRANCE EXPERIENCE',
    price: '$39.99',
  },
];

export const onCartTrue = (id, arr) => {
  let selected = arr.filter((select) => select.id === id)[0];
   selected = {...selected, onCart: true};
   arr = arr.filter((x) => x.id !== id);
   arr = [...arr, selected]
   products = arr;
 };

 export const onCartFalse = (id, arr) => {
  let selected = arr.filter((select) => select.id === id)[0];
   selected = {...selected, onCart: false};
   arr = arr.filter((x) => x.id !== id);
   arr = [...arr, selected]
   products = arr;
 };