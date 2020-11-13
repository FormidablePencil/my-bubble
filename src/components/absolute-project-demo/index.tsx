import React from 'react'
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../store';
import ImageInDevice from '../reusables/image-in-device';

function AbsoluteProjectDemo() {
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)

  const FrameAndImage = () =>
    <ImageInDevice
      projectData={projectDataCollection[4]}
      indexOfImageIfNotSwipable={0}
      swipable={true}
      autoPlay={true}
    />

  return (
    <div>
      <div className='long-fade absoluteProjectDemo'>
        <FrameAndImage />
      </div>
      <div className='long-fade absoluteProjectDemo-right'>
        <FrameAndImage />
      </div>
    </div>
  )
}

export default AbsoluteProjectDemo