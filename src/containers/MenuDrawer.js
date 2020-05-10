import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import pipelineImage from "../static/images/pipeline.png";
import datasetImage from "../static/images/dataset.png";
import homeImage from "../static/images/ml.png";

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
                <ListItem button key={"Проекты"} component={RouterLink} to="/home">
                    <img src={homeImage} height="40" width="40" alt="Ml Creator"/>
                   {/* <ListItemIcon> <HomeIcon className={cardStyles.icon} color="primary"/></ListItemIcon>*/}
                    <ListItemText primary={"Проекты"}/>
                </ListItem>
                <Divider/>
                <ListItem button key={"Пайплайны"} component={RouterLink} to="/pipelines">
                    <img src={pipelineImage} height="40" width="40" alt="Pipeline"/>
                    <ListItemText primary={"Пайплайны"}/>
                </ListItem>
                <ListItem button key={"Датасеты"} component={RouterLink} to="/datasets">
                    <img src={datasetImage} height="40" width="40" alt="Pipeline"/>
                   {/* <ListItemIcon> <StorageOutlinedIcon className={cardStyles.smallIcon} color="secondary"/></ListItemIcon>*/}
                    <ListItemText primary={"Датасеты"}/>
                </ListItem>
            </List>
        </div>
    );
}