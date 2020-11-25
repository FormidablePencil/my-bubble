/// <reference types="react" />
import { imagesT } from './ImageInDevice';
import './deviceInImage.sass';
import 'react-lazy-load-image-component/src/effects/blur.css';
declare function DeviceFrameAndImg({ indexOfImage, images, mobileContentDetailsSection, deviceType, children }: {
    indexOfImage: number;
    images: imagesT;
    mobileContentDetailsSection?: any;
    deviceType: 'mobile' | 'web';
    children?: any;
}): JSX.Element;
export default DeviceFrameAndImg;
