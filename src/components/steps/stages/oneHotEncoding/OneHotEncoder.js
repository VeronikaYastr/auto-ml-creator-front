import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Input from "@material-ui/core/Input";
import {functions} from "../../../../static/stagesFunctions";

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
    input: {
        width: 250,
        marginLeft: 17,
    },
    checkBox: {
        marginLeft: 5,
    },
}));

export default function OneHotEncoder() {
    const classes = useStyles();
    const [outputColumn, setOutputColumn] = React.useState('');
    const [selectedColumn, setSelectedColumn] = React.useState('');
    const [handleInvalid, setHandleInvalid] = React.useState('');
    const columns = functions.getColumns();

    const handleChangeMultiple = event => {
        localStorage.setItem("ohe_inputColumn", event.target.value);
        setSelectedColumn(event.target.value);
    };

    const handleChangeOutputColumn = (event) => {
        localStorage.setItem("ohe_outputColumn", event.target.value);
        setOutputColumn(event.target.value);
    };

    const handleChangeHandleInvalid = (event) => {
        localStorage.setItem("ohe_handleInvalid", event.target.value);
        setHandleInvalid(event.target.value);
    };

    return (
        <div className={classes.formsContainer}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label">Входная переменная</InputLabel>
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
                    <MenuItem value={"error"}>Выдать ошибку</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}