import React from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/core/styles";
import {useN03TextInfoContentStyles} from "@mui-treasury/styles/textInfoContent/n03";
import {useLightTopShadowStyles} from "@mui-treasury/styles/shadow/lightTop";
import cx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import image from "../../static/images/settings.png";
import {blueGrey} from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        width: 340,
        borderRadius: 10,
    },
    cardTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        paddingLeft: 10,
        fontFamily: 'Muli',
        fontStyle: "bold"
    },
    body: {
        fontSize: 16,
        fontFamily: 'Raleway'
    },
    icon: {
        color: blueGrey[200],
        fontSize: 30
    },
    input: {
        width: 250,
        marginLeft: 17,
    },
    selectedIcon: {
        color: '#2EA155',
        fontSize: 30
    },
    formControl: {
        margin: theme.spacing(2),
        width: 250,
    },
}));

export default function StageCard(props) {
    const styles = useN03TextInfoContentStyles();
    const shadowStyles = useLightTopShadowStyles();
    const cardStyles = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleCancel = () => {
        setOpen(false);
        props.onCancelClick();
    };

    const handleOk = () => {
        setOpen(false);
        props.onSaveClick();
    };

    const onClick = () => {
        setOpen(true);
    };

    return (
        <div>
            <Card onClick={onClick} className={cx(cardStyles.root, shadowStyles.root)}>
                <BrandCardHeader
                    image={image}
                />
                <CardContent className={cardStyles.content}>
                    <TextInfoContent
                        classes={styles}
                        heading={<div className={cardStyles.cardTitle}>
                            {props.card.title}
                        </div>}
                        body={props.card.description}
                    />
                </CardContent>
            </Card>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.dialogContentText}
                    </DialogContentText>
                    {props.dialogContent}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="secondary">
                        Отменить
                    </Button>
                    <Button onClick={handleOk} color="primary">
                        Добавить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}