import { foodReducer } from './foodRedux/foodReducer';
import { waterReducer } from './waterReducer/waterReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ foodReducer, waterReducer });
