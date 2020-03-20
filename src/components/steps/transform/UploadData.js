import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import {green, grey} from "@material-ui/core/colors";
import CloudUploadRoundedIcon from '@material-ui/icons/CloudUploadRounded';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Typography from "@material-ui/core/Typography";
import {ApiService} from "../../../api/ApiService";
import DataTable from "./DataTable";
import CircularProgress from "@material-ui/core/CircularProgress";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        marginRight: 100,
        marginBottom: 100
    },
    spinnerStyle: {
        flex: 1,
        marginTop: theme.spacing(10),
        textAlign: "center"
    },
    filesContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginRight: 100,
        marginBottom: 100
    },
    chooseButton: {
        color: '#FFFFFF',
        backgroundColor: grey[600],
        '&:hover': {
            backgroundColor: grey[500],
        },
        width: 200
    },
    uploadButton: {
        color: '#FFFFFF',
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
        width: 200
    },
    icon: {
        fontSize: '200px',
        color: green[600],
    },
    fileIcon: {
        textAlign: 'center',
        fontSize: '120px',
        marginLeft: 30
    },
    title: {
        flexGrow: 1,
        padding: theme.spacing(2),
        color: '#575757'
    },
}));

export default function UploadData() {
    const classes = useStyles();
    const [files, setFiles] = React.useState('');
    const [message, setMessage] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [openTable, setOpenTable] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [rows, setRows] = React.useState([]);
    const [columnNames, setColumnNames] = React.useState([]);

    const handleClose = (event, reason) => {
        setOpen(false);
    };

    const handleErrorClose = (event, reason) => {
        setErrorOpen(false);
    };

    const handleChange = (event) => {
        console.log("Change", files);
        setFiles(event.target.files[0]);
    };

    const uploadFile = (event) => {
        console.log('Upload', files);
        setFiles('1');
        setLoading(true);
        let data = new FormData();
        data.append('file', files);

        new ApiService().uploadFile(data)
            .then((response) => {
                if (response === undefined || response.errors) {
                    console.log("Received error from server.");
                    setMessage("Error from server while uploading " + files.name);
                    setErrorOpen(true);
                } else {
                    console.log("Successfully loaded.");

                    setMessage(files.name + " is successfully loaded on server.");
                    setOpen(true);
                    setOpenTable(true);
                    setColumnNames(response.columnNames);
                    setRows(response.firstLines);

                    localStorage.setItem("datasetId", response.datasetId);
                    localStorage.setItem("columns",JSON.stringify(response.columnNames));
                    console.log(response);
                }
                setLoading(false);
            }).catch((error) => {
            console.log("Unexpected error.");
            setMessage("Error while uploading " + files.name);
            setErrorOpen(true);
            setLoading(false);
        });
    };

    return (
        <div>
            {files ? (openTable ? (<DataTable columnNames={columnNames} rows={rows}/>) : (
                loading ? (<div className={classes.spinnerStyle}><CircularProgress/></div>) :
                    (<div className={classes.root}>
                        <DescriptionOutlinedIcon className={classes.fileIcon} color='primary'/>
                        <Typography variant="h6" className={classes.title} color="inherit">
                            {files.name}
                        </Typography>
                        <div>
                            <Button variant="contained" component="span" className={classes.uploadButton}
                                    onClick={uploadFile}>
                                Upload
                            </Button>
                            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                                      open={errorOpen ? errorOpen : open}
                                      autoHideDuration={3000}
                                      onClose={errorOpen ? handleErrorClose : handleClose}>
                                <Alert onClose={errorOpen ? handleErrorClose : handleClose}
                                       severity={errorOpen ? "error" : "success"}>
                                    {message}
                                </Alert>
                            </Snackbar>
                        </div>
                    </div>))) : (<div className={classes.root}>
                <CloudUploadRoundedIcon className={classes.icon}/>
                <input
                    className={classes.input}
                    style={{display: 'none'}}
                    id="raised-button-file"
                    type="file"
                    onChange={handleChange}
                />
                <label htmlFor="raised-button-file">
                    <Button variant="contained" component="span" className={classes.chooseButton}>
                        Choose file
                    </Button>
                </label>
            </div>)}
        </div>
    )
}