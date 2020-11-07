import React, { Children, cloneElement } from 'react'
import { makeStyles } from '@material-ui/core'
import { projectDataT } from '../../../reducers/projectDataReducer';

function DeviceFrameAndImg({
  indexOfImage,
  projectContent,
  mobileContentDetailsSection,
  children
}: {
  indexOfImage: number,
  projectContent: projectDataT,
  mobileContentDetailsSection?,
  children?
}) {
  const classes = useStyles();

  /* modularize */
  const imageStyles = (type) => {
    const contentImageStyles = type === 'mobile' ? classes.mobileImg : classes.webImg
    const frameImgStyles = type === 'mobile' ? classes.mobileFrame : classes.webFrame
    return { contentImageStyles, frameImgStyles }
  }
  const macbookFrame = require('../../../assets/macbookFrame.png')
  const galaxyPhoneFrame = require('../../../assets/galaxys8Frame.png')

  const childrenWithProps = children && Children.map(children, child => {
    return cloneElement(child, {
      imageStyles: imageStyles(projectContent?.type).contentImageStyles,
      showMobileImages: projectContent?.images[indexOfImage]?.device === 'mobile',
    })
  })

  if (projectContent) {
    return (
      <div>
        <div
          className={classes.container}
          style={mobileContentDetailsSection ?
            {
              transform: 'scale(2)',
              margin: '1em, 0em 1em, 0em'
            } : {}}
        >

          {children ? childrenWithProps :
            <img
              className={imageStyles(projectContent.type).contentImageStyles}
              src={projectContent.images && projectContent.images[indexOfImage]?.url}
              alt='application' />
          }
          <img className={imageStyles(projectContent.type).frameImgStyles}
            src={projectContent.images?.[indexOfImage]?.device === 'mobile' ? galaxyPhoneFrame : macbookFrame}
            alt='frame' />
        </div>
      </div>
    )
  }
  else return null
}

export default DeviceFrameAndImg



const useStyles = makeStyles(() => ({
  container: {
    userSelect: 'none',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileFrame: {
    pointerEvents: 'none',
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