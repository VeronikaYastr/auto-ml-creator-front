import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import {Link as RouterLink} from "react-router-dom";
import CircularSlider from '@fseehawer/react-circular-slider';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
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
        width: 250,
        marginLeft: 17,
    },
    uploadButton: {
        marginLeft: 100,
        width: 100,
        fontFamily: 'Raleway',
    },
}));

export default function Results() {
    const classes = useStyles();
    const [score, setScore] = React.useState('');

    useEffect(() => {
        let score = JSON.parse(localStorage.getItem("selectedScore"));
        setScore(score);
    }, []);

    return (
        <div className={classes.root}>
            <CircularSlider
                label={score}
                labelColor="#880620"
                labelFontSize={24}
                min={0}
                max={100}
                progressColorFrom="#750b87"
                progressColorTo="#42074c"
                progressSize={24}
                hideKnob={true}
                trackColor="#eeeeee"
                trackSize={24}
                dataIndex={82}
            />
            <Fab color="primary" aria-label="add" className={classes.button} component={RouterLink} to="/home">
                <DoneIcon/>
            </Fab>
        </div>
    );
}