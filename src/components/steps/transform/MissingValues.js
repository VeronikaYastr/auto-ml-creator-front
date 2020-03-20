import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import titles from "../../../static/text";
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InfoCard from "../../cards/InfoCard";
import {ApiService} from "../../../api/ApiService";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import Button from "@material-ui/core/Button";
import {findIndex, strategies} from "../../../static/nullValuesStrategies";

const useStyles = makeStyles(theme => ({
    buttonContainer: {
        flex: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginRight: 100,
        height: 400
    },
    formsContainer: {
        flex: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        marginRight: 100,
    },
    formControl: {
        margin: theme.spacing(2),
        width: 250,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 350,
    },
    chip: {
        margin: 2,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginRight: 100,
    },
    input: {
        width: 250,
        marginLeft: 17,
    },
    uploadButton: {
        marginLeft: 280,
        width: 100,
        fontFamily: 'Raleway',
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const strategiesMessage = [
    titles.dropAnyStrategy,
    titles.dropAllStrategy,
    titles.minNonNullStrategy,
    titles.fillWithMedianStrategy,
    titles.fillWithMeanStrategy,
    titles.fillWithValueStrategy
];

export default function MissingValues() {
    const classes = useStyles();
    const theme = useTheme();
    const [strategy, setStrategy] = React.useState(strategies.NONE);
    const [selectedColumns, setSelectedColumns] = React.useState([]);
    const [strategyMessage, setStrategyMessage] = React.useState(titles.missingValuesTitle);
    const [allColumnsSelected, setAllColumnsSelected] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [fillValue, setFillValue] = React.useState(null);
    const [minNonValue, setMinNonValue] = React.useState(null);
    const [errorOpen, setErrorOpen] = React.useState(false);
    const columns = JSON.parse(localStorage.getItem("columns"));

    const handleChangeMultiple = event => {
        if (event.target.value.indexOf("All") > -1) {
            setAllColumnsSelected(!allColumnsSelected);
            console.log("All" + allColumnsSelected);
        } else {
            setAllColumnsSelected(false);
        }
        setSelectedColumns(event.target.value);
    };

    const handleMinNonValueChange = event => {
        setMinNonValue(event.target.value);
    };

    const handleCustomValueChange = event => {
        setFillValue(event.target.value);
    };

    const handleChange = event => {
        setStrategy(findIndex(event.target.value));
        try {
            setStrategyMessage(strategiesMessage[event.target.value]);
        } catch (e) {
            setStrategyMessage("Error");
        }
    };

    const handleClose = (event, reason) => {
        setOpen(false);
    };

    const handleErrorClose = (event, reason) => {
        setErrorOpen(false);
    };

    const sendToServer = () => {
        const datasetId = localStorage.getItem("datasetId");
        let selectedCols = selectedColumns;
        if (allColumnsSelected) {
            selectedCols = columns;
        }

        new ApiService().nullValues(strategy, datasetId, selectedCols, minNonValue, fillValue)
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
                    setMessage(response + " rows were dropped.");
                    setOpen(true);
                    setStrategy(strategies.NONE);
                    setAllColumnsSelected(false);
                    setSelectedColumns([]);
                    setStrategyMessage(titles.missingValuesTitle);
                }
            }).catch((error) => {
            console.log("Unexpected error: " + error);
            setMessage("Unexpected error.");
            setErrorOpen(true);
        });
    };

    return (
        <div className={classes.root}>
            <div className={classes.buttonContainer}>
                <div className={classes.formsContainer}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-chip-label">Columns</InputLabel>
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={selectedColumns}
                            onChange={handleChangeMultiple}
                            input={<Input id="select-multiple-chip"/>}
                            MenuProps={MenuProps}
                        >
                            <MenuItem key="all" value="All"
                                      style={getStyles("All", selectedColumns, theme)}>
                                All
                            </MenuItem>
                            {!allColumnsSelected &&
                            columns.map(columnName => (
                                <MenuItem key={columnName} value={columnName}
                                          style={getStyles(columnName, selectedColumns, theme)}>
                                    {columnName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {selectedColumns &&
                    <div className={classes.chips}>
                        {selectedColumns.map(value => (
                            <Chip key={value} label={value} className={classes.chip}/>))}
                    </div>}
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">Strategy</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={strategy}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Drop any</MenuItem>
                            <MenuItem value={1}>Drop all</MenuItem>
                            <MenuItem value={2}>Drop by minNonNull</MenuItem>
                            <MenuItem value={3}>Fill with median</MenuItem>
                            <MenuItem value={4}>Fill with mean</MenuItem>
                            <MenuItem value={5}>Fill with custom value</MenuItem>
                        </Select>
                    </FormControl>
                    {(strategy === strategies.DROP.MIN_NON_NULL) &&
                    <TextField onChange={handleMinNonValueChange} className={classes.input} id="outlined-basic"
                               label="MinNonNull"/>}
                    {(strategy === strategies.FILL.CUSTOM_VALUE) &&
                    <TextField onChange={handleCustomValueChange} className={classes.input} id="outlined-basic"
                               label="Custom value"/>}
                </div>
                <Divider style={{maxHeight: 350}} variant="middle" orientation="vertical" flexItem/>
                <InfoCard card={{title: "Missing values", description: strategyMessage}}/>
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
            <Button variant="contained" component="span" color="primary"
                    className={classes.uploadButton}
                    onClick={sendToServer}>
                Apply
            </Button>
        </div>
    );
}