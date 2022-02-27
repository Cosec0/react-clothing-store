import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cart: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN:
            return { ...state, hidden: !state.hidden }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cart: addItemToCart(state.cart, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cart: removeItemFromCart(state.cart, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        default: 
            return state;
    }
}

export default cartReducer;