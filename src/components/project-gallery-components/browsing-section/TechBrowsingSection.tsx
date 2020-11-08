import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../../../store';
import { makeStyles, Grid } from '@material-ui/core';

const TechBrowsingSection = memo(() => {
  const techDataCollection = useSelector((state: rootReducerT) => state.techDataCollection)
  const classes = useStyles();

  const TechItemContainer = ({ tech }: { tech }) =>
    <Grid item>
      <div className={classes.techContainer} id='hoverEffect'>
        <img className={classes.techImg} src={tech.image} alt={tech.technology} />
      </div>
    </Grid>

  return (
    <Grid container justify='center'>
      {techDataCollection.map((tech) =>
        <TechItemContainer key={tech._id} tech={tech} />
      )}
    </Grid>
  )
})

const useStyles = makeStyles(() => ({
  techContainer: {
    width: '7.5em',
    height: '7.5em',
    background: 'white',
    margin: '2em',
    borderRadius: '5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // webkitBoxShadow: '0px 4px 21px 0px rgba(0,0,0,0.17)',
    // mozBoxShadow: '0px 4px 21px 0px rgba(0,0,0,0.17)',
    boxShadow: '0px 4px 21px 0px rgba(0,0,0,0.17)',
    position: 'relative',
  },
  techImg: {
    width: '70%',
    height: '70%',
    objectFit: 'contain'
  }
}));

export default TechBrowsingSection