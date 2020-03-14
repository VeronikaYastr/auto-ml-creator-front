import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MLStepper from "../components/MLStepper";
import ScrollArea from "react-scrollbar";
import MLTabs from "../components/MLTabs";
import DoneIcon from '@material-ui/icons/Done';
import {green} from '@material-ui/core/colors';
import Fab from "@material-ui/core/Fab";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        padding: theme.spacing(2),
        color: '#575757'
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

const Workspace = () => {
    const classes = useStyles();
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);

    /*useEffect(() => {
        new ApiService().getAllModelsForUser(1)
            .then((response) => {
                if (response === undefined || response.error) {
                    console.log("Received error from server.");
                    setModels([]);
                } else
                    setModels(response);
                setLoading(false);
            }).catch((error) => {
            console.log("Unexpected error.");
            setLoading(false);
        });
    }, []);*/

    return (
        <ScrollArea speed={0.2} smoothScrolling={true}>
            <div className={classes.root}>
                <Typography variant="h4" className={classes.title} color="inherit">
                    Workspace
                </Typography>
                <MLTabs/>
                <MLStepper/>
                {/*<Fab aria-label="add" className={classes.saveButton} component={RouterLink} to="/add">
                    <DoneIcon style={{color: '#FFFFFF'}}/>
                </Fab>*/}
            </div>
        </ScrollArea>
    );
};

export default Workspace