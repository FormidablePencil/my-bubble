import React from 'react'
import MobileContentDetailsSection from '../project-gallery-components/content-details'
import TechBrowsingSection from '../../project-gallery-components/browsing-section/TechBrowsingSection'
import { makeStyles, Grid } from '@material-ui/core'
import CompensateForSwipableTabHeight from '../CompensateForSwipableTabHeight';

function MobileTechGallery() {
  const classes = useStyles();

  return (
    <>
      {/* <MobileContentDetailsSection
        viewingProjects={false}
      /> */}
      <Grid container justify='center' className={classes.container}>
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
