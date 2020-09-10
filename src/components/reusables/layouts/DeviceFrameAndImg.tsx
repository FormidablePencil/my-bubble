import React from 'react'
import { makeStyles } from '@material-ui/core'

function DeviceFrameAndImg({ projectContent }) {
  const classes = useStyles();
  
  const imageStyles = (type) => {
    const contentImageStyles = type === 'mobile' ? classes.mobileImg : classes.webImg
    const frameImgStyles = type === 'mobile' ? classes.mobileFrame : classes.webFrame
    return { contentImageStyles, frameImgStyles }
  }

  const macbookFrame = require('../../../assets/macbookFrame.png')
  const galaxyPhoneFrame = require('../../../assets/galaxys8Frame.png')


  return (
    <div className={classes.container}>
      <img
        className={imageStyles(projectContent.type).contentImageStyles}
        src={projectContent.images && projectContent.images[0]}
        alt='application' />
      <img className={imageStyles(projectContent.type).frameImgStyles}
        src={projectContent.type === 'mobile' ? galaxyPhoneFrame : macbookFrame}
        alt='frame' />
    </div>
  )
}

export default DeviceFrameAndImg



const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    objectFit: 'contain',
  },
}));