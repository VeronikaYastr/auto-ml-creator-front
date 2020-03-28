import React from 'react'
import ReactDOM from 'react-dom'
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

import {Router} from "react-router-dom"
import {createBrowserHistory} from 'history'

import Navigator from './containers/Navigator'
import MenuComponent from "./containers/MenuComponent";

import "./index.css";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#B574BF',
            main: '#760B87',
        },
        secondary: {
            main: '#890620',
            light: '#892D39'
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
            <Router history={history}>
                <MenuComponent/>
                <Navigator/>
            </Router>
        </ThemeProvider>
    ), document.getElementById('root')
);