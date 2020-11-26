import React from 'react';
import DeviceFrameAndImg from './DeviceFrameAndImg';
import SwipableImages from './SwipableImages';
function ImageInDevice({ images, swipable, autoPlay, indexOfImageIfNotSwipable, deviceType, logo, }) {
    if (!images || !images[0])
        return null;
    else
        return (React.createElement(React.Fragment, null,
            React.createElement(DeviceFrameAndImg, { logo: logo, deviceType: deviceType, indexOfImage: indexOfImageIfNotSwipable, images: images }, swipable && React.createElement(SwipableImages, { autoPlay: autoPlay, images: images }))));
}
export default ImageInDevice;
