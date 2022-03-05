import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
} from './checkout.styles';

import { selectCartItems, selectCartTotalCost } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const Checkout = ({ cartItems, totalCost }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} cartItem={item}/>
                ))
            }
            <WarningContainer>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
            </WarningContainer>
            <TotalContainer>
                <span>TOTAL: ₹{totalCost}</span>
            </TotalContainer>

            <StripeCheckoutButton price={totalCost} />
        </CheckoutPageContainer>
    )   
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalCost: selectCartTotalCost
})

export default connect(mapStateToProps)(Checkout);