import React from 'react'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import staticData from '../../staticData'
import { useHistory } from 'react-router-dom';
import ReactSlider from '../../components/carousel-tech';
import AbsoluteProjectDemo from '../../components/absolute-project-demo';

function ContactsPage({ slidesToShow }) {
  const classes = useStyles();
  let history = useHistory();
  /* Contacts: github, linkedIn & email. Get to know me: self presentation site link. */

  const handleCallToAction = () => history.push('/mybubble/projects')

  return (
    <div className={`
      ${classes.overflowX}
      page-fade
    `}>
      <AbsoluteProjectDemo />
      <div className={classes.container}>
        <Grid
          justify='center'
          container
          direction='column'
          wrap='nowrap'
          className={classes.wrapper}>

          <Grid
            spacing={1}
            container
            alignItems='center'
            direction='column'
            className={classes.textContainer}>
            <Grid item>
              <Typography color='textPrimary' variant='h3'>{staticData.homeAbout.name}</Typography>
            </Grid>
            <div className={`${classes.horizontalDivider} ${classes.longDivider}`} />
            <Grid item>
              <Typography color='textPrimary' variant='h4'>{staticData.homeAbout.paragraph2}</Typography>
            </Grid>
            <div className={`${classes.horizontalDivider} ${classes.regDivider}`} />
            <Grid container direction='column' item alignItems='center' style={{ marginBottom: '1em' }}>
              <Typography color='textSecondary' style={{ fontSize: 24 }}>
                Email:
                formidablepencil@gmail.com
              </Typography>
              <Typography color='textSecondary' style={{ fontSize: 24 }}>
                Checkout my code on <a href="www.google.com">github</a>
              </Typography>
              <Typography color='textSecondary' style={{ fontSize: 24 }}>
                Access my resume <a href="www.google.com">here</a>
              </Typography>
              <Typography color='textSecondary' style={{ fontSize: 24 }}>
                Ping me on <a href="www.google.com">LinkedIn</a>
              </Typography>
            </Grid>
            <Button
              onClick={handleCallToAction}
              className={classes.callToAction}
              variant='contained'
              color='primary'
            >
              View Projects
            </Button>
          </Grid>
        </Grid>
      </div>
      <ReactSlider slidesToShow={slidesToShow} />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  overflowX: {
    overflowX: 'hidden'
  },
  container: {
    height: '100%',
    overflowX: 'hidden'
  },
  wrapper: {
    height: '100%'
  },
  textContainer: {
    margin: '3em 0 3em 0'
  },
  absolute: {
    position: 'absolute',
    bottom: 100,
  },
  horizontalDivider: {
    marginBottom: '1em',
    border: '1px solid',
    borderColor: theme.palette.primary[500],
  },
  shortDivider: {
    width: 200
  },
  regDivider: {
    width: 300
  },
  longDivider: {
    width: 400
  },
  callToAction: {
    marginTop: '1.5em'
  },
}));

export default ContactsPage