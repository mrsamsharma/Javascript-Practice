import { products } from "./products.js";

export let cart = [];

export const updateCart = (arr) => {
 cart = arr.filter((each) => each.onCart === true);
};