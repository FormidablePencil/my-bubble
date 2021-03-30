import { makeStyles, Typography } from "@material-ui/core";
import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import { init } from "emailjs-com";
import { useLoading, Oval } from "@agney/react-loading";

function ContactSection() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const { containerProps, indicatorEl }: any = useLoading({
    loading: isLoading,
    indicator: (
      <div className={classes.loadingIconContainer}>
        <Oval />
      </div>
    ),
  });

  useEffect(() => {
    init("user_wI1MtDUVRWTqeKdhb4pDH");
  }, []);

  function sendEmail(e) {
    setIsLoading(true);
    const { from_name, user_email, message } = e.target;

    e.preventDefault();

    if (from_name.value && user_email.value && message.value)
      emailjs.sendForm("service_qodb6gu", "template_oo3ywoa", e.target).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setIsLoading(false);
          alert("Message has been sent. We'll get back to you shortly.");
        },
        function (error) {
          console.log("FAILED...", error);
          setIsLoading(false);
          alert("Sorry, something went wrong.");
        }
      );
    else {
      setIsLoading(false);
      alert("Please fill in all the input fields. A phone number is optional.");
    }
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
        <button className={`${classes.submit} ${classes.input}`} type="submit">
          Send
          <section {...containerProps}>
            {indicatorEl} {/* renders only while loading */}
          </section>
        </button>
      </form>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  loadingIconContainer: {
    width: 10,
    position: "absolute",
    right: 25,
    top: 10,
  },
  container: {
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
    position: "relative",
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
