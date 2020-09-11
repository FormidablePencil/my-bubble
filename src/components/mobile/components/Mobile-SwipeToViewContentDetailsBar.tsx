import React from 'react'
import { config, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { swipebarHeightInEm, swipebarHeightInPx } from '../../../styles/materialUiStyles';
import { BsArrowBarDown } from 'react-icons/bs';

const { outerHeight, innerHeight } = window

function MobileSwipeToViewContentDetailsBar({ children, selectedProjectImage, xy, set }) {
  const classes = useStyles();

  const bind = useDrag(({ down, movement }) => {
    if (!down && movement[1] >= outerHeight / 2)
      return set({ xy: [0, innerHeight - swipebarHeightInPx], config: config.stiff })

    if (movement[1] <= 0)
      set({ xy: [0, 0], config: config.stiff })
    else if (movement[1] >= outerHeight)
      set({ xy: [0, 0], config: config.stiff })
    else
      set({ xy: down ? movement : [0, 0], config: config.stiff })
  })

  return (
    <animated.div
      style={{
        //@ts-ignore
        transform: xy.interpolate((x, y) => `translateY(${y}px)`)
      }}
      className={classes.detailsSectionWrapper}
    >
      <div className={classes.content}>
        {children}
      </div>
      <animated.div
        {...bind()}
      >
        <Grid container direction='row' alignItems='center' wrap='nowrap'
          className={classes.swipeBarContainer}
        >
          <Grid item direction='row' justify='center' container className={classes.sideGrid}>
            <img className={classes.selectedContentImg} src={selectedProjectImage} alt='' />
          </Grid>
          <Grid item container direction='column' justify='center' alignItems='center'>
            <BsArrowBarDown color='white' />
            <div>
              <Typography color='secondary' variant='caption'>
                Press a project to see more details
          </Typography>
            </div>
          </Grid>
          <Grid item className={classes.sideGrid}>
          </Grid>
        </Grid>
      </animated.div>
    </animated.div>
  )
}


const useStyles = makeStyles((theme) => ({
  detailsSectionWrapper: {
    position: "absolute",
    zIndex: 10,
    top: `calc(-100vh + ${swipebarHeightInEm})`,
    // marginTop: swipebarHeight
  },
  content: {
    backgroundColor: 'white',
    height: '100vh',
  },
  swipeBarContainer: {
    width: '100%',
    marginTop: - swipebarHeightInPx,
    height: swipebarHeightInPx,
    backgroundColor: theme.palette.primary.main,
  },
  sideGrid: {
    width: '5em',
  },
  selectedContentImg: {
    width: 25,
    height: 25,
    objectFit: "cover",
    padding: 3,
    backgroundColor: theme.palette.primary[800]
  }
}));

export default MobileSwipeToViewContentDetailsBar
