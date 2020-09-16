import React from 'react'
import MobileContentDetailsSection from './components/Mobile-ContentDetailsSection'
import TechBrowsingSection from '../techPageComps/TechBrowsingSection'
import { makeStyles, Grid } from '@material-ui/core'
import CompensateForSwipableTabHeight from './reusableComps/CompensateForSwipableTabHeight';

function MobileTechGallery() {
  const classes = useStyles();

  return (
    <>
      <MobileContentDetailsSection
        viewingProjects={false}
      />
      <Grid container justify='center' className={classes.container}>
        <TechBrowsingSection />
        <CompensateForSwipableTabHeight moreHeight={'3em'} />
      </Grid>
    </>
  )
}


const useStyles = makeStyles((theme) => ({
  container: {
    overflowY: 'scroll',
    height: '100vh',
  }
}));

export default MobileTechGallery
