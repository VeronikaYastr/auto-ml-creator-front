import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from "@material-ui/core/styles";
import normalizationStages from "../../../static/stagesInfo";
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

    const getContent = () => {
        switch (selectedGroup) {
            case 0:
                return <StagesContainer cards={normalizationStages}/>;
            case 1:
                return <TreeComponent/>;
            default:
                return <div>Default</div>;
        }
    };

    const onClickExtractors = () => {
        setSelectedGroup(0);
    };

    const onClickText = () => {
        setSelectedGroup(1);
    };

    const onClickColumnTransformers = () => {
        setSelectedGroup(2);
    };

    const onClickCategoricalEncoding = () => {
        setSelectedGroup(3);
    };

    return (
        <div className={classes.root}>
            <div className={classes.buttonContainer}>
                <ButtonGroup variant="text" aria-label="Select stages">
                    <Button className={selectedGroup === 0 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 0 ? "primary" : "secondary"}
                            onClick={onClickExtractors}>Extractors</Button>
                    <Button className={selectedGroup === 1 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 1 ? "primary" : "secondary"}
                            onClick={onClickText}>Text
                        transformers</Button>
                    <Button className={selectedGroup === 2 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 2 ? "primary" : "textSecondary"}
                            onClick={onClickColumnTransformers}>Columns transformers</Button>
                    <Button className={selectedGroup === 3 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 3 ? "primary" : "textSecondary"}
                            onClick={onClickCategoricalEncoding}>Categorical
                        encoding</Button>
                </ButtonGroup>
            </div>
            {getContent()}
        </div>
    );
}