import { makeStyles } from "@material-ui/core";
import React from "react";
import ContactSection from "../contact/ContactSection";
import PersonalContacts from "../contact/PersonalContacts";
import flowerImage from "../../assets/rose.png";
import resume1 from "../../assets/A4 - 13_paper_focused.jpg"
import ProjectContentImage from "../../components/mobile/project-gallery-components/content-details/project-content-image/Main";

function ResumesPage() {
  const classes = useStyles();
  return (
    <div className="w-12">
        <img height="400" src="https://i.ibb.co/Q7g6dBtn/Desktop-1-1.jpg" />
        <img height="400" src="https://i.ibb.co/V04cJ5Zq/A4-13-paper-focused.jpg" />
        <img height="400" src="https://i.ibb.co/cKTwbXZn/IMG-20250718-000358.png" />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    height: "calc(100vh - 3em)",
    alignItems: "center",
    [theme.breakpoints.down(390)]: {
      transform: "scale(.8)",
      marginLeft: "-2em",
    },
  },
  contactContainer: {
    margin: "1em",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContactContainer: {
    maxWidth: "28em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  imgContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down(800)]: {
      zIndex: -1,
      position: "absolute",
      opacity: ".5",
      width: "100%",
      justifyContent: "center",
    },
  },
  image: {
    objectFit: "contain",
    width: "15em",
    height: "15em",
  },
}));

export default ResumesPage;
