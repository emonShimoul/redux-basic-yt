const { createStore } = require("redux");

// product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// product states
const initialProductState = {
    products: ["sugar", "salt"],
    numOfProducts: 2
};

// product actions
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    };
};

// productReducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            };
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numOfProducts: state.numOfProducts + 1
            };
        default:
            state;
    }
}

// cartReducer

// store
const store = createStore(productReducer);
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct('pen'));
