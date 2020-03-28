import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link as RouterLink} from 'react-router-dom';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import DynamicFeedOutlinedIcon from '@material-ui/icons/DynamicFeedOutlined';
import HomeIcon from '@material-ui/icons/Home';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    icon: {
        fontSize: 40,
        paddingBottom: 3
    },
    smallIcon: {
        fontSize: 30,
        paddingBottom: 3
    },
});

export default function MenuDrawer(props) {
    const cardStyles = useStyles();

    return (
        <div
            className={props.style}
            role="presentation"
            onClick={props.onClick(false)}
            onKeyDown={props.onClick(false)}
        >
            <List>
                <ListItem button key={"Projects"} component={RouterLink} to="/home">
                    <ListItemIcon> <HomeIcon className={cardStyles.icon} color="primary"/></ListItemIcon>
                    <ListItemText primary={"Projects"}/>
                </ListItem>
                <Divider/>
                <ListItem button key={"Pipelines"}>
                    <ListItemIcon> <DynamicFeedOutlinedIcon className={cardStyles.smallIcon} color="secondary"/></ListItemIcon>
                    <ListItemText primary={"Pipelines"}/>
                </ListItem>
                <ListItem button key={"Datasets"} component={RouterLink} to="/datasets">
                    <ListItemIcon> <StorageOutlinedIcon className={cardStyles.smallIcon} color="secondary"/></ListItemIcon>
                    <ListItemText primary={"Datasets"}/>
                </ListItem>
            </List>
        </div>
    );
}