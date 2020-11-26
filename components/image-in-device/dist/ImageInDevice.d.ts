/// <reference types="react" />
declare function ImageInDevice({ images, swipable, autoPlay, indexOfImageIfNotSwipable, deviceType, logo, }: {
    images: imagesT | void;
    swipable: boolean;
    autoPlay?: boolean;
    indexOfImageIfNotSwipable: number;
    deviceType: 'mobile' | 'web';
    logo?: string;
}): JSX.Element;
export interface imagesT {
    [index: number]: {
        device: string;
        url: string;
    };
}
export interface projectDataTBit {
    title: string;
    description: string;
    links: {
        client?: string;
        server?: string;
        cms?: string;
        blog?: string;
    };
    status: number;
    technologies: [];
    type: string;
    _id: number;
    showInPortfolio: boolean;
    images: {
        [index: number]: {
            url: string;
            device: string;
        };
        map?: any;
        length?: any;
    };
    video: string;
}
export default ImageInDevice;
