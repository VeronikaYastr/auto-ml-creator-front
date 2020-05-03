import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Input from "@material-ui/core/Input";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
    input: {
        width: 250,
        marginLeft: 17,
    },
    checkBox: {
        marginLeft: 5,
    },
}));

export default function StandardScaler() {
    const classes = useStyles();
    const [outputColumn, setOutputColumn] = React.useState('');
    const [selectedColumn, setSelectedColumn] = React.useState([]);
    const [withMean, setWithMean] = React.useState(false);
    const [withStd, setWithStd] = React.useState(false);
    const columns = JSON.parse(localStorage.getItem("selectedDataset")).columns;

    const handleChangeMultiple = event => {
        localStorage.setItem("inputColumn", event.target.value);
        setSelectedColumn(event.target.value);
    };

    const handleChangeOutputColumn = (event) => {
        localStorage.setItem("outputColumn", event.target.value);
        setOutputColumn(event.target.value);
    };

    const handleChangeWithMean = (event) => {
        localStorage.setItem("withMean", event.target.checked);
        setWithMean(event.target.checked);
    };

    const handleChangeWithStd = (event) => {
        localStorage.setItem("withStd", event.target.checked);
        setWithStd(event.target.checked);
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
            <FormControlLabel
                className={classes.checkBox}
                control={
                    <Tooltip title="Centers the data with mean before scaling.">
                        <Checkbox
                            checked={withMean}
                            onChange={handleChangeWithMean}
                            name="withMean"
                            color="primary"
                        />
                    </Tooltip>
                }
                label="With mean"
            />
            <FormControlLabel
                className={classes.checkBox}
                control={
                    <Tooltip title="Scales the data to unit standard deviation.">
                        <Checkbox
                            checked={withStd}
                            onChange={handleChangeWithStd}
                            name="withStd"
                            color="primary"
                        />
                    </Tooltip>
                }
                label="With standard deviation"
            />
        </div>
    );
}