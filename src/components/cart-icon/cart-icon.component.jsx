import React from 'react';
import { connect } from 'react-redux';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCartDropdown, itemsCount }) => (
    <CartContainer onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCountContainer>{ itemsCount }</ItemCountContainer>
    </CartContainer>
)

const mapStateToProps = (state) => ({
    itemsCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (disptach) => ({
    toggleCartDropdown: () => disptach(toggleCartDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);