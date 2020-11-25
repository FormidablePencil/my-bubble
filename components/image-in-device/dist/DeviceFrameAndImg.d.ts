/// <reference types="react" />
import { imagesT } from './ImageInDevice';
import './deviceInImage.sass';
declare function DeviceFrameAndImg({ indexOfImage, images, mobileContentDetailsSection, deviceType, children }: {
    indexOfImage: number;
    images: imagesT;
    mobileContentDetailsSection?: any;
    deviceType: string;
    children?: any;
}): JSX.Element;
export default DeviceFrameAndImg;
