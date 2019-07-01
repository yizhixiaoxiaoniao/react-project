import { compose, applyMiddleware, createStore } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import rootReducer from '../modules/rootReducer'

const enhancer = compose(
    applyMiddleware(ThunkMiddleware),
)

export default function configureStore(inistalState) {
    return createStore(rootReducer, inistalState, enhancer)
}