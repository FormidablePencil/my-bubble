import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../../../store';
import { makeStyles, Grid } from '@material-ui/core';
import { animated } from 'react-spring'
import useTrailOnFirstRender from '../../../hooks/useTrailOnFirstRender';

const TechBrowsingSection = memo(() => {
  const techDataCollection = useSelector((state: rootReducerT) => state.techDataCollection)
  const techPageRenderCount = useSelector((state: rootReducerT) => state.pageRenderAmounts.tech)
  const classes = useStyles();

  const trail = useTrailOnFirstRender({
    pageRendered: techPageRenderCount,
    trailLength: techDataCollection.length,
    trailDelay: 200,
  })


  const TechItemContainer = ({ tech }: { tech }) =>
    <Grid item>
      <div className={`${classes.techContainer}`} id='hoverEffect'>
        <img className={classes.techImg} src={tech.image} alt={tech.technology} />
      </div>
    </Grid>


  return (
    <Grid container justify='center'>

      {trail.map((trailProps, index) =>
        <animated.div style={trailProps}>
          <TechItemContainer key={techDataCollection[index]._id} tech={techDataCollection[index]} />
        </animated.div>
      )}
    </Grid>
  )
})

const useStyles = makeStyles((theme) => ({
  techContainer: {
    width: '7.5em',
    height: '7.5em',
    background: theme.typography.h6.color,
    margin: '2em',
    padding: '.5em',
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