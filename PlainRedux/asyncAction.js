const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
// inital reducer state
const initalState = {
    loading: false,
    users: [],
    error: '',
}

//action types
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users,
    }
}

const fetchUserFailuer = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}


//REUCER

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state;
    }
}

const fetchUsers = () => {
    console.log("Called")
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data)
                dispatch(fetchUserSuccess(res.data.map(user => user.name)));
            })
            .catch(err => {
                dispatch(fetchUserFailuer(err));
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())
