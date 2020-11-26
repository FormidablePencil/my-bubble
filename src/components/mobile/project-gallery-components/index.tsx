import React, { useEffect, useMemo, useRef } from 'react'
import { ContainerFullHeight, swipebarHeightInEm } from '../../../styles/materialUiStyles'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { rootReducerT } from '../../../store'
import MobileContentDetailsSection from './content-details'
import { SELECTED_SUBJECT, TOGGLE_DETAILS_SECTION_MOBILE, UPDATE_CONTACT_PAGE_RENDER } from '../../../actions/types'
import CompensateForSwipableTabHeight from '../CompensateForSwipableTabHeight'
import LineSeperator from '../../reusables/LineSeperator'
// import ImageInDevice from '../../reusables/image-in-device'
import TransitionalAnim from '../../layouts/TransitionalAnim'
import ImageInDevice from '@bit/formidablepencil.react-reusables.image-in-device'

function MobileProjectGallery() {
  const indexOfItemRendered: any = useRef([])
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const contactPageRenderCount = useSelector((state: rootReducerT) => state.pageRenderAmounts.contact)
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch({ type: UPDATE_CONTACT_PAGE_RENDER })
    }
  }, [])

  const onClickItem = (index) => {
    dispatch({ type: SELECTED_SUBJECT, payload: index })
    dispatch({ type: TOGGLE_DETAILS_SECTION_MOBILE })
  }

  const LineSeperatorComp = ({ index }) =>
    <LineSeperator
      overrideStyles={{
        margin: '5em 0em 5em 0em',
        alignSelf: indexOfItemRendered.current[index] % 2 === 0 ? 'flex-start' : 'flex-end',
      }} />

  return (
    <ContainerFullHeight
      className={`${classes.container} not-visible-on-mdUp`}
      disableGutters>
      <Grid
        style={{ paddingTop: swipebarHeightInEm }}
        container direction='column'>

        {/* //~ ======= more details section ======= */}
        <MobileContentDetailsSection />

        <div
          className={`${classes.marginTop}`}
        // className={`
        //     ${classes.marginTop}
        //     not-visible-on-mdUp
        //     ${contactPageRenderCount
        //     ? 'page-fade'
        //     : 'page-translate-anim'
        //   }`}
        >
          <TransitionalAnim onRender={true}>
            {/* //~ ======= gallery section ======= */}
            {projectDataCollection.map((project, index) => {
              if (project.showInPortfolio) indexOfItemRendered.current.push(indexOfItemRendered.current.length)
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
                      <Typography variant='h5' style={{ marginBottom: 10 }}>{project.title}</Typography>
                      <Typography variant='h5'>
                        {project.type === 'mobile' ? '(App)' : '(Website)'}
                      </Typography>
                    </Grid>
                    <Grid
                      item onClick={() => onClickItem(index)}
                      className={classes.imageInDeviceContainer}
                    >
                      <ImageInDevice
                        deviceType={project.type === 'web' ? 'web' : 'mobile'}
                        images={project.images}
                        indexOfImageIfNotSwipable={0}
                        swipable={false}
                        autoPlay={false}
                      />
                    </Grid>


                    <LineSeperatorComp index={indexOfItemRendered.current.length - 1} />


                  </Grid>
                )
            })}
          </TransitionalAnim>
        </div>
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
    display: 'relative',
    paddingTop: '2em',
    overflowY: 'scroll',
    flexDirection: "column",
  },
  imageInDeviceContainer: {
    margin: '4em',
    transform: 'scale(1.4)'
  },
  lineSeperator: {
    margin: '3em 0em 3em 0em',
    width: 200,
    height: 2,
    background: 'white'
  },
  marginTop: {
    marginTop: '4em',
  },
}));

export default MobileProjectGallery
