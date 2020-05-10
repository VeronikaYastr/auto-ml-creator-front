import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Input from "@material-ui/core/Input";
import {functions} from "../../../../static/stagesFunctions";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
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

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function VectorAssembler() {
    const classes = useStyles();
    const theme = useTheme();
    const [outputColumn, setOutputColumn] = React.useState('');
    const [selectedColumns, setSelectedColumns] = React.useState([]);
    const [handleInvalid, setHandleInvalid] = React.useState('');
    const columns = functions.getColumns();

    const handleChangeMultiple = event => {
        localStorage.setItem("vectAss_inputColumns", JSON.stringify(event.target.value));
        setSelectedColumns(event.target.value);
    };

    const handleChangeOutputColumn = (event) => {
        localStorage.setItem("vectAss_outputColumn", JSON.stringify(event.target.value));
        setOutputColumn(event.target.value);
    };

    const handleChangeHandleInvalid = (event) => {
        localStorage.setItem("vectAss_handleInvalid", event.target.value);
        setHandleInvalid(event.target.value);
    };

    return (
        <div className={classes.formsContainer}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label">Входные переменные</InputLabel>
                <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
                    value={selectedColumns}
                    onChange={handleChangeMultiple}
                    input={<Input id="select-multiple-chip"/>}
                    MenuProps={MenuProps}
                >
                    {columns.map(columnName => (
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
            <Tooltip title="Название полученного столбца">
                <TextField placeholder="Выходная переменная"
                           required
                           className={classes.input}
                           onChange={handleChangeOutputColumn}
                           id="multiline-input-with-icon-grid"/>
            </Tooltip>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-handle-invalid">Обработка неверных значений</InputLabel>
                <Select
                    labelId="demo-simple-select-handle-invalid-label"
                    id="simple-select-handle-invalid-label"
                    value={handleInvalid}
                    onChange={handleChangeHandleInvalid}
                >
                    <MenuItem value={"keep"}>Оставить</MenuItem>
                    <MenuItem value={"skip"}>Пропустить</MenuItem>
                    <MenuItem value={"error"}>Выдать ошибку</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}