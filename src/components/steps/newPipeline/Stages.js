import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from "@material-ui/core/styles";
import normalizationStages from "../../../static/stagesInfo";
import StagesContainer from "../../../containers/StagesContainer";
import {useHistory} from 'react-router-dom';
import {grey} from "@material-ui/core/colors";
import DoneIcon from '@material-ui/icons/Done';
import Fab from "@material-ui/core/Fab";
import {ApiService} from "../../../api/ApiService";

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

export default function Stages() {
    const classes = useStyles();
    const history = useHistory();
    const [selectedGroup, setSelectedGroup] = React.useState(0);

    const getContent = () => {
        switch (selectedGroup) {
            case 0:
            case 1:
            case 2:
                return <StagesContainer cards={normalizationStages}/>;
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
        let stages = JSON.parse(localStorage.getItem("stages"));
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
        });
    };

    return (
        <div className={classes.root}>
            <div className={classes.buttonContainer}>
                <ButtonGroup variant="text" aria-label="Select stages">
                    <Button className={selectedGroup === 0 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 0 ? "primary" : "secondary"}
                            onClick={onClickExtractors}>Extractors</Button>
                    <Button className={selectedGroup === 1 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 1 ? "primary" : "secondary"}
                            onClick={onClickText}>Text
                        transformers</Button>
                    <Button className={selectedGroup === 2 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 2 ? "primary" : "textSecondary"}
                            onClick={onClickColumnTransformers}>Columns transformers</Button>
                    <Button className={selectedGroup === 3 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 3 ? "primary" : "textSecondary"}
                            onClick={onClickCategoricalEncoding}>Categorical
                        encoding</Button>
                </ButtonGroup>
            </div>
            {getContent()}
            <Fab color="primary" aria-label="add" className={classes.button} onClick={sendStages}>
                <DoneIcon/>
            </Fab>
        </div>
    );
}