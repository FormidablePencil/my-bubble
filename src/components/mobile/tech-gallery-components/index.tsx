import React, { useEffect } from 'react'
import TechBrowsingSection from '../../project-gallery-components/browsing-section/TechBrowsingSection'
import { makeStyles, Grid } from '@material-ui/core'
import CompensateForSwipableTabHeight from '../CompensateForSwipableTabHeight';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerT } from '../../../store';
import { UPDATE_TECH_PAGE_RENDER } from '../../../actions/types';

function MobileTechGallery() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const techPageRenderCount = useSelector((state: rootReducerT) => state.pageRenderAmounts.tech)

  useEffect(() => {
    return () => {
      dispatch({ type: UPDATE_TECH_PAGE_RENDER })
    }
  }, [])

  return (
    <>
      {/* <MobileContentDetailsSection
        viewingProjects={false}
      /> */}
      <Grid
        container
        justify='center'
        className={`
          not-visible-on-mdUp
          ${classes.container}
          ${techPageRenderCount ? 'page-fade' : 'page-translate-anim'}
       `}>
        <TechBrowsingSection />
        <CompensateForSwipableTabHeight moreHeight={'3em'} />
      </Grid>
    </>
  )
}


const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
  }
}));

export default MobileTechGallery
