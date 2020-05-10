import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link as RouterLink} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";
import "../index.css";
import PipelinesContainer from "./PipelinesContainer";
import {ApiService} from "../api/ApiService";

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    spinnerStyle: {
        flex: 1,
        marginTop: theme.spacing(10),
        textAlign: "center"
    },
    button: {
        right: 30,
        bottom: 20,
        position: "fixed"
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        padding: theme.spacing(2),
        color: '#575757',
        fontFamily: 'Muli',
        fontStyle: "bold"
    },
}));

const Pipelines = () => {
    const classes = useStyles();
    const [pipelines, setPipelines] = useState([]);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
         new ApiService().getAllPipelinesForUser(1)
             .then((response) => {
                 if (response === undefined || response.errors) {
                     console.log("Received error from server.");
                     setPipelines([]);
                 } else
                     setPipelines(response);
                 setLoading(false);
             }).catch((error) => {
             console.log("Unexpected error.");
             setLoading(false);
         });
     }, []);

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title} color="inherit">
                Пайплайны
            </Typography>
            {loading ? <div className={classes.spinnerStyle}><CircularProgress/></div> : pipelines &&
                <PipelinesContainer cards={pipelines}/>}
            <Fab color="primary" aria-label="add" className={classes.button} component={RouterLink} to="/chooseDataset">
                <AddIcon/>
            </Fab>
        </div>
    );
};

export default Pipelines;