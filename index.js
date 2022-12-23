// defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// state
const initialCounterState = {
    count: 0
}

const initialUsersState = {
    users: [
        { name: 'emon' }
    ]
}

// action - Object - type, payload
const incrementCounterAction = () => {
    return {
        type: INCREMENT,

    }
};
const decrementCounterAction = () => {
    return {
        type: DECREMENT,

    }
};
// DECREMENT COUNTER