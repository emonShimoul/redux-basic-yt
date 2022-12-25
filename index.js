// async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware - redux-thunk
// axios api

// constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";

// states
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null,
};

// actions
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST,
    };
};
const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    };
};
const getTodosFailure = (error) => {
    return {
        type: GET_TODOS_FAILURE,
        payload: error
    };
};

// reduces

// store