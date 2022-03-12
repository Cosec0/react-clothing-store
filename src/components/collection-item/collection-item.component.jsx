import React from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

// import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { selectCurrentUser } from '../../redux/user/user.selector';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage
} from './collection-item.styles';

const CollectionItem = ({ item, addItem, currentUser }) => {
    const { name, price, imageUrl } = item;
    const navigate = useNavigate();

    const addItemToCart = (item) => {
        if(currentUser) {
            addItem(item)
        }
        else {
            alert('Please sign in or sign up to be able to add in cart');
            navigate('/signin');
        }
    }

    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <span>{name}</span>
                <span>₹{price}</span>
            </CollectionFooterContainer>
            <AddButton 
                inverted 
                onClick={() => addItemToCart(item)}
            >
                    Add to Cart
            </AddButton>
        </CollectionItemContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);