import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        flex: 1,
    },
    mainContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: theme.spacing(5)
    },
    backButton: {
        marginRight: theme.spacing(1),
        marginLeft: 10,
        flex: 1
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: 10,
        color: '#575757',
        flex: 1
    },
    stepContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    buttonNext: {
        right: 30,
        bottom: 20,
        position: "fixed"
    },
    buttonBack: {
        left: 30,
        bottom: 20,
        position: "fixed",
    },
}));

export default function MLStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = props.steps;

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    return (
        <div className={classes.root}>
            <div className={classes.stepContent}>
                {props.getStepContent(activeStep)}
            </div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {/*   <div>
                {activeStep === steps.length ? (
                    <div className={classes.mainContainer}>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                    </div>
                ) : (
                    <div className={classes.mainContainer}>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                color='secondary'
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>*/}
            <div>
                <Fab disabled={activeStep === steps.length} color="secondary" aria-label="next"
                     className={classes.buttonNext} onClick={handleNext}>
                    <NavigateNextIcon/>
                </Fab>
                <Fab color="secondary" aria-label="next" className={classes.buttonBack} disabled={activeStep === 0}
                     onClick={handleBack}>
                    <NavigateBeforeIcon/>
                </Fab>
            </div>
        </div>
    );
}