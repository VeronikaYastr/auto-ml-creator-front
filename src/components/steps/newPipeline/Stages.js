import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from "@material-ui/core/styles";
import titles from "../../../static/text";
import StagesContainer from "../../../containers/StagesContainer";
import TreeComponent from "./TreeComponent";
import {grey} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        '& > *': {
            margin: theme.spacing(1),
        },
        paddingLeft: 45,
    },
    selectedButtonText: {
        fontWeight: 700,
    },
    buttonText: {
        fontWeight: 300,
        color: grey[500]
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Stages() {
    const classes = useStyles();
    const [selectedGroup, setSelectedGroup] = React.useState(0);
    const normalizationCards = [{
        "title": "Normalizer", "description": titles.normalizerDescription, "dialog": {
            "title": "Normalizer",
            "contentText": "Customize settings for Normalize component.",
            "content": <div>Hi</div>
        }
    },
        {
            "title": "Standard Scaler", "description": titles.normalizerDescription, "dialog": {
                "title": "Standard Scaler",
                "contentText": "Customize settings for Standard Scaler component.",
                "content": <div>Hu</div>
            }
        },
        {
            "title": "Max abs Scaler", "description": titles.normalizerDescription, "dialog": {
                "title": "Max abs Scaler",
                "contentText": "Customize settings for MaxAbsScaler component.",
                "content": <div>Ho</div>
            }
        },
        {
            "title": "Min max Scaler", "description": titles.normalizerDescription, "dialog": {
                "title": "Min max Scaler",
                "contentText": "Customize settings for MinMaxScaler component.",
                "content": <div>Hey</div>
            }
        }];

    const getContent = () => {
        switch (selectedGroup) {
            case 0:
                return <StagesContainer cards={normalizationCards}/>;
            case 1:
                return <TreeComponent/>;
            default:
                return <div>Default</div>;
        }
    };

    const onClickText = () => {
        setSelectedGroup(0);
    };

    const onClickNormalization = () => {
        setSelectedGroup(1);
    };

    const onClickCategoricalEncoding = () => {
        setSelectedGroup(2);
    };

    return (
        <div className={classes.root}>
            <div className={classes.buttonContainer}>
                <ButtonGroup variant="text" aria-label="Select stages">
                    <Button className={selectedGroup === 0 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 0 ? "primary" : "secondary"}
                            onClick={onClickText}>Text
                        transformers</Button>
                    <Button className={selectedGroup === 1 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 1 ? "primary" : "textSecondary"}
                            onClick={onClickNormalization}>Normalization</Button>
                    <Button className={selectedGroup === 2 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 2 ? "primary" : "textSecondary"}
                            onClick={onClickCategoricalEncoding}>Categorical
                        encoding</Button>
                </ButtonGroup>
            </div>
            {getContent()}
        </div>
    );
}