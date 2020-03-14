import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MLStepper from "../components/MLStepper";
import ScrollArea from "react-scrollbar";

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
}));

const Test = () => {
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
                <MLStepper/>
            </div>
        </ScrollArea>
    );
};

export default Test