import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import router from './router'
import configureStore from './redux/store/store'
import DevTools from './redux/devTools/devtools'

const store = configureStore()

ReactDom.render(
    <Provider store={store}>
        <div style={{ width: '100%', height: '100%' }}>
            {router}
            {process.env.NODE_ENV === 'development' ? <DevTools /> : null}
        </div>
    </Provider>,
    document.getElementById('root')
)