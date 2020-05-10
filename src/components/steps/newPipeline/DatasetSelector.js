import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {ApiService} from "../../../api/ApiService";
import Fab from "@material-ui/core/Fab";
import {Link as RouterLink, useHistory} from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'column',
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

export default function DatasetSelector() {
    const classes = useStyles();
    const history = useHistory();
    const [dataset, setDataset] = React.useState([]);
    const [selectedDataset, setSelectedDataset] = React.useState('');
    const [pipeline, setPipeline] = React.useState([]);
    const [selectedPipeline, setSelectedPipeline] = React.useState('');

    const handleChangeDataset = (event) => {
        setSelectedDataset(event.target.value);
        localStorage.setItem("selectedDataset", JSON.stringify(event.target.value));
    };

    const handleChangePipeline = (event) => {
        setSelectedPipeline(event.target.value);
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
        new ApiService().getAllPipelinesForUser(1)
            .then((response) => {
                if (response === undefined || response.errors) {
                    console.log("Ошибка от сервера.");
                    setPipeline([]);
                } else {
                    setPipeline(response);
                }
            }).catch((error) => {
            console.log("Ошибка.");
        });
    }, []);

    const sendToServer = () => {
        const datasetId = selectedDataset.id;
        const pipelineId = selectedPipeline.id;
        new ApiService().bindPipeline(datasetId, pipelineId)
            .then((response) => {
                console.log("Successful request.");
                localStorage.removeItem("selectedDataset");
                history.push('/pipelines');
            }).catch((error) => {
            console.log("Unexpected error: " + error);
        });
    };

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
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Выбрать из существующих</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={selectedPipeline.name}
                    onChange={handleChangePipeline}
                >
                    {pipeline.map(d => <MenuItem value={d}>{d.name}</MenuItem>)}
                </Select>
            </FormControl>
            {selectedPipeline ? <Fab color="primary" aria-label="add" className={classes.button} onClick={sendToServer}>
                    <DoneIcon/>
                </Fab> :
                <Fab color="primary" aria-label="add" className={classes.button} component={RouterLink}
                     to="/addPipeline">
                    <NavigateNextIcon/>
                </Fab>}
        </div>
    );
}