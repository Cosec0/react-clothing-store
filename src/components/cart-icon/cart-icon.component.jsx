import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartDropdown, itemsCount }) => (
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{ itemsCount }</span>
    </div>
)

const mapStateToProps = (state) => ({
    itemsCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (disptach) => ({
    toggleCartDropdown: () => disptach(toggleCartDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);