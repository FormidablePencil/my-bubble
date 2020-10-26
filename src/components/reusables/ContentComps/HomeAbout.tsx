import React, { useEffect, useState } from 'react'
import { Grid, Link, makeStyles, Typography } from '@material-ui/core'
import staticData from '../../../staticData'
import ReactSlider from '../../ReactSlider';
import DeviceFrameAndImg from '../layouts/DeviceFrameAndImg';
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../../store';
import AbsoluteDeviceDemo from '../../desktop/AbsoluteDeviceDemo';

function HomeAbout() {
  const classes = useStyles();
  const { projectDataCollection } = useSelector((state: rootReducerT) => state)

  /* Contacts: github, linkedIn & email. Get to know me: self presentation site link. */

  // const [deviceFramesInHomePagePresent, setDeviceFramesInHomePagePresent] = useState(false)

  // const ToggleDeviceFramesInHomePagePresent = () => {
  //   console.log(window.innerHeight);
  //   if (window.innerHeight < 800)
  //     setDeviceFramesInHomePagePresent(false)
  //   else
  //     setDeviceFramesInHomePagePresent(true)
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', ToggleDeviceFramesInHomePagePresent)
  //   return () => window.removeEventListener('resize', ToggleDeviceFramesInHomePagePresent)
  // }, [])



  return (
    <div className={classes.overflowX}>
      <AbsoluteDeviceDemo />
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
            <Grid item style={{ marginBottom: '1em' }}>
              <Typography color='textPrimary' variant='h3'>{staticData.homeAbout.name}</Typography>
              <div className={`${classes.horizontalDivider} ${classes.longDivider}`} />
            </Grid>
            <Grid item style={{ marginBottom: '1em' }}>
              <Typography color='textPrimary' variant='h4'>{staticData.homeAbout.paragraph2}</Typography>
              <div className={`${classes.horizontalDivider} ${classes.regDivider}`} />
            </Grid>
            <Grid container direction='column' item alignItems='center' style={{ marginBottom: '1em' }}>
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
          </Grid>
        </Grid>
      </div>
      <ReactSlider />
    </div>
  )
}

export default HomeAbout


const useStyles = makeStyles((theme) => ({
  overflowX: {
    overflowX: 'hidden'
  },
  container: {
    height: '70vh',
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
    border: '1px solid',
    borderColor: theme.palette.primary.main,
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
}));