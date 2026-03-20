import { getData, saveData } from "../storage/storage.js";

export const addToCart = (event) => {
    const cart = getData("cart");

    cart.push(event);

    saveData("cart", cart);
};

export const getCart = () => {
    return getData("cart");
};

export const clearCart = () => {
    saveData("cart", []);
};