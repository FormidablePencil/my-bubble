import ImageInDevice from "@bit/formidablepencil.react-reusables.image-in-device";
import { makeStyles } from "@material-ui/core";
import React from "react";
import "./index.scoped.sass";

function ProjectsDemo() {
  const classes = useStyles();
  const desktopImages = [
    {
      device: "web",
      url: "https://i.ibb.co/HYcQx7M/Screen-Shot-2021-03-02-at-8-56-14-PM.jpg",
    },
    {
      device: "web",
      url: "https://i.ibb.co/HYcQx7M/Screen-Shot-2021-03-02-at-8-56-14-PM.jpg",
    },
  ];
  const mobileImages = [
    { device: "mobile", url: "https://i.ibb.co/c1b7w8T/mobile3.jpg" },
    { device: "mobile", url: "https://i.ibb.co/c1b7w8T/mobile3.jpg" },
  ];

  return (
    <div className={`${classes.container} animate-in-home-proj-showcase`}>
      {desktopImages[0] && (
        <div className={classes.desktopContainer}>
          <div>
            <ImageInDevice
              images={desktopImages}
              deviceType={"web"}
              swipable={true}
              autoPlay={true}
              indexOfImageIfNotSwipable={0}
            />
          </div>
        </div>
      )}
      {mobileImages[0] && (
        <div className={classes.mobileContainer}>
          {/* <TransitionDevices deviceType="mobile" show={viewingMobile}> */}
          <ImageInDevice
            images={mobileImages}
            deviceType={"mobile"}
            swipable={true}
            autoPlay={true}
            indexOfImageIfNotSwipable={0}
          />
          {/* </TransitionDevices> */}
        </div>
      )}
      <div className={classes.divider}></div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    zIndex: 1,
    top: "41%",
    right: 0,
    display: "flex",
    [theme.breakpoints.down(1200)]: {
      top: "20%",
      marginLeft: "2em",
      // width: "100vw",
      // justifyContent: "center",
      left: 45,
    },
    [theme.breakpoints.down(580)]: {
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      left: 0,
      margin: 0,
      paddingLeft: "2.5em",
    },
  },
  desktopContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "scale(1.5)",
    [theme.breakpoints.down(420)]: {
      marginLeft: "-2.5em",
      transform: "scale(1.1)",
    },
  },
  mobileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "-2em",
    [theme.breakpoints.down(420)]: {
      transform: "scale(.7)",
      marginLeft: "-3em",
    },
  },
  divider: {
    position: "absolute",
    zIndex: 1,
    bottom: "-1em",
    right: 0,
    background: "#BB7174",
    width: "23em",
    height: "1px",
    [theme.breakpoints.down(1200)]: {
      display: "none",
    },
  },
}));

export default ProjectsDemo;
