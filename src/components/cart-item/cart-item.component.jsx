import React from 'react';

import {
    CartItemContainer,
    ItemDetailsContainer,
    CartItemImage
} from './cart-item.styles';

const CartItem = ({ item }) => {
    const { imageUrl, price, name, quantity } = item;
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt='item' />
            <ItemDetailsContainer>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} X ₹{price}
                </span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem