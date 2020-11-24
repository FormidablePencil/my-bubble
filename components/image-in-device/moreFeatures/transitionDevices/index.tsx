import React from 'react'
import './index.sass';

const TransitionDevices = ({ children, deviceType, show }) =>
  <div className={`
      projectInFrame-container
      ${deviceType}-image-in-device
      ${show
      ? `${deviceType}-image-in-device-display-true`
      : `${deviceType}-image-in-device-display-none`
    }`}>
    {children}
  </div>


export default TransitionDevices
