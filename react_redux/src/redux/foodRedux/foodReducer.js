import { BUY_FOOD } from './foodActionTypes';

const initialState = { numFoodPackets: 10 };
export function foodReducer(state = initialState, action) {
    switch (action.type) {
        case BUY_FOOD: return {
            ...state,
            numFoodPackets: state.numFoodPackets - 1
        }
        default: return state;
    }
}