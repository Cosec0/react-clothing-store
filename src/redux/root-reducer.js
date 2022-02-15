import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    users: userReducer,
    cart: cartReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
}

export default persistReducer(persistConfig, rootReducer);