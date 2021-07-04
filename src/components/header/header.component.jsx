import { Link } from 'react-router-dom';
import './header.styles.scss';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, cartIcon }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
            }
            <CartIcon />
        </div>
        {
            cartIcon ? null : <CartDropdown/>
        }
    </div>
);

function mapStateToProps(state) {
    return {
        currentUser: state.user.currentUser,
        cartIcon: state.cart.hidden
    }
}

export default connect(mapStateToProps)(Header);