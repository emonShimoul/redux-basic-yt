// state - count:0
// action - increment, decrement, reset
// reducer
// store

// CONSTANTS
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const initialState = {
    count: 0
}

const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    }
}

const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    }
}

const resetCounterAction = () => {
    return {
        type: RESET,
    }
}