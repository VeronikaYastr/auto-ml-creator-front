import React from 'react'
import ReactDOM from 'react-dom'

import { Router } from "react-router-dom"
import {createBrowserHistory} from 'history'

import Navigator from './containers/Navigator'

// создаём кастомную историю
const history = createBrowserHistory();

ReactDOM.render((
        <Router history={history}>
            <Navigator/>
        </Router>
    ), document.getElementById('root')
);