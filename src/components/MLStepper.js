import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
}));

function getSteps() {
    return ['Transform data', 'Choose model', 'Score model', 'Evaluate model'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Transform data';
        case 1:
            return 'Choose model';
        case 2:
            return 'Score model';
        case 3:
            return 'Evaluate model';
        default:
            return 'Unknown stepIndex';
    }
}

export default function MLStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
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
                                color = 'secondary'
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
            </div>
        </div>
    );
}