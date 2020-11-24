import React, { Suspense } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TheSlider from "react-slick";
function SwipableImages(props) {
    const { contentStyles, images, showMobileImages, autoPlay } = props;
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: autoPlay ? true : false,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false
    };
    const ImageComp = ({ imageProps }) => React.createElement("img", { key: imageProps.url, className: contentStyles.imagesStyles, src: images && imageProps.url, alt: 'application' });
    if (!images)
        return null;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: contentStyles.swipeableContainerStyles },
            React.createElement(Suspense, { fallback: React.createElement("div", null, "kayy") },
                React.createElement(TheSlider, Object.assign({}, settings), images.map(imageProps => {
                    switch (true) {
                        case imageProps.device === 'mobile' && showMobileImages:
                        case imageProps.device === 'web' && !showMobileImages:
                            return React.createElement(React.Fragment, null,
                                React.createElement(ImageComp, { key: imageProps, imageProps: imageProps }));
                        default:
                            return null;
                    }
                }))))));
}
export default SwipableImages;
