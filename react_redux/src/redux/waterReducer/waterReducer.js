import { BUY_WATER } from './waterActionTypes';

const initialState = { numberWaterBottles: 20 };
export function waterReducer(state = initialState, action) {
    switch (action.type) {
        case BUY_WATER: return {
            ...state,
            numberWaterBottles: state.numberWaterBottles - 1
        }
        default: return state;
    }
}