import { foodReducer } from './foodRedux/foodReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ foodReducer });
