import { combineReducers } from 'redux'
import page1Redux from './demo/page1'
import page2Redux from './demo/page2'
import page3Redux from './demo/page3'
import page4Redux from './demo/page4'

const rootReducer = combineReducers({
    page1Redux,
    page2Redux,
    page3Redux,
    page4Redux
})

export default rootReducer
