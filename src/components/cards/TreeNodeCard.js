import React from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/core/styles";
import {blueGrey, deepOrange} from '@material-ui/core/colors';
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 200,
        minHeight: 50,
        borderRadius: 10,
    },
    cardTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 700,
        textAlign: "center",
        marginTop: '0.5em'
    },
    body: {
        fontSize: 16,
        fontFamily: 'Raleway'
    },
    icon: {
        color: blueGrey[200],
        fontSize: 30
    },
    selectedIcon: {
        color: '#2EA155',
        fontSize: 30
    },
    chipContainer: {
        display: 'flex',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    chip: {
        fontSize: 12,
        margin: 15
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
}));

export default function TreeNodeCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.chipContainer}>
                <Chip size="small" variant="outlined" color="secondary" className={classes.chip}
                      label={props.card.type}/>
            </div>
            <Divider/>
            <Typography className={classes.title} gutterBottom>
                {props.card.title}
            </Typography>
        </Card>
        /* <Card className={classes.root}>
             <BrandCardHeader
                 image={image}
                 extra={
                     <Chip size="small" variant="outlined" color="secondary" className={classes.chip} label={props.card.type}/>
                 }
             />
             <Typography className={classes.title} gutterBottom>
                 {props.card.title}
             </Typography>
         </Card>*/
    );
}