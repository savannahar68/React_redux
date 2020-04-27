const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger()


const BUY_FOOD = 'BUY_FOOD';
const BUY_WATER = 'BUY_WATER';
// Action

// {
//     type: BUY_FOOD
// }

// Action Creator

function buyFood() {
    return {
        type: BUY_FOOD
    }
}

function buyWater() {
    return {
        type: BUY_WATER
    }
}

const initialFoodPackets = { numFoodPacket: 10 }
const initialWaterBottles = { numWaterBottle: 10 }

const foodReducer = (prevState = initialFoodPackets, action) => {
    switch (action.type) {
        case BUY_FOOD: return {
            ...prevState,
            numFoodPacket: prevState.numFoodPacket - 1
        }
        default: return prevState;
    }
}

const waterReducer = (prevState = initialWaterBottles, action) => {
    switch (action.type) {
        case BUY_WATER: return {
            ...prevState,
            numWaterBottle: prevState.numWaterBottle - 1
        }
        default: return prevState;
    }
}

const rootReducer = combineReducers({
    food: foodReducer,
    water: waterReducer
})

//Redux store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State : ", store.getState());
store.subscribe(() => { });
store.dispatch(buyFood())
store.dispatch(buyFood())
store.dispatch(buyFood())
store.dispatch(buyWater())
store.dispatch(buyWater())