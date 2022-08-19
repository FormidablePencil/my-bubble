import { Grid, makeStyles, Tooltip } from '@material-ui/core';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { animated } from 'react-spring';

import useTrailOnFirstRender from '../../../hooks/useTrailOnFirstRender';
import { rootReducerT } from '../../../store';

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
        <Tooltip title={tech.technology} arrow>
          <img className={classes.techImg} src={tech.image} alt={tech.technology} />
        </Tooltip>
      </div>
    </Grid>


  return (
    <Grid container
     justify='center'>
        {/* <ReactLoading className='mt-12' type='spinningBubbles' height={200} width={150} /> */}
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
    background: theme.palette.primary[100],
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