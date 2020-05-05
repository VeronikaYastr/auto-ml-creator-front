import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import {Link as RouterLink} from "react-router-dom";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        display: 'flex',
        paddingTop: 60
    },
    formControl: {
        margin: theme.spacing(2),
        width: 250,
    },
    button: {
        right: 30,
        bottom: 20,
        position: "fixed"
    },
    input: {
        margin: theme.spacing(3),
        width: 300,
        marginLeft: 17,
    },
}));

export default function PipelineSelector() {
    const classes = useStyles();
    const [scores, setScores] = React.useState([]);
    const [validation, setValidation] = React.useState(0);
    const [train, setTrain] = React.useState(70);
    const [selectedScore, setSelectedScore] = React.useState('');

    const handleChangeScore = (event) => {
        setSelectedScore(event.target.value);
        localStorage.setItem("selectedScore", JSON.stringify(event.target.value));
    };

    const handleValidationChange = (event) => {
        setValidation(event.target.value);
        localStorage.setItem("selectedValidation", JSON.stringify(event.target.value));
    };

    const handleSliderChange = (event, newValue) => {
        setTrain(newValue);
        localStorage.setItem("train", JSON.stringify(newValue));
    };

    useEffect(() => {
        let category = JSON.parse(localStorage.getItem("selectedModelType"));
        if (category === "classification") {
            setScores(["F1", "Precision", "R2", "Recall", "WeightedPrecision", "WeightedRecall", "Accuracy"])
        } else if (category === "regression") {
            setScores(["RMSE (root mean squared error)", "MSE (mean squared error)", "R2", "MAE (mean absolute error)"])
        }
    }, []);

    function valuetext(value) {
        return `${value}%`;
    }

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Метод оценки</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={selectedScore}
                    onChange={handleChangeScore}
                >
                    {scores.map(p => <MenuItem value={p}>{p}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Метод валидации</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={validation}
                    onChange={handleValidationChange}
                >
                    <MenuItem value={0}>Кросс-валидация</MenuItem>
                    <MenuItem value={1}>Разделение на тренировочный/тестовый набор</MenuItem>
                </Select>
            </FormControl>
            {/* {(validation === 0) &&
            <TextField onChange={handleMinNonValueChange} className={classes.input} id="outlined-basic"
                       label="MinNonNull"/>}*/}
            {(validation === 1) &&
            <div className={classes.input}>
                <Typography id="discrete-slider" gutterBottom>
                    Тренировочный/тестовый набор
                </Typography>
                <Slider
                    defaultValue={70}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    onChange={handleSliderChange}
                    step={10}
                    marks
                    min={10}
                    max={100}
                />
            </div>}
            <Fab color="primary" aria-label="add" className={classes.button} component={RouterLink} to="/results">
                <NavigateNextIcon/>
            </Fab>
        </div>
    );
}