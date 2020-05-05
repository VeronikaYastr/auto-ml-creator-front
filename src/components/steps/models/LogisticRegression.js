import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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
        margin: theme.spacing(2),
        marginLeft: 17,
    },
}));

export default function LogisticRegression() {
    const classes = useStyles();
    const [outputColumn, setOutputColumn] = React.useState('');
    const [featuresColumn, setFeaturesColumn] = React.useState('');
    const [regParam, setRegParam] = React.useState('');
    const [maxIter, setMaxIter] = React.useState('');
    const columns = JSON.parse(localStorage.getItem("selectedPipeline")).dataset.columns;

    const handleChangeOutputColumn = (event) => {
        localStorage.setItem("targetColumn", event.target.value);
        setOutputColumn(event.target.value);
    };

    const handleChangeFeaturesColumn = (event) => {
        localStorage.setItem("featuresColumn", event.target.value);
        setFeaturesColumn(event.target.value);
    };

    const handleChangeMaxIter = (event) => {
        localStorage.setItem("maxIter", event.target.value);
        setMaxIter(event.target.value);
    };

    const handleChangeRegParam = (event) => {
        localStorage.setItem("regParam", event.target.value);
        setRegParam(event.target.value);
    };

    return (
        <div className={classes.formsContainer}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label">Целевая переменная</InputLabel>
                <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    value={outputColumn}
                    onChange={handleChangeOutputColumn}
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
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip">Столбец признаков</InputLabel>
                <Select
                    labelId="demo-mutiple-chip"
                    id="demo-mutiple-chip"
                    value={featuresColumn}
                    onChange={handleChangeFeaturesColumn}
                    input={<Input id="select-multiple"/>}
                >
                    {columns.map(columnName => (
                        <MenuItem key={columnName} value={columnName}>
                            {columnName}
                        </MenuItem>
                    ))
                    }
                </Select>
            </FormControl>
            <TextField onChange={handleChangeMaxIter} className={classes.input} id="outlined-basic"
                       label="Макс. кол-во итераций"/>
            <TextField onChange={handleChangeRegParam} className={classes.input} id="outlined-basic"
                       label="Регуляризационный параметр"/>
        </div>
    );
}