import React from 'react'
import DeviceFrameAndImg from './DeviceFrameAndImg'
import SwipableImages from './SwipableImages'

function ImageInDevice({
  images,
  swipable,
  autoPlay,
  indexOfImageIfNotSwipable,
  deviceType,
  logo,
}: {
  images: imagesT | void,
  swipable: boolean,
  autoPlay?: boolean,
  indexOfImageIfNotSwipable: number
  deviceType: 'mobile' | 'web',
  logo?: string,
}) {

  if (!images || !images[0])
    return null
  else
    return (
      <>
        <DeviceFrameAndImg
          logo={logo}
          deviceType={deviceType}
          indexOfImage={indexOfImageIfNotSwipable}
          images={images}
        >
          {swipable && <SwipableImages autoPlay={autoPlay} images={images} />}
        </DeviceFrameAndImg>
      </>
    )
}

export interface imagesT { [index: number]: { device: string, url: string } }

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
