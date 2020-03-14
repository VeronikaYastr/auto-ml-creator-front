import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
    },
    pos: {
        marginBottom: 12,
    },
    icon: {
        color: '#2EA155'
    },
    createdBy: {
        fontSize: 12,
        fontStyle: 'italic',
        flexGrow: 1,
        textAlign: "end",
        paddingTop: 6
    }
});

export default function ModelCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.card.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.card.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <PlayCircleOutlineIcon className={classes.icon}/>
                <Button size="small">RUN</Button>
                <Typography className={classes.createdBy} color="textSecondary" gutterBottom>
                    {props.card.createdAt} by {props.card.user.username}
                </Typography>
            </CardActions>
        </Card>
    )
}