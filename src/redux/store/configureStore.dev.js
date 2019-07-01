import { compose, applyMiddleware, createStore } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import DevTools from '../devTools/devtools'
import rootReducer from '../modules/rootReducer'

const enhancer = compose(
    applyMiddleware(ThunkMiddleware),
    DevTools.instrument()
)

export default function configureStore(inistalState) {
    return createStore(rootReducer, inistalState, enhancer)
}