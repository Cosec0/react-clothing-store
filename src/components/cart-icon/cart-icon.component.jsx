import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

function CartIcon(props) {
    return (
        <div className="cart-icon" onClick={() => props.toggleCart()}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{props.itemCount}</span>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce((count, item) => count + item.quantity, 0)
})

const mapDispatchToProps = (dispatch) => ({
    toggleCart: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
