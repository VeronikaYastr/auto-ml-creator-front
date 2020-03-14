import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";

import App from "./App"
import Test from "./Test";

class Navigator extends Component {
    render() {
        const {history} = this.props;

        return (
            <div className="Navigator">
                <Switch>
                    <Route history={history} path='/home' component={App}/>
                    <Route history={history} path='/add' component={Test}/>
                    <Redirect from='/' to='/home'/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Navigator)