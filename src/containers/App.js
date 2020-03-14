import React, {useEffect, useState} from 'react';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import ModelsContainer from "./ModelsContainer";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link as RouterLink} from 'react-router-dom';
import MenuComponent from "./MenuComponent";
import {ApiService} from "../api/ApiService";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#B574BF',
            main: '#760B87',
        },
        secondary: {
            main: '#890620',
        },
        success: {
            main: '#2EA155',
        }
    },
});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    button: {
        right: 30,
        bottom: 20,
        position: "fixed"
    }
}));

const App = () => {
    const classes = useStyles();
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        new ApiService().getAllModelsForUser(1)
            .then((response) => {
                if (response === undefined || response.error) {
                    console.log("Error");
                    setModels([]);
                } else
                    setModels(response);
            }).catch((error) => {
            setLoading(false);
        });
    }, []);

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <MenuComponent/>
                {models && <ModelsContainer cards={models}/>}
                <Fab color="primary" aria-label="add" className={classes.button} component={RouterLink} to="/add">
                    <AddIcon/>
                </Fab>
            </ThemeProvider>
        </div>
    );
};

export default App;