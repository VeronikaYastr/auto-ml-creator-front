import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';

const useStyles = makeStyles({
    root: {
        width: 275,
        height: 260,
        marginLeft: 20
    },
    cardTitle: {
        display: "flex",
        flexDirection: "row",
    },
    title: {
        fontSize: 20,
        paddingLeft: 10,
        marginTop: -5,
        fontFamily: 'Muli',
        fontStyle: "bold"
    },
    body: {
        fontSize: 16,
        fontFamily: 'Raleway'
    },
    pos: {
        marginBottom: 12,
    },
    icon: {
        color: '#2EA155'
    },
});

export default function InfoCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.cardTitle}>
                    <HelpOutlinedIcon color="primary"/>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.card.title}
                    </Typography>
                </div>
                <Typography variant="body2" className={classes.body} component="p">
                    {props.card.description}
                </Typography>
            </CardContent>
        </Card>
    )
}