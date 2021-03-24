import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import imgOfSelf from "../../assets/imageOfSelf.png";

function ContactsPage() {
  const classes = useStyles();
  // let history = useHistory();
  /* Contacts: github, linkedIn & email. Get to know me: self presentation site link. */
  const [playVideo, setPlayVideo] = useState(true);
  const [videoUrl, setVideoUrl] = useState(
    require("../../assets/VideoGlitch_20210322_113055349.mp4")
  );
  const videoRef = useRef(null);

  useEffect(() => {
    // videoRef.current.play()
  }, []);

  const firstVidFinished = async () => {
    setVideoUrl(require("../../assets/My Movie 1.mp4"));
    setTimeout(() => {
      videoRef.current.load();
    }, 2000);
    // setTimeout(() => {
    // })
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

      {/* <AbsoluteProjectDemo /> */}
      {/* <div className={classes.container}> */}
      {/*   <Grid */}
      {/*     container */}
      {/*     direction="column" */}
      {/*     wrap="nowrap" */}
      {/*     className="contacts-text-wrapper" */}
      {/*   > */}
      {/*     <Grid container direction="column" className={classes.textContainer}> */}
      {/*       <Grid item> */}
      {/*         <Typography color="textPrimary" variant="h2"> */}
      {/*           {staticData.homeAbout.name} */}
      {/*         </Typography> */}
      {/*       </Grid> */}
      {/*       <Grid item> */}
      {/*         <Box fontStyle="italic"> */}
      {/*           <Typography color="textPrimary" variant="h4"> */}
      {/*             {staticData.homeAbout.paragraph2} */}
      {/*           </Typography> */}
      {/*         </Box> */}
      {/*       </Grid> */}
      {/*     </Grid> */}

      {/*     <PersonalContacts /> */}

      {/* <Button
            onClick={handleCallToAction}
            className={classes.callToAction}
            variant='contained'
            color='primary'
          >
            View Projects
            </Button> */}
      {/* </Grid> */}
      {/* </div> */}
      {/* <ReactSlider slidesToShow={slidesToShow} /> */}
    </div>
  );
}

const PersonalContacts = () => (
  <Grid
    container
    direction="column"
    justify="center"
    item
    style={{ marginTop: "1em" }}
  >
    <Typography
      color="textSecondary"
      style={{ fontSize: 24, marginBottom: ".5em" }}
    >
      Contact me via email at formidablepencil@gmail.com
    </Typography>
    <Typography
      color="textSecondary"
      style={{ fontSize: 24, marginBottom: ".5em" }}
    >
      Check out my code through{" "}
      <a href="https://github.com/FormidablePencil">github</a>
    </Typography>
    <Typography
      color="textSecondary"
      style={{ fontSize: 24, marginBottom: ".5em" }}
    >
      Get to know a little{" "}
      <a href="https://www.dennisaleksandrov.com/">about me</a>
    </Typography>
    <Typography
      color="textSecondary"
      style={{ fontSize: 24, marginBottom: ".5em" }}
    >
      Ping me on{" "}
      <a href="https://www.linkedin.com/in/dennis-aleksandrov-b6a940167/">
        LinkedIn
      </a>
    </Typography>
  </Grid>
);

const useStyles = makeStyles((theme) => ({
  overflowX: {
    // marginTop: "-2em",
    overflowX: "hidden",
    width: "100vw",
    height: "100vh",
    backgroundImage: "url(" + imgOfSelf + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundColor: "#080E15",
  },
  container: {
    height: "100%",
    overflowX: "hidden",
  },
  textContainer: {
    margin: "3em 0px 3em 0px",
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
  },
}));

export default ContactsPage;
