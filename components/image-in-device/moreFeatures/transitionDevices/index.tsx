import React from 'react'
import './index.sass';

interface T { children, deviceType: 'desktop' | 'mobile', show: boolean }
const TransitionDevices = ({ children, deviceType, show }: T) =>

  <div
    className={`
      ${deviceType}-image-in-device
      ${show
        ? `${deviceType}-image-in-device-display-true`
        : `${deviceType}-image-in-device-display-none`
      }`}
  >
    {children}
  </div>


export const TransitionsWrapper = ({ children }) =>
  <div className='transitionDevicesWrapper'>
    {children}
  </div>

export default TransitionDevices
