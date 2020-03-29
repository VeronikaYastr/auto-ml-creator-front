import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import cx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import {useN03TextInfoContentStyles} from '@mui-treasury/styles/textInfoContent/n03';
import {useLightTopShadowStyles} from '@mui-treasury/styles/shadow/lightTop';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import image from '../../static/images/pipeline.png'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 343,
        borderRadius: 10,
    },
});

export default function PipelineCard(props) {
    const styles = useN03TextInfoContentStyles();
    const shadowStyles = useLightTopShadowStyles();
    const cardStyles = useStyles();

    return (
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <BrandCardHeader
                image={image}
                extra={props.card.stepsAmount + " steps"}
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