import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import cx from "clsx";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import image from "../../static/images/ml.png";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import {useN03TextInfoContentStyles} from "@mui-treasury/styles/textInfoContent/n03";
import {useLightTopShadowStyles} from "@mui-treasury/styles/shadow/lightTop";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
    root: {
        width: 300,
        borderRadius: 10,
    },
    title: {
        fontSize: 12,
    },
    icon: {
        color: '#2EA155',
        fontSize: 28,
        paddingBottom: 3
    },
    createdBy: {
        fontSize: 16,
        fontFamily: 'Muli',
        fontStyle: "bold",
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
}));

export default function ModelCard(props) {
    const styles = useN03TextInfoContentStyles();
    const shadowStyles = useLightTopShadowStyles();
    const cardStyles = useStyles();

    return (
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <BrandCardHeader
                image={image}
                extra={
                    <Chip size="small" variant="outlined" color="secondary" className={cardStyles.title} label={props.card.modelType}/>
                }
            />
            <CardContent className={cardStyles.content}>
                <TextInfoContent
                    classes={styles}
                    overline={props.card.createdAt}
                    heading={props.card.title}
                    body={props.card.description}
                />
            </CardContent>
            <CardActions disableSpacing className={cardStyles.actions}>
                <PlayCircleOutlineIcon className={cardStyles.icon}/>
                <Button size="small" className={cardStyles.createdBy}>RUN</Button>
            </CardActions>
        </Card>
        /*  <Card className={classes.root}>
              <CardContent>
                  <div className={classes.cardTitle}>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                          {props.card.title}
                      </Typography>
                      <div className={classes.options}>
                          <CardOptions/>
                      </div>
                  </div>
                  <Typography variant="body2" component="p">
                      {props.card.description}
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <PlayCircleOutlineIcon className={classes.icon}/>
                  <Button size="small">RUN</Button>
                  <Typography className={classes.createdBy} color="textSecondary" gutterBottom>
                      {props.card.createdAt} by {props.card.user.username}
                  </Typography>
              </CardActions>
          </Card>*/
    )
}