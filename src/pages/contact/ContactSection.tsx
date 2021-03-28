import {makeStyles} from "@material-ui/core";
import emailjs from "emailjs-com";
import React from "react";

function ContactSection() {
  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_w6bk0tf", "template_3pyf0pj", e.target).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }

  return (
    <div className="">
      <div className={classes.formContainer}>
        <form className={classes.contactForm} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>
            Number <span className={classes.optional}>(optional)</span>
          </label>
          <input type="text" name="user_number" />
          <label>Message</label>
          <textarea name="message" />
          <input className="submit" type="submit" value="Send" />
        </form>
      </div>
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

  formContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  contactForm: {
    display: "flex",
    width: "20em",
    flexDirection: "column",
  },

  label: {
    margin: ".5em 0",
  },
  input: {
    paddingLeft: "1em",
    background: "white",
    border: "0px",
    borderRadius: "1em",
    outline: "none",
    height: "2em",
  },
  textarea: {
    background: "white",
  },

  submit: {
    width: "100%",
    paddingLeft: 0,
    margin: "1.5em 0",
    height: "2.5em",
    // @extend .primaryBtn
  },

  optional: {
    color: "grey",
  },
}));

export default ContactSection;
