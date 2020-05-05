import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import TitleIcon from '@material-ui/icons/Title';
import {useHistory} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import ShortTextIcon from '@material-ui/icons/ShortText';
import datasetImage from "../../../static/images/pipeline-save.jpg";
import {ApiService} from "../../../api/ApiService";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert/Alert";

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 60,
        display: 'flex',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "start",
        alignItems: "start",
        paddingTop: 60,
        marginBottom: 20,
        marginLeft: 80
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10
    },
    image: {
        marginRight: 20
    },
    uploadButton: {
        textAlign: 'end',
        width: 200,
        marginLeft: 27
    },
    input: {
        marginBottom: 40
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SavePipeline() {
    const classes = useStyles();
    const history = useHistory();
    const [description, setDescription] = React.useState('');
    const [message, setMessage] = React.useState("");
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [name, setName] = React.useState('');

    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    };

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleErrorClose = (event, reason) => {
        setErrorOpen(false);
    };

    const sendToServer = () => {
        const datasetId = JSON.parse(localStorage.getItem("selectedDataset")).id;
        new ApiService().createPipeline(1, datasetId, name, description)
            .then((response) => {
                if (response === undefined) {
                    setMessage("No response from server.");
                    setErrorOpen(true);
                } else if (response.error || response.errors) {
                    console.log("Received error from server.");
                    setMessage("Error from server while request: " + response.errors);
                    setErrorOpen(true);
                } else {
                    console.log("Successful request.");
                    history.push('/pipelines');
                }
                localStorage.removeItem("selectedDataset");
            }).catch((error) => {
            console.log("Unexpected error: " + error);
            setMessage("Unexpected error.");
            setErrorOpen(true);
        });
    };

    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <img src={datasetImage} height="320" width="450" alt="SaveDataset"/>
            </div>
            <div className={classes.inputContainer}>
                <Grid container spacing={1} alignItems="flex-end" className={classes.input}>
                    <Grid item>
                        <TitleIcon/>
                    </Grid>
                    <Grid item>
                        <TextField onChange={handleNameChange} required id="input-with-icon-grid" label="Name"/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end" className={classes.input}>
                    <Grid item>
                        <ShortTextIcon/>
                    </Grid>
                    <Grid item>
                        <TextField placeholder="Description"
                                   multiline
                                   required
                                   onChange={handleDescriptionChange}
                                   id="multiline-input-with-icon-grid"/>
                    </Grid>
                </Grid>
                <Button onClick={sendToServer} variant="contained" color="primary" component="span"
                        className={classes.uploadButton}>
                    Save
                </Button>
            </div>
            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                      open={errorOpen}
                      autoHideDuration={3000}
                      onClose={handleErrorClose}>
                <Alert onClose={handleErrorClose}
                       severity={"error"}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}