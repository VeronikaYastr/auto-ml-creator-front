import React from 'react'
import ReactDOM from 'react-dom'
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

import { Router } from "react-router-dom"
import {createBrowserHistory} from 'history'

import Navigator from './containers/Navigator'
import MenuComponent from "./containers/MenuComponent";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#B574BF',
            main: '#760B87',
        },
        secondary: {
            main: '#890620',
        },
        success: {
            main: '#2EA155',
        }
    },
});

// создаём кастомную историю
const history = createBrowserHistory();

ReactDOM.render((
    <ThemeProvider theme={theme}>
        <MenuComponent/>
        <Router history={history}>
            <Navigator/>
        </Router>
    </ThemeProvider>
    ), document.getElementById('root')
);