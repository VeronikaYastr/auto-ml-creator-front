import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ModelsContainer from "./ModelsContainer";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link as RouterLink} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";
import "../index.css";
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

const Projects = () => {
    const classes = useStyles();
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true); //TODO: true

     useEffect(() => {
         new ApiService().getAllModelsForUser(1)
             .then((response) => {
                 if (response === undefined || response.errors) {
                     console.log("Received error from server.");
                     setModels([]);
                 } else
                     setModels(response);
                 setLoading(false);
             }).catch((error) => {
             console.log("Unexpected error.");
             setLoading(false);
         });
     }, []);

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title} color="inherit">
                Projects
            </Typography>
            {loading ? <div className={classes.spinnerStyle}><CircularProgress/></div> : models &&
                <ModelsContainer cards={models}/>}
            <Fab color="primary" aria-label="add" className={classes.button} component={RouterLink} to="/addProject">
                <AddIcon/>
            </Fab>
        </div>
    );
};

export default Projects;