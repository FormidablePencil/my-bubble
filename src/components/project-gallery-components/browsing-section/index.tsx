import ReactLoading from 'react-loading';

import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { animated } from 'react-spring';

import useTrailOnFirstRender from '../../../hooks/useTrailOnFirstRender';
import { rootReducerT } from '../../../store';
import Card from './Card';

function GalleryBrowsingSection() {
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const projectsPageRenderCount = useSelector((state: rootReducerT) => state.pageRenderAmounts.projects)
  const classes = useStyles();
  const trail = useTrailOnFirstRender({
    pageRendered: projectsPageRenderCount,
    trailLength: projectDataCollection.length,
    trailDelay: 200,
  })
 
  return (
    <Grid
      spacing={6}
      container
      justify='center'
      className={classes.container}
    >
      {projectsPageRenderCount
       ? trail.map((trailProps, index) => {
        let trimTech = false
        let project = projectDataCollection[index]
        if (project.technologies.length >= 4) trimTech = true
        if (!project.showInPortfolio) return null
        return (
          <Grid item key={project._id}>
            <animated.div style={trailProps}>
              <Card
                trimTech={trimTech}
                projectContent={project}
                techIndexInCollection={index}
                key={index}
              />
            </animated.div>
          </Grid>
        )
      })
      : 
        <ReactLoading className='mt-12' type='spinningBubbles' height={200} width={150} />
    }
    </Grid>
  )
}

export default GalleryBrowsingSection


const useStyles = makeStyles(() => ({
  container: {
    overflowX: 'hidden',
    marginTop: '1em',
    marginBottom: '1em',
  }
}));