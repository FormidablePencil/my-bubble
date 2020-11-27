import React from 'react';
import './index.sass';
const TransitionDevices = ({ children, deviceType, show }) => React.createElement("div", { className: `
      ${deviceType}-image-in-device
      ${show
        ? `${deviceType}-image-in-device-display-true`
        : `${deviceType}-image-in-device-display-none`}` }, children);
export const TransitionsWrapper = ({ children }) => React.createElement("div", { className: 'transitionDevicesWrapper' }, children);
export default TransitionDevices;
