import './collection-item.styles.scss';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = (props) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${props.item.imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{props.item.name}</span>
            <span className='price'>{props.item.price}</span>
        </div>
        <CustomButton inverted onClick={() => props.addItem(props.item)}>Add to Cart</CustomButton>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);