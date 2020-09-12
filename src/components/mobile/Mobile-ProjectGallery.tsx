import React, { useRef } from 'react'
import DeviceFrameAndImg from '../reusables/layouts/DeviceFrameAndImg'
import { ContainerFullHeight } from '../../styles/materialUiStyles'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { rootReducerT } from '../../store'
import MobileContentDetailsSection from './components/Mobile-ContentDetailsSection'
import { SELECTED_SUBJECT } from '../../actions/types'
import { useSpring } from 'react-spring'
import { swipebarHeightInPx } from '../../styles/materialUiStyles';
import { config } from 'react-spring'
import CompensateForSwipableTabHeight from './reusableComps/CompensateForSwipableTabHeight'



//make line text closer together and a little margin between text and images

const { innerHeight } = window

function MobileProjectGallery({ sortedProjectData }) {
  const classes = useStyles();
  const { projectDataCollection } = useSelector((state: rootReducerT) => state)
  const indexOfItemRendered: any = useRef(null)

  const dispatch = useDispatch()

  //swipable tab for pulling up details for item selected
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))

  const onClickItem = (index) => {
    dispatch({ type: SELECTED_SUBJECT, payload: index })
    set({ xy: [0, innerHeight - swipebarHeightInPx], config: config.stiff })
  }

  return (
    <ContainerFullHeight
      className={classes.container}
      disableGutters>
      <Grid container direction='column' wrap='nowrap'>
        <MobileContentDetailsSection
          sortedProjectData={sortedProjectData}
          xy={xy} set={set}
          viewingProjects={true} />
        {projectDataCollection.map((project, index) => {
          if (project.showInPorfolio) indexOfItemRendered.current++
          if (!project.showInPorfolio) return null
          else
            return (
              <Grid
                key={project._id} className={classes.itemContainer} item container direction='column' alignItems='center'>
                <Grid item container direction='column' alignItems='center'>
                  <Typography variant='h6'>{project.title}</Typography>
                  <Typography variant='caption'>
                    {project.type === 'mobile' ? '(App)' : '(Website)'}
                  </Typography>
                </Grid>
                <Grid item onClick={() => onClickItem(index)}>
                  <DeviceFrameAndImg projectContent={project} />
                </Grid>
                <div
                  style={{
                    alignSelf: indexOfItemRendered.current % 2 === 0 ? 'flex-start' : 'flex-end'
                  }}
                  className={classes.lineSeperator} />
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

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '2em',
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: "column",
  },
  itemContainer: {
    marginBottom: '3em',
  },
  lineSeperator: {
    marginTop: '3em',
    width: 200,
    height: 2,
    background: 'white'
  },
}));

export default MobileProjectGallery
