import React from 'react'
import { Grid, makeStyles, Typography, Box } from '@material-ui/core'
import staticData from '../../staticData'

function ContactsPage() {
  const classes = useStyles();
  // let history = useHistory();
  /* Contacts: github, linkedIn & email. Get to know me: self presentation site link. */

  // const handleCallToAction = () => history.push('/projects')

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
      {/* <ReactSlider slidesToShow={slidesToShow} /> */}
    </div >
  )
}

const PersonalContacts = () =>
  <Grid container direction='column' justify='center' item style={{ marginTop: '1em' }}>
    <Typography color='textSecondary' style={{ fontSize: 24, marginBottom: '.5em' }}>
      Contact me via email at formidablepencil@gmail.com
  </Typography>
    <Typography color='textSecondary' style={{ fontSize: 24, marginBottom: '.5em' }}>
      <a href="https://github.com/FormidablePencil">Check out my source codes on github</a>
    </Typography>
    <Typography color='textSecondary' style={{ fontSize: 24, marginBottom: '.5em' }}>
      <a href="http://www.dennisaleksandrov.com/">Learn a little more about me</a>
    </Typography>
    <Typography color='textSecondary' style={{ fontSize: 24, marginBottom: '.5em' }}>
      <a href="https://www.linkedin.com/in/dennis-aleksandrov-b6a940167/">Ping me on LinkedIn</a>
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