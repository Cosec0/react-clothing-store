import './cart-item.styles.scss';

const CartItem = ({ item: { id, imageUrl, price, name, quantity } }) => (
    <div className='cart-item' key={id}>
        <img src={imageUrl} alt='item' />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} X {price}</span>
        </div>
    </div>
)

export default CartItem;