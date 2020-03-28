import React, {Component} from 'react';
import {Redirect, Route, withRouter} from "react-router-dom";

import Projects from "./Projects"
import Workspace from "./Workspace";
import Datasets from "./Datasets";
import Pipelines from "./Pipelines";

class Navigator extends Component {
    render() {
        const {history} = this.props;

        return (
            <div className="Navigator">
                <Route history={history} path='/home' component={Projects}/>
                <Route history={history} path='/addDataset' component={Workspace}/>
                <Route history={history} path='/addProject' component={Workspace}/>
                <Route history={history} path='/addPipeline' component={Workspace}/>
                <Route history={history} path='/pipelines' component={Pipelines}/>
                <Route history={history} path='/datasets' component={Datasets}/>
                <Redirect from='/' to='/home'/>
            </div>
        );
    }
}

export default withRouter(Navigator)