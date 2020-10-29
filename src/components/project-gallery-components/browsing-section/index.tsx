import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import { projectDataT } from '../../../reducers/projectDataReducer';
import Card from './Card';

function GalleryBrowsingSection(
  { projectDataCollection }:
    { projectDataCollection: projectDataT[], showDetailsSection?}) {
  const classes = useStyles();


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
        if (!project.showInPorfolio) return null
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


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '1em',
    marginBottom: '1em',
  }
}));