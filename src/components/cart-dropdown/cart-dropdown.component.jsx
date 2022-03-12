import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
} from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useNavigate } from 'react-router-dom';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCurrentUser } from '../../redux/user/user.selector';

const CartDropdown = ({ cartItems, currentUser, dispatch }) => {
    const navigate = useNavigate();

    if(!currentUser) {
        return (
            <CartDropdownContainer>
                <CartItemsContainer>
                    <EmptyMessageContainer>Sign in/Sign up to add to your cart</EmptyMessageContainer>
                </CartItemsContainer>
                <CartDropdownButton onClick={() => {
                    navigate('/signin');
                    dispatch(toggleCartDropdown());
                }}>SIGN IN/SIGN UP</CartDropdownButton>
            </CartDropdownContainer>
        )
    }

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                    cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem}/>) :
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={() => {
                navigate('/checkout');
                dispatch(toggleCartDropdown());
            }}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(CartDropdown);