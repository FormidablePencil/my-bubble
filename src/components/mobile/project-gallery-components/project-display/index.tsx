import ImageInDevice from '@bit/formidablepencil.react-reusables.image-in-device'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { animated } from 'react-spring'
import { SELECTED_PROJECT, TOGGLE_DETAILS_SECTION_MOBILE } from '../../../../actions/types'
import { clickProjectGA } from '../../../../App'
import useTrailOnFirstRender from '../../../../hooks/useTrailOnFirstRender'
import { rootReducerT } from '../../../../store'
import LineSeperator from '../../../reusables/LineSeperator'

function ProjectDisplay() {
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const projectsPageRenderCount = useSelector((state: rootReducerT) => state.pageRenderAmounts.projects)
  const indexOfItemRendered = useRef('odd')
  const dispatch = useDispatch()
  const trail = useTrailOnFirstRender({
    pageRendered: projectsPageRenderCount,
    trailLength: projectDataCollection.length,
    trailDelay: 200,
  })

  const classes = useStyles();

  const onClickItem = (index) => {
    clickProjectGA({ projectName: projectDataCollection[index].title })
    dispatch({ type: SELECTED_PROJECT, payload: index })
    // setTimeout(() => {
      dispatch({ type: TOGGLE_DETAILS_SECTION_MOBILE })
    // }, 1000);
  }

  const ProjectTitle = ({ project }) =>
    <>
      <Typography variant='h5' style={{ marginBottom: 10 }}>{project.title}</Typography>
      <Typography variant='h5'>
        {project.type === 'mobile' ? '(Android app)' : '(Website)'}
      </Typography>
    </>

  return (
    <>
      {trail.map((trailProps, index) => {
        let project = projectDataCollection[index]
        if (project.showInPortfolio)
          indexOfItemRendered.current === 'odd'
            ? indexOfItemRendered.current = 'even'
            : indexOfItemRendered.current = 'odd'
        if (!project.showInPortfolio) return null
        else
          return (
            <Grid
              key={project._id}
              container direction='column' alignItems='center' wrap="nowrap">
              <Grid
                item container
                justify='center'
                direction='column'
                alignItems='center'
                className={classes.removeUserSelecting}
              >
                <ProjectTitle project={project} />
              </Grid>
              <Grid
                item onClick={() => onClickItem(index)}
                className={classes.imageInDeviceContainer}
              >
                <animated.div style={index < 2 ? trailProps : {}}>
                  <ImageInDevice
                    logo={project.logo}
                    deviceType={project.type === 'web' ? 'web' : 'mobile'}
                    images={project.images}
                    indexOfImageIfNotSwipable={0}
                    swipable={false}
                    autoPlay={false}
                  />
                </animated.div>
              </Grid>

              <LineSeperator
                overrideStyles={{
                  margin: '5em 0em 5em 0em',
                  alignSelf: indexOfItemRendered.current === 'odd' ? 'flex-start' : 'flex-end',
                }} />

            </Grid>
          )
      })}
    </>
  )
}

const useStyles = makeStyles(() => ({
  removeUserSelecting: {
    userSelect: 'none',
    pointerEvents: 'none'
  },
  imageInDeviceContainer: {
    cursor: 'pointer',
    margin: '4em',
    transform: 'scale(1.4)'
  },
}));

export default ProjectDisplay
