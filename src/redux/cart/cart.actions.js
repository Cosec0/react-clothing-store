import CartActionTypes from "./cart.types";

export const toggleCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})