import {makeStyles, Typography} from "@material-ui/core";
import React, {useRef, useState} from "react";
import imgOfSelf from "../../assets/imageOfSelf.jpg";
import useNavigateWithAnim from "../../hooks/useNavigateWithAnim";
import ProjectsDemo from "./projects-demo";

function HomePage() {
  const classes = useStyles();
  const onClickNavigateWithAnim = useNavigateWithAnim();
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

      <div className={classes.container}>
        <Typography className={classes.textContainer}>
          Need a mobile app, cms, some fontend or backend framework implemented?
          I'm the guy! I'm a full stack self-taught developer, I have built many
          end to end apps with various different tech stacks. My strong suit is
          JavaScript How may I help you? Lets talk.
        </Typography>
        <div className={classes.btnsContainer}>
          <button
            onClick={() => onClickNavigateWithAnim("/projects")}
            className={classes.actionBtn}
          >
            <Typography>Portfolio</Typography>
          </button>
          <button
            onClick={() => onClickNavigateWithAnim("/contacts")}
            className={classes.actionBtn}
          >
            <Typography>Contacts</Typography>
          </button>
        </div>
      </div>

      <ProjectsDemo />

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
  container: {
    top: "40%",
    position: "absolute",
    maxWidth: "30em",
    zIndex: 1,
    // background: 'black'
    [theme.breakpoints.down(1200)]: {
      top: "50%",
    },
    [theme.breakpoints.down(580)]: {
      backgroundColor: "rgba(0, 0, 0, .5)",
      width: "100vw",
      maxWidth: "100vw",
      padding: "1em",
      margin: 0,
    },
  },
  btnsContainer: {
    display: "flex",
  },
  actionBtn: {
    margin: "1em 0 0 2.5em",
    width: "10em",
    height: "2.3em",
    borderRadius: ".7em",
    border: 0,
    backgroundColor: "#875C62",
    outline: "none",
    "&:hover": {
      backgroundColor: "#98686E",
    },
    "&:active": {
      background: "#755055",
    },
  },
  textContainer: {
    color: theme.typography.h6.color,
    margin: "auto 2em",
    // margin: "3em 0px 3em 0px",
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
