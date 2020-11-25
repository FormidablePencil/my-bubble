import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { config, animated, useSpring } from 'react-spring'
import { rootReducerT } from '../../../../../store'
import ImageInDevice, { SwitchDeviceTypeBtns, TransitionDevices } from '@bit/formidablepencil.react-reusables.image-in-device'
import { makeStyles } from '@material-ui/core'
import { filterImagesForSpecifiedDevice, imageAvailability } from './deviceInImgUlilities'

function ProjectContentImage({ accordionOpen, onClickHandler }) {
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)
  const [isViewingMobileImgs, setIsViewingMobileImgs] = useState(true)
  const classes = useStyles();

  const desktopImages = projectDataCollection[currentSubjectViewing]
    ? filterImagesForSpecifiedDevice(projectDataCollection[currentSubjectViewing], 'web')
    : []
  const mobileImages = projectDataCollection[currentSubjectViewing]
    ? filterImagesForSpecifiedDevice(projectDataCollection[currentSubjectViewing], 'mobile')
    : []

  useEffect(() => {
    setIsViewingMobileImgs(() => {
      if (mobileImages.length > 0) return true
      if (desktopImages.length > 0) return false
      else return true
    })
  }, [currentSubjectViewing])
  // const whatTypeOfImagesAvailableRef: whatTypeOfImagesAvailableRefT = useRef([])

  const imageAnim = useSpring({
    to: !accordionOpen ? { transform: 'scale(1.6)', margin: 100, } : { transform: 'scale(1)', margin: 20, },
    from: { transform: 'scale(1)', margin: 20, },
    config: config.default
  })

  const switchDevicesHandler = () => setIsViewingMobileImgs(prev =>
    mobileImages.length > 0 && desktopImages.length > 0 ? !prev : prev)

  return (
    <div>
      <div className={classes.switchDevicesBtnContainer}>
        <SwitchDeviceTypeBtns
          iconSize={40}
          whatIconsToDisplay={imageAvailability({ mobileImages, desktopImages })}
          isMobile={isViewingMobileImgs}
          onClickHandler={switchDevicesHandler}
        />
      </div>
      <animated.div
        style={{ ...imageAnim, display: 'flex', flexDirection: 'row' }}
        onClick={() => onClickHandler(0)}
      >
        {desktopImages.length > 0 &&
          <TransitionDevices
            deviceType='desktop'
            // deviceType={projectDataCollection[currentSubjectViewing]?.type}
            show={!isViewingMobileImgs}
          >
            <ImageInDevice
              deviceType={'web'}
              images={desktopImages}
              indexOfImageIfNotSwipable={0}
              swipable={true}
              autoPlay={true}
            />
          </TransitionDevices>
        }
        {mobileImages.length > 0 &&
          <TransitionDevices
            deviceType={'mobile'}
            // deviceType={projectDataCollection[currentSubjectViewing]?.type}
            show={isViewingMobileImgs}
          >
            <ImageInDevice
              deviceType={'mobile'}
              // images={projectDataCollection[currentSubjectViewing]?.images}
              images={mobileImages}
              indexOfImageIfNotSwipable={0}
              swipable={true}
              autoPlay={true}
            />
          </TransitionDevices>
        }
      </animated.div>
    </div>
  )
}


const useStyles = makeStyles(() => ({
  switchDevicesBtnContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
  }
}));

export default ProjectContentImage
