import React, { useContext } from 'react'
import { animated } from 'react-spring'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import { swipebarHeightInEm, swipebarHeightInPx } from '../../../styles/materialUiStyles';
import { BsArrowBarDown } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { ContextSwipeBar } from '../../../Routes';

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
      ><IoIosArrowBack color='white' size={20} /></Button>
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
                <Typography className={classes.disableSelecting} color='secondary' variant='caption'>
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
  backBtn: {
    position: "absolute",
    top: 5,
    left: 0,
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
    backgroundColor: theme.palette.primary.main,
    cursor: 'pointer',
  },
  sideGrid: {
    width: '5em',
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
