const redux = require('redux');
const createStore = redux.createStore;
const BUY_FOOD = 'BUY_FOOD'

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

var initialState = {
    numFoodPacket: 10
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case BUY_FOOD: return {
            ...prevState,
            numFoodPacket: prevState.numFoodPacket - 1
        }
        default: return prevState;
    }
}

//Redux store
const store = createStore(reducer);
console.log("Initial State : ", store.getState());
store.subscribe(() => { console.log("Updated state : ", store.getState()) });
store.dispatch(buyFood())
store.dispatch(buyFood())
store.dispatch(buyFood())