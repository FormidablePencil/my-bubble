import { makeStyles } from "@material-ui/core";
import React from "react";
import ContactSection from "./ContactSection";
import PersonalContacts from "./PersonalContacts";
import flowerImage from "../../assets/rose.png";

function ContactPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.contactContainer}>
        <div className={classes.innerContactContainer}>
          <PersonalContacts />
          <ContactSection />
        </div>
      </div>
      <div className={classes.imgContainer}>
        <img className={classes.image} src={flowerImage} alt="flower" />
      </div>
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

export default ContactPage;
