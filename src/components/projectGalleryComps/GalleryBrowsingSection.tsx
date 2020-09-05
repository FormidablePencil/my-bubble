import React from 'react'
import { useDispatch } from 'react-redux'
import { SELECTED_SUBJECT } from '../../actions/types'
import { makeStyles, Typography, Chip, Grid } from '@material-ui/core'
import { BorderLinearProgress } from '../../styles/materialUiStyles'
import CardLayout from '../reusables/CardLayout';

function GalleryBrowsingSection({ projectDataCollection }) {
  const dispatch = useDispatch()
  const onCardClick = (techIndexInCollection) => dispatch({ type: SELECTED_SUBJECT, payload: techIndexInCollection })
  const classes = useStyles();

  const imageStyles = (project) => {
    const contentImageStyles = project.type === 'mobile' ? classes.mobileImg : classes.webImg
    const frameImgStyles = project.type === 'mobile' ? classes.mobileFrame : classes.webFrame
    return { contentImageStyles, frameImgStyles }
  }

  const macbookFrame = require('../../assets/macbookFrame.png')
  const galaxyPhoneFrame = require('../../assets/galaxys8Frame.png')

  return (
    <>
      {projectDataCollection.map((project, index) => {
        if (!project.showInPorfolio) return null
        return (
          <CardLayout
            onCardClick={(techIndexInCollection) => onCardClick(index)}
            firstSection={
              <>
                <img
                  className={imageStyles(project.type).contentImageStyles}
                  src={project.images && project.images[0]}
                  alt='application' />
                <img className={imageStyles(project.type).frameImgStyles}
                  src={project.type === 'mobile' ? galaxyPhoneFrame : macbookFrame}
                  alt='frame' />
              </>
            } infoSection={
              <Grid container>
                <Grid container item>
                  <Typography variant='h4'>{project.title}</Typography>
                </Grid>
                <Grid container item>
                  <BorderLinearProgress color='primary' variant="determinate" value={project.status * 10} />
                  <Typography variant='body1'>{project.status}0%</Typography>
                </Grid>
                <Grid container item>
                  <Typography variant='h5' display='inline'>Technologies:</Typography>
                </Grid>
                <Grid container item>
                  {project.technologies.map(tech =>
                    <Chip label={tech} />
                  )}
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
  mobileFrame: {
    width: '11.6em',
    objectFit: 'contain',
    position: 'relative',
  },
  mobileImg: {
    position: 'absolute',
    height: '10em',
    width: '6em',
    objectFit: 'contain',
  },
  webFrame: {
    width: '15em',
    objectFit: 'contain',
    position: 'relative',
  },
  webImg: {
    position: 'absolute',
    height: '10em',
    width: '11.5em',
    top: '4.8em',
    objectFit: 'contain',
  }
}));