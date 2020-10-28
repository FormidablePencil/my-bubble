import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../../store';

function TechContentVisualSection({ loading }) {
  const { techDataCollection, currentTechViewing } = useSelector((state: rootReducerT) => state)
  const classes = useStyles();
  
  return (
    <>
      {!loading &&
        <Grid container alignItems='center' className={classes.techImgContainer}>
          <img
            className={classes.techImgInView}
            src={techDataCollection[currentTechViewing].image}
            alt={techDataCollection[currentTechViewing].technology} />
        </Grid>
      }
    </>
  )
}

export default TechContentVisualSection


const useStyles = makeStyles((theme) => ({
  techImgContainer: {
    background: 'white'
  },
  techImgInView: {
    flex: 1,
    width: '80%',
    height: '80%',
    objectFit: 'contain',
  }
}));