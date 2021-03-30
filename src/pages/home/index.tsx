import { makeStyles } from "@material-ui/core";
import React, { useRef, useState } from "react";
import imgOfSelf from "../../assets/imageOfSelf.jpg";
import HomeContent from "./home-content";
import ProjectsDemo from "./projects-demo";

function HomePage() {
  const classes = useStyles();
  /* Contacts: github, linkedIn & email. Get to know me: self presentation site link. */
  const [videoUrl, setVideoUrl] = useState(
    require("../../assets/VideoGlitch_20210322_113055349.mp4")
  );
  const videoRef = useRef(null);

  const firstVidFinished = async () => {
    setVideoUrl(require("../../assets/My Movie 1.mp4"));
    setTimeout(() => {
      if (videoRef.current !== null) videoRef.current.load();
    }, 2000);
  };

  // const handleCallToAction = () => history.push('/projects')

  return (
    <div
      className={`
      ${classes.overflowX}
    `}
    >
      <video
        onEnded={firstVidFinished}
        controls={false}
        autoPlay
        muted
        ref={videoRef}
        // loop
        className={classes.video}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <HomeContent />

      <ProjectsDemo />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  overflowX: {
    // marginTop: "-2em",
    width: "100vw",
    height: "100vh",
    backgroundImage: "url(" + imgOfSelf + ")",
    backgroundSize: "cover",
    backgroundPosition: "30% 50%",
    // backgroundColor: "#080E15",
  },

  absolute: {
    position: "absolute",
    bottom: 100,
  },
  horizontalDivider: {
    marginBottom: "1em",
    border: "1px solid",
    borderColor: theme.palette.primary[500],
  },
  shortDivider: {
    width: 200,
  },
  regDivider: {
    width: 300,
  },
  longDivider: {
    width: 400,
  },
  callToAction: {
    marginTop: "1.5em",
  },
  video: {
    height: "100vh",
    width: "100vw",
    objectFit: "cover",
    objectPosition: "30% 50%",
  },
}));

export default HomePage;
