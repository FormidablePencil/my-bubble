import React, { useContext } from 'react'
import { animated } from 'react-spring'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import { swipebarHeightInEm, swipebarHeightInPx } from '../../../../styles/materialUiStyles';
import { BsArrowBarDown } from 'react-icons/bs';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { ContextSwipeBar } from '../../../../Routes';

function MobileSwipeToViewContentDetailsBar({ children, selectedProjectImage }) {
  const classes = useStyles();

  const { xy, translateSwipeableTab } = useContext(ContextSwipeBar)

  return (
    <animated.div
      style={{
        //@ts-ignore
        transform: xy.interpolate((x, y) => `translateY(${y}px)`)
      }}
      className={classes.detailsSectionWrapper}
    >

      <Button
        className={classes.backBtn}
        onClick={translateSwipeableTab}
      >
        <Grid container alignItems='center' className={classes.backBtnContainer}>
          <IoIosArrowRoundBack color='white' size={35} />
          <Typography color='textPrimary' className={classes.backBtnText} variant='body1'>back to projects</Typography>
        </Grid>
      </Button>
      <div className={classes.content}>


        {children}
      </div>
      <animated.div
        onClick={translateSwipeableTab}
      >
        <Grid container direction='row' alignItems='center' wrap='nowrap'
          className={classes.swipeBarContainer}
        >
          <Grid item container direction='row' alignItems='center' wrap='nowrap'>
            <Grid item direction='row' justify='center' container className={classes.sideGrid}>
              <img
                draggable="false"
                className={classes.selectedContentImg} src={selectedProjectImage} alt='' />
            </Grid>
            <Grid item container direction='column' justify='center' alignItems='center'>
              <BsArrowBarDown color='white' />
              <div>
                <Typography className={classes.disableSelecting} color='textPrimary' variant='caption'>
                  Press a project to see more details
          </Typography>
              </div>
            </Grid>
            <Grid item className={classes.sideGrid}></Grid>
          </Grid>
        </Grid>
      </animated.div>
    </animated.div>
  )
}


const useStyles = makeStyles((theme) => ({
  backBtnContainer: {
    height: swipebarHeightInPx,
    backgroundColor: theme.palette.primary[500],
    paddingLeft: '1em',
    width: '100vh'
  },
  backBtn: {
    margin: 0,
    padding: 0,
    textTransform: 'none',
    position: "absolute",
  },
  backBtnText: {
    paddingTop: '.2em'
  },
  detailsSectionWrapper: {
    position: "absolute",
    zIndex: 10,
    top: `calc(-100vh + ${swipebarHeightInEm})`,
    // transform: 'translate(50px, 100px)',
    // marginTop: - swipebarHeightInEm,
  },
  content: {
    backgroundColor: 'white',
    height: '100vh',
  },

  swipeBarContainer: {
    zIndex: 200,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    // marginTop: - swipebarHeightInPx / 2,
    height: swipebarHeightInPx,
    backgroundColor: theme.palette.primary[500],
    cursor: 'pointer',
  },
  sideGrid: {
    paddingLeft: '2em',
    width: '2.5em',
  },
  selectedContentImg: {
    width: 25,
    height: 25,
    objectFit: "cover",
    padding: 3,
    backgroundColor: theme.palette.primary[800],
    userSelect: 'none',
  },
  disableSelecting: {
    userSelect: 'none',
  }
}));

export default MobileSwipeToViewContentDetailsBar
