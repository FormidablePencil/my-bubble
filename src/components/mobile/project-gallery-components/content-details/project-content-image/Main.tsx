import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { config, animated, useSpring } from "react-spring";
import { rootReducerT } from "../../../../../store";
import ImageInDevice, {
  SwitchDeviceTypeBtns,
  TransitionDevices,
  TransitionsWrapper,
} from "@bit/formidablepencil.react-reusables.image-in-device";
import {
  filterImagesForSpecifiedDevice,
  imageAvailability,
} from "./deviceInImgUlilities";
import { isMobile } from "react-device-detect";

function ProjectContentImage({
  accordionOpen,
  onClickHandler,
  navigatingProjectAnimation,
}) {
  const projectDataCollection = useSelector(
    (state: rootReducerT) => state.projectDataCollection
  );
  const currentSubjectViewing = useSelector(
    (state: rootReducerT) => state.currentSubjectViewing
  );
  const detailsSectionToggleMobile = useSelector(
    (state: rootReducerT) => state.detailsSectionToggleMobile
  );
  const [isViewingMobileImgs, setIsViewingMobileImgs] = useState(true);
  const [
    delayedDisplayOfProjectContent,
    setDelayedDisplayOfProjectContent,
  ] = useState(false);

  const desktopImages = projectDataCollection[currentSubjectViewing]
    ? filterImagesForSpecifiedDevice(
        projectDataCollection[currentSubjectViewing],
        "web"
      )
    : [];
  const mobileImages = projectDataCollection[currentSubjectViewing]
    ? filterImagesForSpecifiedDevice(
        projectDataCollection[currentSubjectViewing],
        "mobile"
      )
    : [];

  useEffect(() => {
    // if (desktopImages.length === 0) {
    setIsViewingMobileImgs(() => {
      if (mobileImages.length > 0) return true;
      if (desktopImages.length > 0) return false;
      else return true;
    });
    // }
    // eslint-disable-next-line
  }, [currentSubjectViewing]);

  useEffect(() => {
    if (detailsSectionToggleMobile) {
      setTimeout(() => {
        setDelayedDisplayOfProjectContent(true);
      }, 200);
    } else setDelayedDisplayOfProjectContent(false);
  }, [detailsSectionToggleMobile]);

  // const whatTypeOfImagesAvailableRef: whatTypeOfImagesAvailableRefT = useRef([])

  const imageAnim = useSpring({
    to: !accordionOpen
      ? { transform: "scale(1.6)", margin: 70 }
      : { transform: "scale(1)", margin: 20 },
    from: { transform: "scale(1)", margin: 20 },
    config: config.default,
  });

  const switchDevicesHandler = () =>
    setIsViewingMobileImgs((prev) =>
      mobileImages.length > 0 && desktopImages.length > 0 ? !prev : prev
    );

  return (
    <div>
      <div className="switchDevicesBtnContainer">
        <SwitchDeviceTypeBtns
          iconSize={40}
          whatIconsToDisplay={imageAvailability({
            mobileImages,
            desktopImages,
          })}
          isMobile={isViewingMobileImgs}
          onClickHandler={switchDevicesHandler}
        />
      </div>
      <div className={`${navigatingProjectAnimation} `}>
        <animated.div
          className={`imageShowcaseContainer`}
          style={!isMobile ? imageAnim : {}}
          onClick={() => onClickHandler(0)}
        >
          <div
            className={
              !delayedDisplayOfProjectContent ? "display-delay" : "display-none"
            }
            style={{ height: "13em" }}
          />
          <div
            className={
              delayedDisplayOfProjectContent ? "display-delay" : "display-none"
            }
          >
            <TransitionsWrapper>
              {desktopImages.length > 0 && (
                <TransitionDevices
                  deviceType="desktop"
                  // deviceType={projectDataCollection[currentSubjectViewing]?.type}
                  show={!isViewingMobileImgs}
                >
                  <ImageInDevice
                    deviceType={"web"}
                    images={desktopImages}
                    indexOfImageIfNotSwipable={0}
                    swipable={true}
                    autoPlay={true}
                  />
                </TransitionDevices>
              )}
              {mobileImages.length > 0 && (
                <TransitionDevices
                  deviceType={"mobile"}
                  // deviceType={projectDataCollection[currentSubjectViewing]?.type}
                  show={isViewingMobileImgs}
                >
                  <ImageInDevice
                    deviceType={"mobile"}
                    // images={projectDataCollection[currentSubjectViewing]?.images}
                    images={mobileImages}
                    indexOfImageIfNotSwipable={0}
                    swipable={true}
                    autoPlay={true}
                  />
                </TransitionDevices>
              )}
            </TransitionsWrapper>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default ProjectContentImage;
