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
import InfoCard from "../../cards/InfoCard";

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginRight: 100,
        marginBottom: 100
    },
    formsContainer: {
        flex: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        marginRight: 100,
        marginBottom: 100
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
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

const strategies = [
    titles.dropAnyStrategy,
    titles.dropAllStrategy,
    titles.minNonNullStrategy,
    titles.fillWithMedianStrategy,
    titles.fillWithMeanStrategy,
    titles.fillWithValueStrategy
];

export default function MissingValue() {
    const classes = useStyles();
    const theme = useTheme();
    const [strategy, setStrategy] = React.useState('');
    const [selectedColumns, setSelectedColumns] = React.useState([]);
    const [strategyMessage, setStrategyMessage] = React.useState(titles.missingValuesTitle);
    const [allColumnsSelected, setAllColumnsSelected] = React.useState(false);
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

    const handleChange = event => {
        setStrategy(event.target.value);
        try {
            setStrategyMessage(strategies[event.target.value]);
        } catch (e) {
            setStrategyMessage("Error");
        }
    };

    return (
        <div className={classes.root}>
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
            </div>
            <Divider variant="middle" orientation="vertical" flexItem/>
            <InfoCard card={{title: "Missing values", description: strategyMessage}}/>
        </div>
    );
}