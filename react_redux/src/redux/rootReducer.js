import { foodReducer } from './foodRedux/foodReducer';
import { waterReducer } from './waterReducer/waterReducer';
import { combineReducers } from 'redux';
import { userReducer } from './userRedux/userReducer'

export const rootReducer = combineReducers({ foodReducer, waterReducer, userReducer });
