import React, { Children, cloneElement } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { imagesT } from './ImageInDevice';
import macbookFrame from './images/macbookFrame.png';
import galaxyPhoneFrame from './images/galaxys8Frame.png';
import './deviceInImage.sass';


function DeviceFrameAndImg({
  indexOfImage,
  images,
  mobileContentDetailsSection,
  deviceType,
  children
}: {
  indexOfImage: number,
  images: imagesT,
  mobileContentDetailsSection?,
  deviceType: string
  children?
}) {
  const contentStyles = {
    imagesStyles: deviceType === 'mobile' ? 'mobileImg' : 'webImg',
    swipeableContainerStyles: deviceType === 'mobile' ? 'swipeableContainerMobile' : 'swipeableContainerDesktop'
  }
  const frameImgStyles = deviceType === 'web' ? 'mobileFrame' : 'webFrame'

  const childrenWithProps = children && Children.map(children, child => {
    return cloneElement(child, {
      contentStyles,
      showMobileImages: images[indexOfImage]?.device === 'mobile',
    })
  })

  if (images) {
    return (
      <>
        <div
          className='container'
          style={mobileContentDetailsSection ?
            {
              transform: 'scale(2)',
              margin: '1em, 0em 1em, 0em'
            } : {}}
        >
          {/* <NavBtn isMobile={true} next={true} /> */}

          {children ? childrenWithProps :
            <div className={contentStyles.swipeableContainerStyles}>
              <LazyLoadImage
                delayTime={3000}
                className={contentStyles.imagesStyles}
                src={images && images[indexOfImage]?.url}
                alt='application'
              />
            </div>
          }
          <img
            className={frameImgStyles}
            src={deviceType === 'mobile' ? galaxyPhoneFrame : macbookFrame}
            alt='frame' />
          {/* <NavBtn isMobile={true} next={false} /> */}

        </div>
      </>
    )
  }
  else return null
}

export default DeviceFrameAndImg