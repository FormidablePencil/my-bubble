import React from 'react'
import DeviceFrameAndImg from '../reusables/layouts/DeviceFrameAndImg'
import { ContainerFullHeight } from '../../styles/materialUiStyles'
import { Grid, makeStyles } from '@material-ui/core'

function MobileProjectGallery({ projectDataCollection }) {

  const classes = useStyles();
  return (
    <ContainerFullHeight className={classes.container}>
      <Grid container direction='column' wrap='nowrap'>
        <SwipeToViewContentDetailsSection />
        {projectDataCollection.map(project => {
          if (!project.showInPorfolio) return null
          else
            return (
              <Grid item container justify='center'>
                <DeviceFrameAndImg projectContent={project} />
              </Grid>
            )
        })}
      </Grid>
    </ContainerFullHeight>
  )
}

export default MobileProjectGallery

const SwipeToViewContentDetailsSection = () => {
  return (
    <>
      {/* hi from SwipeToViewContentDetailsSection */}
    </>
  )
}


const useStyles = makeStyles((theme) => ({
  container: {
    overflowY: 'scroll'
  }
}));