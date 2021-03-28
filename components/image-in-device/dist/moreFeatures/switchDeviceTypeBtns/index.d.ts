/// <reference types="react" />
import "./index.sass";
interface T {
    iconSize: number;
    whatIconsToDisplay: "both" | "mobile" | "desktop";
    isMobile: boolean;
    onClickHandler: () => void;
}
declare const SwitchDeviceTypeBtns: ({ iconSize, whatIconsToDisplay, isMobile, onClickHandler, }: T) => JSX.Element;
export default SwitchDeviceTypeBtns;
