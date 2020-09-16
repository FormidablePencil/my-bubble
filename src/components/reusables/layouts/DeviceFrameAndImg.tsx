import React from 'react'
import { makeStyles } from '@material-ui/core'

function DeviceFrameAndImg({ projectContent, mobileContentDetailsSection }:
  { projectContent, mobileContentDetailsSection?}) {
  const classes = useStyles();

  const imageStyles = (type) => {
    const contentImageStyles = type === 'mobile' ? classes.mobileImg : classes.webImg
    const frameImgStyles = type === 'mobile' ? classes.mobileFrame : classes.webFrame
    return { contentImageStyles, frameImgStyles }
  }

  const macbookFrame = require('../../../assets/macbookFrame.png')
  const galaxyPhoneFrame = require('../../../assets/galaxys8Frame.png')


  if (projectContent) {
    return (
      <div
        className={classes.container}
        style={mobileContentDetailsSection ?
          {
            transform: 'scale(2)',
            margin: '1em, 0em 1em, 0em'
          } : {}}
      >
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
  else return <>load skeleton</>
}

export default DeviceFrameAndImg



const useStyles = makeStyles((theme) => ({
  container: {
    userSelect: 'none',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileFrame: {
    width: '11.6em',
    objectFit: 'contain',
    position: 'relative',
    marginTop: -5,
    marginBottom: -5,
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