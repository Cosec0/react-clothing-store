import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cart
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item) => total += item.quantity, 0)
);

export const selectCartTotalCost = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item) => total += (item.quantity * item.price), 0)
);