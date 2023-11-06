import { writable, get } from 'svelte/store';

export const cartItems = writable([]);

export const addToCart = (product) => {
    let items = get(cartItems);

    cartItems.update(() => {
        return [...items, { ...product, quantity: 1 }]
    });
}

export const removeFromCart = (index) => {
    let items = get(cartItems);
    let result = [...items];
    result.splice(index, 1);

    cartItems.update(() => {
        return result;
    });
}
