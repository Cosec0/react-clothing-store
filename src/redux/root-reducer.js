import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    users: userReducer
});