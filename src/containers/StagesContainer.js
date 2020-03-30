import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ScrollArea from "react-scrollbar";
import StageCard from "../components/cards/StageCard";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        marginLeft: theme.spacing(5)
    }
}));

function StagesContainer(props) {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(4);

    return (
        <ScrollArea speed={0.2} smoothScrolling={true}>
            <div className={classes.root}>
                <Grid container justify="flex-start" spacing={spacing}>
                    {props.cards.map(card => (
                        <Grid key={card.id} item>
                            <StageCard onCancelClick={card.dialog.onCancelClick} onSaveClick={card.dialog.onSaveClick}
                                       dialogTitle={card.dialog.title} dialogContentText={card.dialog.contentText}
                                       dialogContent={card.dialog.content} card={card}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </ScrollArea>
    )
}

export default StagesContainer;
