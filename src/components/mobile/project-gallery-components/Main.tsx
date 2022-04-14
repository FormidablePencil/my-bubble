import React from 'react'
import { ContainerFullHeight, swipebarHeightInEm } from '../../../styles/materialUiStyles'
import { Grid, makeStyles } from '@material-ui/core'
import MobileContentDetailsSection from './content-details/Main'
import CompensateForSwipableTabHeight from '../CompensateForSwipableTabHeight'
import TransitionalAnim from '../../layouts/TransitionalAnim'
import ProjectDisplay from './project-display'

function MobileProjectGallery() {
  const classes = useStyles();
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   return () => {
  //     dispatch({ type: UPDATE_CONTACT_PAGE_RENDER })
  //   }
  // }, [])



  return (
    <ContainerFullHeight
      className={`${classes.container} not-visible-on-mdUp`}
      disableGutters>
      <Grid
        style={{ paddingTop: swipebarHeightInEm }}
        container
        direction='column'>

        {/* //~ ======= more details section ======= */}
        <MobileContentDetailsSection />

        <div
          style={{ width: '100%' }}
          className={`${classes.marginTop}`}
        // className={`
        //     ${classes.marginTop}
        //     not-visible-on-mdUp
        //     ${contactPageRenderCount
        //     ? 'page-fade'
        //     : 'page-translate-anim'
        //   }`}
        >
          <TransitionalAnim
            onRender={true}>
            {/* //~ ======= gallery section ======= */}
            <ProjectDisplay />
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
  container: {
    display: 'relative',
    paddingTop: '2em',
    overflowY: 'scroll',
    flexDirection: "column",
  },
  imageInDeviceContainer: {
    cursor: 'pointer',
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
