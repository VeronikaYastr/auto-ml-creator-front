import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {ApiService} from "../../../api/ApiService";
import Fab from "@material-ui/core/Fab";
import {Link as RouterLink} from "react-router-dom";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
}));

export default function ChooseDataset() {
    const classes = useStyles();
    const [dataset, setDataset] = React.useState([]);
    const [selectedDataset, setSelectedDataset] = React.useState('');

    const handleChangeDataset = (event) => {
        setSelectedDataset(event.target.value);
        localStorage.setItem("selectedDataset", JSON.stringify(event.target.value));
    };

    useEffect(() => {
        new ApiService().getAllDatasetsForUser(1)
            .then((response) => {
                if (response === undefined || response.errors) {
                    console.log("Received error from server.");
                    setDataset([]);
                } else {
                    setDataset(response);
                }
            }).catch((error) => {
            console.log("Unexpected error.");
        });
    }, []);

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Выберите набор данных</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={selectedDataset.name}
                    onChange={handleChangeDataset}
                >
                    {dataset.map(d => <MenuItem value={d}>{d.name}</MenuItem>)}
                </Select>
            </FormControl>
            <Fab color="primary" aria-label="add" className={classes.button} component={RouterLink} to="/addPipeline">
                <NavigateNextIcon/>
            </Fab>
        </div>
    );
}