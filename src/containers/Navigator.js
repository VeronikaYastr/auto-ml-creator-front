import React, {Component} from 'react';
import {Redirect, Route, withRouter} from "react-router-dom";

import Projects from "./Projects"
import Datasets from "./Datasets";
import Pipelines from "./Pipelines";
import NewDataset from "./NewDataset";
import NewPipeline from "./NewPipeline";
import SavePipeline from "../components/steps/newPipeline/SavePipeline";
import DatasetSelector from "../components/steps/newPipeline/DatasetSelector";
import PipelineSelector from "../components/steps/newModel/PipelineSelector";
import Models from "../components/steps/newModel/Models";
import ValidatingAndScoring from "../components/steps/newModel/ValidatingAndScoring";
import Results from "../components/steps/newModel/Results";
import UploadPredictionsData from "../components/steps/newModel/UploadPredictionsData";

class Navigator extends Component {
    render() {
        const {history} = this.props;

        return (
            <div className="Navigator">
                <Route history={history} path='/home' component={Projects}/>
                <Route history={history} path='/addDataset' component={NewDataset}/>
                <Route history={history} path='/addProject' component={PipelineSelector}/>
                <Route history={history} path='/selectModel' component={Models}/>
                <Route history={history} path='/runModel' component={UploadPredictionsData}/>
                <Route history={history} path='/addValidationAndScore' component={ValidatingAndScoring}/>
                <Route history={history} path='/results' component={Results}/>
               {/* <Route history={history} path='/saveProject' component={SavePipeline}/>*/}
                <Route history={history} path='/chooseDataset' component={DatasetSelector}/>
                <Route history={history} path='/addPipeline' component={NewPipeline}/>
                <Route history={history} path='/savePipeline' component={SavePipeline}/>
                <Route history={history} path='/pipelines' component={Pipelines}/>
                <Route history={history} path='/datasets' component={Datasets}/>
                <Redirect from='/' to='/home'/>
            </div>
        );
    }
}

export default withRouter(Navigator)