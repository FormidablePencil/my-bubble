import React from "react";
import { BsPhone } from "react-icons/bs";
import { AiOutlineDesktop } from "react-icons/ai";
import "./index.sass";
const SwitchDeviceTypeBtns = ({ iconSize, whatIconsToDisplay, isMobile, onClickHandler, }) => (React.createElement("div", { className: "switchDeviceTypeBtns", onClick: onClickHandler },
    (whatIconsToDisplay === "both" || whatIconsToDisplay === "mobile") && (React.createElement(BsPhone, { color: isMobile ? "white" : "#7FA96D", size: iconSize, style: { margin: "0 0 1em 1em", zIndex: 20 } })),
    (whatIconsToDisplay === "both" || whatIconsToDisplay === "desktop") && (React.createElement(AiOutlineDesktop, { color: !isMobile ? "white" : "#7FA96D", size: iconSize, style: { margin: "0 0 0 1em", zIndex: 200 } }))));
export default SwitchDeviceTypeBtns;
