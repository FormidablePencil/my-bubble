import React, { Children, cloneElement } from 'react';
import macbookFrame from './images/macbookFrame.png';
import galaxyPhoneFrame from './images/galaxys8Frame.png';
import './deviceInImage.sass';
import 'react-lazy-load-image-component/src/effects/blur.css';
function DeviceFrameAndImg({ indexOfImage, images, logo, mobileContentDetailsSection, deviceType, children }) {
    var _a;
    const contentStyles = {
        imagesStyles: deviceType === 'web' ? 'webImg' : 'mobileImg',
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
                    React.createElement("div", { className: `${contentStyles.swipeableContainerStyles} containerWithlogo` },
                        logo &&
                            React.createElement("div", { className: deviceType === 'mobile' ? 'logo-mobile-bg' : 'logo-desktop-bg' },
                                React.createElement("img", { src: logo, alt: "logo", className: "project-logo user-select-none" })),
                        React.createElement("img", { style: { marginTop: 2, userSelect: 'none' }, className: `${contentStyles.imagesStyles} user-select-none `, src: images && ((_a = images[indexOfImage]) === null || _a === void 0 ? void 0 : _a.url), alt: 'application' })),
                React.createElement("img", { className: `${frameImgStyles} user-select-none`, style: { userSelect: 'none' }, src: deviceType === 'mobile' ? galaxyPhoneFrame : macbookFrame, alt: 'frame' }))));
    }
    else
        return null;
}
export default DeviceFrameAndImg;
