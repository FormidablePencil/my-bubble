import React from 'react'
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core'
import { rootReducerT } from '../../store';
import ImageInDevice from '../reusables/image-in-device/ImageInDevice';

function AbsoluteProjectDemo() {
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const mdDown = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  const mdUp = useMediaQuery((theme: any) => theme.breakpoints.up('md'))

  const leftStyles: any = {
    position: "absolute",
    left: mdDown ? '5%' : '10%',
    top: "33%",
    transform: mdDown ? 'scale(1)' : 'scale(1.5)',
    // opacity: sm ? 0 : 1
  }
  const rightStyles: any = {
    position: "absolute",
    right: mdDown ? '5%' : '10%',
    top: "30%",
    transform: mdDown ? 'scale(1)' : 'scale(1.5)',
    // opacity: sm ? 0 : 1
  }

  const FrameAndImage = () =>
    <ImageInDevice
      projectData={projectDataCollection[4]}
      indexOfImageIfNotSwipable={0}
      swipable={true}
      autoPlay={true}
    />

  return (
    <div>
      <div style={leftStyles}>
        {mdUp && <FrameAndImage />}
      </div>
      <div style={rightStyles}>
        {mdUp && <FrameAndImage />}
      </div>
    </div>
  )
}

export default AbsoluteProjectDemo