import { Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import ContactSection from "./ContactSection";

function ContactPage() {
  return (
    <div>
      <PersonalContacts />
      <ContactSection />
    </div>
  );
}

const PersonalContacts = () => {
  return (
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
        Email: formidablepencil@gmail.com
      </Typography>
      <Typography
        color="textSecondary"
        style={{ fontSize: 24, marginBottom: ".5em" }}
      >
        Github: <a href="https://github.com/FormidablePencil">https://github.com/FormidablePencil</a>
      </Typography>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
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
}));

export default ContactPage;
