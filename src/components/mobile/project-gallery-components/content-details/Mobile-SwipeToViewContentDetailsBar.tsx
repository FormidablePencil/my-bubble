import React, { memo } from 'react'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import { swipebarHeightInEm, swipebarHeightInPx } from '../../../../styles/materialUiStyles';
import { BsArrowBarDown } from 'react-icons/bs';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerT } from '../../../../store';
import { TOGGLE_DETAILS_SECTION_MOBILE } from '../../../../actions/types';

const MobileSwipeToViewContentDetailsBar = memo(({ children }) => {
  const detailsSectionToggleMobile = useSelector((state: rootReducerT) => state.detailsSectionToggleMobile)
  const classes = useStyles();

  return (
    <div
      className={`
        ${classes.detailsSectionWrapper} 
        ${detailsSectionToggleMobile ? 'content-details-closed' : 'content-details-open'}
        not-visible-on-mdUp
      `}
    >

      <ToggleDetailsSectionBtn />

      <div className={classes.content}>
        {children}
      </div>
      <div className="mobileContentDetailsBar">
        <ToggleDetailsSectionBar />
      </div>
    </div>
  )
})

const ToggleDetailsSectionBtn = memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch()
  return <Button
    className={classes.backBtn}
    onClick={() => dispatch({ type: TOGGLE_DETAILS_SECTION_MOBILE })}
  >
    <Grid container alignItems='center' className={classes.backBtnContainer}>
      <IoIosArrowRoundBack color='white' size={35} />
      <Typography color='textPrimary' className={classes.backBtnText} variant='body1'>back to projects</Typography>
    </Grid>
  </Button>
})

const ToggleDetailsSectionBar = memo(() => {
  const dispatch = useDispatch()
  const classes = useStyles();
  return (
    <div
      onClick={() => dispatch({ type: TOGGLE_DETAILS_SECTION_MOBILE })}>
      <Grid container direction='row' alignItems='center' wrap='nowrap'
        className={classes.swipeBarContainer}
      >
        <Grid item container direction='row' alignItems='center' wrap='nowrap'>
          <Grid item direction='row' justify='center' container className={classes.sideGrid}>
            <AppLogo />
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
    </div>
  )
})

const AppLogo = () => {
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const classes = useStyles();
  return (
    <img
      draggable="false"
      className={classes.selectedContentImg}
      src={
        projectDataCollection[currentSubjectViewing]
          ? projectDataCollection[currentSubjectViewing].logo
          : ''
      }
      alt=''
    />
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
    // backgroundColor: 'white',
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
