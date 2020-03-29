import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MLStepper from "../components/workspace/MLStepper";
import ScrollArea from "react-scrollbar";
import {green} from '@material-ui/core/colors';
import UploadData from "../components/steps/transform/UploadData";
import MissingValues from "../components/steps/transform/MissingValues";
import Outliers from "../components/steps/transform/Outliers";
import SaveDataset from "../components/steps/transform/SaveDataset";

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 60
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        marginRight: 90,
        padding: theme.spacing(2),
        color: '#575757',
        fontFamily: 'Muli',
        fontStyle: "bold"
    },
    saveButton: {
        right: 30,
        bottom: 20,
        position: "fixed",
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
    stepper: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 50
    }
}));

const NewDataset = () => {
    const classes = useStyles();

    const getStepContent = (activeStep) => {
        switch (activeStep) {
            case 0:
                return <UploadData/>;
            case 1:
                return <MissingValues/>;
            case 2:
                return <Outliers/>;
            case 3:
                return <SaveDataset/>;
            default:
                return <div>Error</div>;
        }
    };

    return (
        <ScrollArea speed={0.2} smoothScrolling={true}>
            <div className={classes.root}>
                <MLStepper getStepContent={getStepContent} steps={["Upload", "Missing values", "Outliers", "Save"]}/>
            </div>
        </ScrollArea>
    );
};

export default NewDataset;