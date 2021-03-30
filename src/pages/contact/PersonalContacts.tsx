import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const PersonalContacts = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography color="textSecondary" className={classes.typography}>
        Email: formidablepencil@gmail.com
      </Typography>
      <Typography color="textSecondary" className={classes.typography}>
        Github:{" "}
        <a href="https://github.com/FormidablePencil">
          https://github.com/FormidablePencil
        </a>
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {},
  typography: {
    fontSize: 18,
    marginBottom: ".5em",
  },
}));

export default PersonalContacts;
