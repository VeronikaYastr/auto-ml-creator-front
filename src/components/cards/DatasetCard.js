import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import cx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import {useN03TextInfoContentStyles} from '@mui-treasury/styles/textInfoContent/n03';
import {useLightTopShadowStyles} from '@mui-treasury/styles/shadow/lightTop';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import image from '../../static/images/dataset.jpg'
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 343,
        borderRadius: 10,
    },
    cardTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: -15
    },
    content: {
        padding: 24,
    },
    options: {
        position: 'relative',
        right: -2,
        top: -7
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 12,
    },
    pos: {
        marginBottom: 12,
    },
    createdBy: {
        fontSize: 12,
        fontStyle: 'italic',
        flexGrow: 1,
        textAlign: "end",
        paddingTop: 6,
        paddingLeft: 6
    }
});

export default function DatasetCard(props) {
    const styles = useN03TextInfoContentStyles();
    const shadowStyles = useLightTopShadowStyles();
    const cardStyles = useStyles();

    return (
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <BrandCardHeader
                image={image}
                extra={
                    <Chip size="small" variant="outlined" color="secondary" className={cardStyles.title} label={props.card.fileFormat}/>
                }
            />
            <CardContent className={cardStyles.content}>
                <TextInfoContent
                    classes={styles}
                    overline={props.card.createdAt}
                    heading={props.card.name}
                    body={props.card.description}
                />
            </CardContent>
        </Card>
    )
}