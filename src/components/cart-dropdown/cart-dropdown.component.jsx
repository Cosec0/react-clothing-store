import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
} from './cart-dropdown.styles';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useNavigate } from 'react-router-dom';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, dispatch }) => {
    const navigate = useNavigate();

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
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);