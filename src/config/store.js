import { createStore, combineReducers } from 'redux'

import carrinhoReducer from '../features/carrinho/reducer'


const rootReducer = combineReducers({
    carrinho: carrinhoReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
