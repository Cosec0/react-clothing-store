export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingId = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingId) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToAdd.id ? 
            { ...cartItem, quantity: cartItem.quantity + 1 } : 
            cartItem
        ));
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}