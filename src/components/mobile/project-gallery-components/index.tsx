import React, { useContext, useRef } from 'react'
import { ContainerFullHeight, swipebarHeightInEm } from '../../../styles/materialUiStyles'
import { Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { rootReducerT } from '../../../store'
import MobileContentDetailsSection from './content-details'
import { SELECTED_SUBJECT } from '../../../actions/types'
import CompensateForSwipableTabHeight from '../CompensateForSwipableTabHeight'
import LineSeperator from '../../reusables/LineSeperator'
import { ContextSwipeBar } from '../../../Routes'
import ImageInDevice from '../../reusables/image-in-device/ImageInDevice'

//make line text closer together and a little margin between text and images

function MobileProjectGallery({ sortedProjectData }) {
  const classes = useStyles();
  const { projectDataCollection } = useSelector((state: rootReducerT) => state)
  const indexOfItemRendered: any = useRef(null)
  const amountOfShowableProjects = projectDataCollection.filter(item => item.showInPortfolio && item).length
  const xs = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));


  const dispatch = useDispatch()
  const { translateSwipeableTab } = useContext(ContextSwipeBar)

  const onClickItem = (index) => {
    dispatch({ type: SELECTED_SUBJECT, payload: index })
    translateSwipeableTab()
    // set({ xy: [0, innerHeight - swipebarHeightInPx], config: config.stiff })
  }

  return (
    <ContainerFullHeight
      className={classes.container}
      disableGutters>
      <Grid
        style={xs ? { paddingTop: swipebarHeightInEm } : {}}
        container direction='column'>

        {/* //~ ======= more details section ======= */}
        <MobileContentDetailsSection
          sortedProjectData={sortedProjectData}
          viewingProjects={true} />

        {/* //~ ======= gallery section ======= */}
        {projectDataCollection.map((project, index) => {
          if (project.showInPortfolio) indexOfItemRendered.current++
          if (!project.showInPortfolio) return null
          else
            return (
              <Grid
                key={project._id}
                container direction='column' alignItems='center' wrap="nowrap">
                <Grid item container direction='column' alignItems='center' className={classes.removeUserSelecting}>
                  <Typography variant='h6'>{project.title}</Typography>
                  <Typography variant='caption'>
                    {project.type === 'mobile' ? '(App)' : '(Website)'}
                  </Typography>
                </Grid>
                <Grid item onClick={() => onClickItem(index)}>
                  <ImageInDevice
                    projectData={project}
                    indexOfImageIfNotSwipable={0}
                    swipable={true}
                    autoPlay={true}
                  />
                </Grid>

                {index !== amountOfShowableProjects + 1 &&
                  <LineSeperator
                    overrideStyles={{
                      margin: '3em 0em 3em 0em',
                      alignSelf: indexOfItemRendered.current % 2 === 0 ? 'flex-start' : 'flex-end',
                    }} />
                }

              </Grid>
            )
        })}
        <Grid item>
          <CompensateForSwipableTabHeight moreHeight={'2em'} />
        </Grid>
      </Grid>
    </ContainerFullHeight>
  )
}

const useStyles = makeStyles(() => ({
  removeUserSelecting: {
    userSelect: 'none',
    pointerEvents: 'none'
  },
  container: {
    display: 'block',
    paddingTop: '2em',
    overflowY: 'scroll',
    flexDirection: "column",
  },
  lineSeperator: {
    margin: '3em 0em 3em 0em',
    width: 200,
    height: 2,
    background: 'white'
  },
}));

export default MobileProjectGallery
