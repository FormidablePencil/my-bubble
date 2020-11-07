import React from 'react'
import { projectDataT } from '../../../reducers/projectDataReducer'
import DeviceFrameAndImg from './DeviceFrameAndImg'
import SwipableImages from './SwipableImages'

function ImageInDevice({
  projectData,
  swipable,
  autoPlay,
  indexOfImageIfNotSwipable,
}: {
  projectData: projectDataT,
  swipable: boolean,
  autoPlay?: boolean,
  indexOfImageIfNotSwipable: number
}) {
  return (
    <DeviceFrameAndImg
      indexOfImage={indexOfImageIfNotSwipable}
      projectContent={projectData}
    >
      {swipable &&
        <SwipableImages
          autoPlay={autoPlay}
          projectContent={projectData}
        />
      }
    </DeviceFrameAndImg>
  )
}
export default ImageInDevice
