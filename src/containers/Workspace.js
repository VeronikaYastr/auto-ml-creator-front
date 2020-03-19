import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MLStepper from "../components/workspace/MLStepper";
import ScrollArea from "react-scrollbar";
import {green} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        marginLeft: 60,
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

const Workspace = () => {
    const classes = useStyles();
    const s = 0;
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
                <MLStepper/>
                {/*<Fab aria-label="add" className={classes.saveButton} component={RouterLink} to="/add">
                    <DoneIcon style={{color: '#FFFFFF'}}/>
                </Fab>*/}
            </div>
        </ScrollArea>
    );
};

export default Workspace