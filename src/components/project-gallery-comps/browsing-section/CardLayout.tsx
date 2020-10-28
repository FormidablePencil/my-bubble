import React from 'react'
import { Paper, Grid, makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerT } from '../../../store';
import { SELECTED_SUBJECT, TOGGLE_CONTENT_DETAILS_SECTION } from '../../../actions/types';

const CardLayout = ({ firstSection, infoSection, techIndexInCollection }) => {
  const { contentDetailSectionIsClosed } = useSelector((state: rootReducerT) => state)
  const classes = useStyles();
  const dispatch = useDispatch()

  const onCardClick = async () => {
    await dispatch({ type: SELECTED_SUBJECT, payload: techIndexInCollection })
    if (contentDetailSectionIsClosed)
      dispatch({ type: TOGGLE_CONTENT_DETAILS_SECTION })
  }

  return (
    <div
      onClick={onCardClick}
      className="ohHoverAnim">
      <Paper className={`${classes.card}`} id='hoverEffect'
      >
        <Grid
          container
          justify='center'
          alignItems='center'
        >{firstSection}</Grid>
        <Grid container>{infoSection}</Grid>
      </Paper>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  card: {
    height: '15em',
    width: '30em',
    display: 'flex',
    alignItems: 'normal',
    borderRadius: '.5em',
    overflow: 'hidden',
    background: theme.palette.primary[400]
  },

}));

export default CardLayout