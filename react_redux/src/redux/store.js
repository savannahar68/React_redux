import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
