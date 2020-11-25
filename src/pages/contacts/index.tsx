import React from 'react'
import { Grid, makeStyles, Typography, Box } from '@material-ui/core'
import staticData from '../../staticData'
import { useHistory } from 'react-router-dom';

function ContactsPage({ slidesToShow }) {
  const classes = useStyles();
  let history = useHistory();
  /* Contacts: github, linkedIn & email. Get to know me: self presentation site link. */

  const handleCallToAction = () => history.push('/projects')

  return (
    <div className={`
      ${classes.overflowX}
    `}>
      {/* <AbsoluteProjectDemo /> */}
      <div className={classes.container}>
        <Grid
          container
          direction='column'
          wrap='nowrap'
          className='contacts-text-wrapper'>

          <Grid
            container
            direction='column'
            className={classes.textContainer}>
            <Grid item>
              <Typography
                color='textPrimary' variant='h2'>{staticData.homeAbout.name}</Typography>
            </Grid>
            <Grid item>
              <Box fontStyle="italic">
                <Typography color='textPrimary' variant='h4'>{staticData.homeAbout.paragraph2}</Typography>
              </Box>
          </Grid>
        </Grid>


        <PersonalContacts />


        {/* <Button
            onClick={handleCallToAction}
            className={classes.callToAction}
            variant='contained'
            color='primary'
          >
            View Projects
            </Button> */}
        </Grid>
    </div>
      {/* <ReactSlider slidesToShow={slidesToShow} /> */ }
    </div >
  )
}

const PersonalContacts = () =>
  <Grid container direction='column' justify='center' item style={{ marginTop: '1em' }}>
    <Typography color='textSecondary' style={{ fontSize: 24, marginBottom: '.5em' }}>
      Contact me via formidablepencil@gmail.com
  </Typography>
    <Typography color='textSecondary' style={{ fontSize: 24, marginBottom: '.5em' }}>
      Checkout my code in <a href="www.google.com">github</a>
    </Typography>
    <Typography color='textSecondary' style={{ fontSize: 24, marginBottom: '.5em' }}>
      Access my resume <a href="www.google.com">here</a>
    </Typography>
    <Typography color='textSecondary' style={{ fontSize: 24, marginBottom: '.5em' }}>
      Ping me on <a href="www.google.com">LinkedIn</a>
    </Typography>
  </Grid>


const useStyles = makeStyles((theme) => ({
  overflowX: {
    overflowX: 'hidden'
  },
  container: {
    height: '100%',
    overflowX: 'hidden'
  },
  textContainer: {
    margin: '3em 0px 3em 0px'
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