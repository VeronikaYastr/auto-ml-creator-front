import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from "@material-ui/core/styles";
import normalizationStages from "../../../static/normalization/normStagesInfo";
import StagesContainer from "../../../containers/StagesContainer";
import {useHistory} from 'react-router-dom';
import {grey} from "@material-ui/core/colors";
import DoneIcon from '@material-ui/icons/Done';
import Fab from "@material-ui/core/Fab";
import {ApiService} from "../../../api/ApiService";
import Modal from '@material-ui/core/Modal';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import categoricalEncodingStages from "../../../static/categoricalEncoding/catEncStagesInfo";
import Typography from "@material-ui/core/Typography";
import featuresStages from "../../../static/features/featuresInfo";

const useStyles = makeStyles(theme => ({
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        '& > *': {
            margin: theme.spacing(1),
        },
        paddingLeft: 45,
    },
    button: {
        right: 30,
        bottom: 20,
        position: "fixed"
    },
    eyeButton: {
        right: 30,
        bottom: 100,
        position: "fixed"
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
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    title: {
        fontSize: 18,
        fontFamily: 'Muli',
        fontStyle: "bold"
    },
    body: {
        fontSize: 16,
        fontFamily: 'Raleway',
        marginTop: 3
    },
    modalContainer: {
        display: 'flex',
        flexDirection: 'row',
    }
}));

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export default function Stages() {
    const classes = useStyles();
    const history = useHistory();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [selectedGroup, setSelectedGroup] = React.useState(0);

    const getContent = () => {
        switch (selectedGroup) {
            case 0:
                return <StagesContainer cards={featuresStages}/>;
            case 1:
            case 2:
                return <StagesContainer cards={normalizationStages}/>;
            case 3:
                return <StagesContainer cards={categoricalEncodingStages}/>;
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

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sendStages = () => {
        let stages = JSON.parse(localStorage.getItem("stages"));
        const datasetId = JSON.parse(localStorage.getItem("selectedDataset")).id;
        if (stages === null || stages === undefined) {
            stages = [];
        }
        new ApiService().loadStages(datasetId, stages)
            .then((response) => {
                if (response === undefined) {
                    console.log("Undefined response.");
                } else if (response.error || response.errors) {
                    console.log("Error request.");
                } else {
                    console.log("Successful request.");
                    localStorage.removeItem("stages");
                    history.push('/savePipeline');
                }
            }).catch((error) => {
            console.log("Unexpected error: " + error);
        });
    };

    const getStagesInfo = () => {
        let stages = JSON.parse(localStorage.getItem("stages"));
        if (stages === null || stages === undefined || stages.length === 0) {
            return <h3 id="simple-modal-title">Этапы не выбраны.</h3>
        }
        return stages.map(s => <div className={classes.modalContainer}>
            <Typography color="textPrimary" className={classes.title}>
                {s.inputColumn === undefined ? s.inputColumns.toString() : s.inputColumn} => {s.outputColumn}          .
            </Typography>
            <Typography className={classes.body} color="textSecondary">
                [{s.type}]
            </Typography>
        </div>)
    };

    return (
        <div className={classes.root}>
            <div className={classes.buttonContainer}>
                <ButtonGroup variant="text" aria-label="Выберите этапы">
                    <Button className={selectedGroup === 0 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 0 ? "primary" : "secondary"}
                            onClick={onClickExtractors}>Извлечение признаков</Button>
                    <Button className={selectedGroup === 1 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 1 ? "primary" : "secondary"}
                            onClick={onClickText}>Преобразование текста</Button>
                    <Button className={selectedGroup === 2 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 2 ? "primary" : "textSecondary"}
                            onClick={onClickColumnTransformers}>Преобразование столбцов</Button>
                    <Button className={selectedGroup === 3 ? classes.selectedButtonText : classes.buttonText}
                            color={selectedGroup === 3 ? "primary" : "textSecondary"}
                            onClick={onClickCategoricalEncoding}>Кодировка категориальных переменных</Button>
                </ButtonGroup>
            </div>
            {getContent()}
            <Fab color="primary" aria-label="add" className={classes.button} onClick={sendStages}>
                <DoneIcon/>
            </Fab>
            <Fab color="primary" aria-label="add" className={classes.eyeButton} onClick={handleOpen}>
                <VisibilityOutlinedIcon/>
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    {getStagesInfo()}
                </div>
            </Modal>
        </div>
    );
}