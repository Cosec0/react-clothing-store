import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.component.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, cartIconHidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                }
                <CartIcon/>
            </div>
            {
                cartIconHidden ? null : <CartDropdown/>
            } 
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.users.currentUser,
    cartIconHidden: state.cart.hidden
})


export default connect(mapStateToProps)(Header);