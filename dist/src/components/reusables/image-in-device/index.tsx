import React from 'react'
import DeviceFrameAndImg from './DeviceFrameAndImg'
import SwipableImages from './SwipableImages'

function ImageInDevice({
  projectData,
  swipable,
  autoPlay,
  indexOfImageIfNotSwipable,
}: {
  projectData: projectDataTBit,
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

export interface projectDataTBit {
  title: string
  description: string
  links: {
    client?: string
    server?: string
    cms?: string
    blog?: string
  }
  status: number
  technologies: []
  type: string
  _id: number
  showInPortfolio: boolean
  images: {
    [index: number]: {
      url: string
      device: string
    }
    map?: any
    length?: any
  }
  video: string
}

export default ImageInDevice
