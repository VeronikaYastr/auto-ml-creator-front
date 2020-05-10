import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UploadData from "../steps/newDataset/UploadData";
import MissingValues from "../steps/newDataset/MissingValues";
import Outliers from "../steps/newDataset/Outliers";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabsContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
}));

let enabledTab = -1;

const tabs = [
    [
        <Tab disabled={0 <= enabledTab} label="Загрузка" {...a11yProps(0)} />,
        <Tab disabled={1 <= enabledTab} label="Очистка" {...a11yProps(1)} />,
        <Tab disabled={2 <= enabledTab} label="Преобразование" {...a11yProps(2)} />,
        <Tab disabled={3 <= enabledTab} label="Очистка от выбросов" {...a11yProps(3)} />
    ],
    [
        <Tab label="Выбрать" {...a11yProps(0)} />,
        <Tab label="Заполнить параметры" {...a11yProps(1)} />
    ]
];

const tabsContent = [[<UploadData/>, <MissingValues/>, <Outliers/>, <Outliers/>], [<UploadData/>]];

export default function MLTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        if (newValue >= enabledTab) {
            enabledTab = newValue;
            setValue(newValue);
        }
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                {tabs[props.index]}
            </Tabs>
            <div className={classes.tabsContent}>
                <TabPanel value={value} index={0}>
                    {tabsContent[props.index][0]}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {tabsContent[props.index][1]}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {tabsContent[props.index][2]}
                </TabPanel>
                <TabPanel value={value} index={3}>
                    {tabsContent[props.index][3]}
                </TabPanel>
            </div>
        </div>
    );
}