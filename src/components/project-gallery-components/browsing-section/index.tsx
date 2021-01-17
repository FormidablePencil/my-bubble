import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import Card from './Card';
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../../store';
import useTrailOnFirstRender from '../../../hooks/useTrailOnFirstRender';
import { animated } from 'react-spring';

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
      {trail.map((trailProps, index) => {
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
      })}
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