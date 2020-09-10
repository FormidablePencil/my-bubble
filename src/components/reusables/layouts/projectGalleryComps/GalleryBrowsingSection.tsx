import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SELECTED_SUBJECT } from '../../../../actions/types'
import { makeStyles, Typography, Chip, Grid } from '@material-ui/core'
import CardLayout from '../CardLayout';
import { rootReducerT } from '../../../../store';
import DeviceFrameAndImg from '../DeviceFrameAndImg';

function GalleryBrowsingSection(
  { projectDataCollection, showDetailsSection }:
    { projectDataCollection, showDetailsSection?}) {

  const techDataCollection = useSelector((state: rootReducerT) => state.techDataCollection)

  const classes = useStyles();
  const dispatch = useDispatch()

  const onCardClick = (techIndexInCollection) => {
    showDetailsSection()
    dispatch({ type: SELECTED_SUBJECT, payload: techIndexInCollection })
  }

  return (
    <>
      {projectDataCollection.map((project, index) => {
        if (!project.showInPorfolio) return null
        return (
          <CardLayout
            key={index}
            onCardClick={() => onCardClick(index)}
            firstSection={
              <DeviceFrameAndImg projectContent={project} />
            }
            infoSection={
              <Grid className={classes.infoSection} container direction='column'>
                {/* <Grid item container>
                  <Typography className={classes.title} variant='h6'>{project.title}</Typography>
                </Grid> */}

                <Grid item container
                  className={classes.flex2}
                  direction='column'>
                  <Typography variant='h6'>Brief description:</Typography>
                  <Typography className={classes.body} variant='body1'>{project.description}sdsdsdda12</Typography>
                </Grid>

                <Grid item container
                  className={classes.flex1}
                  direction='column'>
                  <Typography variant='h5' display='inline'>Technologies:</Typography>
                  <div>
                    {project.technologies.map(tech => {
                      const techData = techDataCollection.filter(doc => doc.technology === tech)[0]
                      if (techData && techData.image)
                        return <img
                          key={techData.image}
                          className={classes.techImg}
                          src={techData.image}
                          alt={tech} />
                      else
                        return <Chip
                          className={classes.chip}
                          key={tech}
                          label={tech} />
                      // return <Chip className={classes.chip} key={tech} label={tech} />
                    })}
                  </div>
                </Grid>
              </Grid>
            } />
        )
      }
      )}
    </>
  )
}

export default GalleryBrowsingSection


const useStyles = makeStyles((theme) => ({
  infoSection: {
    backgroundColor: theme.palette.primary[100],
    padding: '1em',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    width: '100%',
    backgroundColor: 'orange'
  },
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  body: {
    marginLeft: '1em',
    fontSize: '.8em'
  },
  chip: {
    // backgroundColor: '',
    height: '1.5em',
    margin: '.3em'
  },
  techImg: {
    height: '2em',
    width: '2em',
    margin: '.3em'
  }
}));