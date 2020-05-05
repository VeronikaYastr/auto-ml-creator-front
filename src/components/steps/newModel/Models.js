import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from "@material-ui/core/styles";
import StagesContainer from "../../../containers/StagesContainer";
import {useHistory} from 'react-router-dom';
import {grey} from "@material-ui/core/colors";
import DoneIcon from '@material-ui/icons/Done';
import Fab from "@material-ui/core/Fab";
import classificationModels from "../../../static/models/classification/classificationInfo";
import regressionModels from "../../../static/models/regression/regressionInfo";

const useStyles = makeStyles(theme => ({
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        '& > *': {
            margin: theme.spacing(1),
        },
        paddingLeft: 45,
    },
    button: {
        right: 30,
        bottom: 20,
        position: "fixed"
    },
    selectedButtonText: {
        fontWeight: 700,
    },
    buttonText: {
        fontWeight: 300,
        color: grey[500]
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Models() {
    const classes = useStyles();
    const history = useHistory();
    const [selectedGroup, setSelectedGroup] = React.useState(0);

    const getContent = () => {
        switch (selectedGroup) {
            case 0:
                return <StagesContainer cards={classificationModels}/>;
            case 1:
                return <StagesContainer cards={regressionModels}/>;
            default:
                return <div>Default</div>;
        }
    };

    const onClickExtractors = () => {
        setSelectedGroup(0);
    };

    const onClickText = () => {
        setSelectedGroup(1);
    };

    const onClickColumnTransformers = () => {
        setSelectedGroup(2);
    };

    const onClickCategoricalEncoding = () => {
        setSelectedGroup(3);
    };

    const sendStages = () => {
        let category = selectedGroup === 0 ? "classification" : "regression";
        localStorage.setItem("selectedModelType", JSON.stringify(category));
        history.push('/addValidationAndScore');
        /* let stages = JSON.parse(localStorage.getItem("stages"));
         const datasetId = JSON.parse(localStorage.getItem("selectedDataset")).id;
         if (stages === null || stages === undefined) {
             stages = [];
         }
         new ApiService().loadStages(datasetId, stages)
             .then((response) => {
                 if (response === undefined) {
                     console.log("Undefined response.");
                 } else if (response.error || response.errors) {
                     console.log("Error request.");
                 } else {
                     console.log("Successful request.");
                     history.push('/savePipeline');
                 }
             }).catch((error) => {
             console.log("Unexpected error: " + error);
         });*/
    };

    return (
        <div className={classes.root}>
            <div className={classes.buttonContainer}>
                <ButtonGroup variant="text" aria-label="Select stages">
                    <Button className={selectedGroup === 0 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 0 ? "primary" : "secondary"}
                            onClick={onClickExtractors}>Классификация</Button>
                    <Button className={selectedGroup === 1 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 1 ? "primary" : "secondary"}
                            onClick={onClickText}>Регрессия</Button>
                </ButtonGroup>
            </div>
            {getContent()}
            <Fab color="primary" aria-label="add" className={classes.button} onClick={sendStages}>
                <DoneIcon/>
            </Fab>
        </div>
    );
}