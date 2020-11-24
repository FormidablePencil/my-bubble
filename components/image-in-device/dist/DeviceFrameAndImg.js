import React, { Children, cloneElement } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import macbookFrame from './images/macbookFrame.png';
import galaxyPhoneFrame from './images/galaxys8Frame.png';
import './deviceInImage.sass';
function DeviceFrameAndImg({ indexOfImage, images, mobileContentDetailsSection, deviceType, children }) {
    var _a;
    const contentStyles = {
        imagesStyles: deviceType === 'mobile' ? 'mobileImg' : 'webImg',
        swipeableContainerStyles: deviceType === 'mobile' ? 'swipeableContainerMobile' : 'swipeableContainerDesktop'
    };
    const frameImgStyles = deviceType === 'web' ? 'mobileFrame' : 'webFrame';
    const childrenWithProps = children && Children.map(children, child => {
        var _a;
        return cloneElement(child, {
            contentStyles,
            showMobileImages: ((_a = images[indexOfImage]) === null || _a === void 0 ? void 0 : _a.device) === 'mobile',
        });
    });
    if (images) {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'container', style: mobileContentDetailsSection ?
                    {
                        transform: 'scale(2)',
                        margin: '1em, 0em 1em, 0em'
                    } : {} },
                children ? childrenWithProps :
                    React.createElement("div", { className: contentStyles.swipeableContainerStyles },
                        React.createElement(LazyLoadImage, { delayTime: 3000, className: contentStyles.imagesStyles, src: images && ((_a = images[indexOfImage]) === null || _a === void 0 ? void 0 : _a.url), alt: 'application' })),
                React.createElement("img", { className: frameImgStyles, src: deviceType === 'mobile' ? galaxyPhoneFrame : macbookFrame, alt: 'frame' }))));
    }
    else
        return null;
}
export default DeviceFrameAndImg;
