import React, { Children, cloneElement } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { imagesT } from './ImageInDevice';
import macbookFrame from './images/macbookFrame.png';
import galaxyPhoneFrame from './images/galaxys8Frame.png';
import './deviceInImage.sass';
import 'react-lazy-load-image-component/src/effects/blur.css';


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
  deviceType: 'mobile' | 'web',
  children?
}) {
  const contentStyles = {
    imagesStyles: deviceType === 'web' ? 'webImg' : 'mobileImg',
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
              <img
                // height={120}
                className={contentStyles.imagesStyles}
                src={images && images[indexOfImage]?.url}
                alt='application'
              />
            </div>
          }
          <img
            // delayTime={1000}
            // effect="blur"
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