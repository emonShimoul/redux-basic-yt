// async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware - redux-thunk
// axios api

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

// constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// states
const initialTodoStates = {
    todos: [],
    isLoading: false,
    error: null,
}

// actions
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
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

// reducers
const todosReducer = (state = initialTodoStates, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
            }
        case GET_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            break;
    }
}

// async action creator
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL, {
            headers: { "Accept-Encoding": "gzip,deflate,compress" }
        })
            .then(res => {
                const todos = res.data;
                const titles = todos.map(todo => todo.title);
                dispatch(getTodosSuccess(titles));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(getTodosFailure(errorMessage));
            })
    }
}

// store
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchData());