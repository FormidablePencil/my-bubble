import React from 'react'
import './index.sass';

interface T { children, deviceType: 'desktop' | 'mobile', show: boolean }
const TransitionDevices = ({ children, deviceType, show }: T) =>
  <div
    className={`
      projectInFrame-container
      ${deviceType}-image-in-device
      ${show
        ? `${deviceType}-image-in-device-display-true`
        : `${deviceType}-image-in-device-display-none`
      }`}>
    {children}
  </div>


export default TransitionDevices
