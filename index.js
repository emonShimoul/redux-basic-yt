// defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

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

const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: 'shimul' }

    }
};
// DECREMENT COUNTER


/*
1. state
2. dispatch action
3. reducer
4. store
*/