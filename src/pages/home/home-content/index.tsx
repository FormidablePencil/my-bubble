import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import useNavigateWithAnim from "../../../hooks/useNavigateWithAnim";
import "./index.scoped.sass";
import '../../../styles/animations/homeContentAnim.sass'

function HomeContent() {
  const classes = useStyles();
  const onClickNavigateWithAnim = useNavigateWithAnim();

  return (
    <div className={`${classes.container} animate-in-home-content`}>
      <Typography className={classes.textContainer} style={{marginTop: 20}}>
        Do you need a mobile app, some CMS, frontend or backend functionality implemented?
        My name is Dennis, I'm a full stack software engineer and how may I assist you?
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
  );
}

export default HomeContent;

const useStyles = makeStyles((theme) => ({
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
    backgroundColor: "#D60A32",
    outline: "none",
    "&:hover": {
      backgroundColor: "#EB0835",
    },
    "&:active": {
      background: "#EB0835",
    },
  },
  textContainer: {
    color: theme.palette.text.primary,
    margin: "auto 2em",
    // margin: "3em 0px 3em 0px",
  },
}));
