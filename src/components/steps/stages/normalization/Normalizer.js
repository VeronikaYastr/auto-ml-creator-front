import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Input from "@material-ui/core/Input";

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
        margin: theme.spacing(2)
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
}));

export default function Normalizer() {
    const classes = useStyles();
    const [outputColumn, setOutputColumn] = React.useState('');
    const [selectedColumn, setSelectedColumn] = React.useState([]);
    const [norm, setNorm] = React.useState('');
    const columns = JSON.parse(localStorage.getItem("selectedDataset")).columns;

    const handleChangeMultiple = event => {
        localStorage.setItem("inputColumn", event.target.value);
        setSelectedColumn(event.target.value);
    };

    const handleChangeOutputColumn = (event) => {
        localStorage.setItem("outputColumn", event.target.value);
        setOutputColumn(event.target.value);
    };

    const handleChangeNorm = (event) => {
        localStorage.setItem("norm", event.target.value);
        setNorm(event.target.value);
    };

    return (
        <div className={classes.formsContainer}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label">Input column</InputLabel>
                <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    value={selectedColumn}
                    onChange={handleChangeMultiple}
                    input={<Input id="select-multiple-chip"/>}
                >
                    {columns.map(columnName => (
                        <MenuItem key={columnName} value={columnName}>
                            {columnName}
                        </MenuItem>
                    ))
                    }
                </Select>
            </FormControl>
            <Tooltip title="Name of transformed column">
                <TextField placeholder="Output column"
                           required
                           className={classes.input}
                           onChange={handleChangeOutputColumn}
                           id="multiline-input-with-icon-grid"/>
            </Tooltip>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Norm</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={norm}
                    onChange={handleChangeNorm}
                >
                    <MenuItem value={0}>L1 norm</MenuItem>
                    <MenuItem value={1}>L2 norm</MenuItem>
                    <MenuItem value={2}>L-infinity norm</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}