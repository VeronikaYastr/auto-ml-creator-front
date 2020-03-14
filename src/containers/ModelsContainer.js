import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import ModelCard from "../components/ModelCard";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        marginLeft: theme.spacing(5)
    }
}));

function ModelsContainer(props) {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(4);

    return (
        <div className={classes.root}>
            <Grid container justify="flex-start" spacing={spacing}>
                {props.cards.map(card => (
                    <Grid key={card.id} item>
                        <ModelCard card={card}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ModelsContainer;
