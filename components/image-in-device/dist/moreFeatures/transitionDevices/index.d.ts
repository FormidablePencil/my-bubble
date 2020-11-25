/// <reference types="react" />
import './index.sass';
interface T {
    children: any;
    deviceType: 'desktop' | 'mobile';
    show: boolean;
}
declare const TransitionDevices: ({ children, deviceType, show }: T) => JSX.Element;
export declare const TransitionsWrapper: ({ children }: {
    children: any;
}) => JSX.Element;
export default TransitionDevices;
