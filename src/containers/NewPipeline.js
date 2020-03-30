import React from 'react';
import Stages from "../components/steps/newPipeline/Stages";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
        paddingTop: 50
    },
}));

export default function NewPipeline() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Stages/>
        </div>
    );
}