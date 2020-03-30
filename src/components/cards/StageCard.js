import React from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/core/styles";
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
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
        minWidth: 275,
        maxWidth: 343,
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
    const [selected, setSelected] = React.useState(false);
    const [inputColumn, setInputColumn] = React.useState(false);
    const [outputColumn, setOutputColumn] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleCancel = () => {
        setOpen(false);
        setSelected(false);
    };

    const handleOk = () => {
        setOpen(false);
        setSelected(true);
    };

    const handleInputColumnChange = event => {
        setInputColumn(event.target.value);
    };

    const handleOutputColumnChange = event => {
        setOutputColumn(event.target.value);
    };

    const onClick = () => {
        setOpen(true);
    };

    const onCheckedClick = () => {
        setSelected(false);
    };

    return (
        <div>
            <Card className={cx(cardStyles.root, shadowStyles.root)}>
                <BrandCardHeader
                    image={image}
                    extra={selected ?
                        <CheckCircleOutlineOutlinedIcon onClick={onCheckedClick} className={cardStyles.selectedIcon}/> :
                        <RadioButtonUncheckedOutlinedIcon onClick={onClick} className={cardStyles.icon}/>
                    }
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
                        Cancel
                    </Button>
                    <Button onClick={handleOk} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}