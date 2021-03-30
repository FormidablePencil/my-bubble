import { makeStyles, Typography } from "@material-ui/core";
import emailjs from "emailjs-com";
import React, { useEffect } from "react";
import { init } from "emailjs-com";

function ContactSection() {
  const classes = useStyles();

  useEffect(() => {
    init("user_wI1MtDUVRWTqeKdhb4pDH");
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_qodb6gu", "template_oo3ywoa", e.target).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }

  return (
    <div className={classes.container}>
      <form className={classes.contactForm} onSubmit={sendEmail}>
        <label className={classes.label}>
          <Typography>Name</Typography>
        </label>
        <input className={classes.input} type="text" name="from_name" />
        <label className={classes.label}>
          <Typography>Email</Typography>
        </label>
        <input className={classes.input} type="email" name="user_email" />
        <label className={classes.label}>
          <Typography>
            Number <span className={classes.optional}>(optional)</span>
          </Typography>
        </label>
        <input className={classes.input} type="text" name="user_number" />
        <label className={classes.label}>
          <Typography>Message</Typography>
        </label>
        <textarea className={classes.textarea} name="message" />
        <input
          className={`${classes.submit} ${classes.input}`}
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contactForm: {
    display: "flex",
    width: "30em",
    flexDirection: "column",
    [theme.breakpoints.down(475)]: {
      width: "20em",
      alignSelf: "center",
    },
  },

  label: {
    margin: ".5em 0",
  },
  input: {
    paddingLeft: "1em",
    background: "#B8CDAA",
    border: "0px",
    borderRadius: "1em",
    outline: "none",
    height: "2em",
  },
  textarea: {
    background: "#B8CDAA",
  },

  submit: {
    alignSelf: "flex-end",
    width: "10em",
    paddingLeft: 0,
    paddingTop: "3px",
    margin: "2em 0",
    height: "2.5em",
    color: "white",
    background: "#129447",
    fontFamily: theme.typography.h6.fontFamily,
    "&:hover": {
      background: "#139E4B",
    },
    "&:active": {
      background: "#107E3C",
    },
    // @extend .primaryBtn
  },

  optional: {
    color: "#C5CDBD",
  },
}));

export default ContactSection;
