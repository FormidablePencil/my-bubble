import { useMediaQuery } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../store';
import ImageInDevice from '../reusables/image-in-device/ImageInDevice';

function AbsoluteProjectDemo() {
  const { projectDataCollection } = useSelector((state: rootReducerT) => state)
  const md = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  const sm = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))

  const leftStyles: any = {
    position: "absolute",
    left: md ? '5%' : '10%',
    top: "33%",
    transform: md ? 'scale(1)' : 'scale(1.5)',
    opacity: sm ? 0 : 1
  }
  const rightStyles: any = {
    position: "absolute",
    right: md ? '5%' : '10%',
    top: "30%",
    transform: md ? 'scale(1)' : 'scale(1.5)',
    opacity: sm ? 0 : 1
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
        <FrameAndImage />
      </div>
      <div style={rightStyles}>
        <FrameAndImage />
      </div>
    </div>
  )
}

export default AbsoluteProjectDemo