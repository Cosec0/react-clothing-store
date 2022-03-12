import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartHidden, selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCartDropdown, itemsCount, currentUser, isCartHidden }) => {
    useEffect(() => {
        return !isCartHidden ? toggleCartDropdown() : '';
    }, [])

    return (
        <CartContainer onClick={toggleCartDropdown}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCountContainer>{ currentUser ? itemsCount : '' }</ItemCountContainer>
        </CartContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    itemsCount: selectCartItemsCount,
    currentUser: selectCurrentUser,
    isCartHidden: selectCartHidden
})

const mapDispatchToProps = (disptach) => ({
    toggleCartDropdown: () => disptach(toggleCartDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);