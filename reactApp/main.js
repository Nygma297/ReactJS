import React from 'react'

import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import app from './App.jsx'
import todoApp from './reducers/reducers'

let store=createstore(todoApp)
let root=document.getElementById('app')
render(
    <Provider store ={store}>
        <App />
    </Provider>,
    root
)