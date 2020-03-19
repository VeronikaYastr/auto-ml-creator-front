import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    navTitle: {
        flexGrow: 1,
        fontFamily: 'Muli',
        fontStyle: "bold"
    }
}));

export default function MenuComponent() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = event => {
        setAuth(event.target.checked);
    };

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            {/* <FormGroup>
                <FormControlLabel
                    control={<Switch checked={auth} onChange={handleChange} aria-label="login switch"/>}
                    label={auth ? 'Logout' : 'Login'}
                />
            </FormGroup>*/}
                <AppBar position="static" color="inherit">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
                            <AccountTreeIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.navTitle} color="primary">
                            ML Creator
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="secondary"
                                >
                                    <AccountCircle fontSize="large"/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
        </div>
    );
}