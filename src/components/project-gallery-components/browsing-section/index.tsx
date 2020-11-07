import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import Card from './Card';
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../../store';

function GalleryBrowsingSection() {
  const classes = useStyles();
  const { projectDataCollection } = useSelector((state: rootReducerT) => state)


  return (
    <Grid
      spacing={6}
      container
      justify='center'
      className={classes.container}
    >
      {projectDataCollection.map((project, index) => {
        let trimTech = false
        if (project.technologies.length >= 4) trimTech = true
        if (!project.showInPortfolio) return null
        return (
          <Grid item>
            <Card
              trimTech={trimTech}
              projectContent={project}
              techIndexInCollection={index}
              key={index}
            />
          </Grid>
        )
      }
      )}
    </Grid>
  )
}

export default GalleryBrowsingSection


const useStyles = makeStyles(() => ({
  container: {
    marginTop: '1em',
    marginBottom: '1em',
  }
}));