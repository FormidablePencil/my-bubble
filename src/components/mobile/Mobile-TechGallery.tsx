import React from 'react'
import MobileContentDetailsSection from './components/Mobile-ContentDetailsSection'
import TechBrowsingSection from '../techPageComps/TechBrowsingSection'
import { makeStyles, Grid } from '@material-ui/core'
import { useSpring } from 'react-spring';
import { useDispatch } from 'react-redux';
import { SELECTED_TECH } from '../../actions/types';
import { swipebarHeightInEm, swipebarHeightInPx } from '../../styles/materialUiStyles';
import { config } from 'react-spring'
import CompensateForSwipableTabHeight from './reusableComps/CompensateForSwipableTabHeight';

const { innerHeight } = window

function MobileTechGallery() {
  const classes = useStyles();

  const dispatch = useDispatch()
  //swipable tab for pulling up details for item selected
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))

  const onClickItem = (index) => {
    dispatch({ type: SELECTED_TECH, payload: index })
    set({ xy: [0, innerHeight - swipebarHeightInPx], config: config.stiff })
  }

  return (
    <>
      <MobileContentDetailsSection
        xy={xy} set={set}
        viewingProjects={false}
      />
      <Grid container justify='center' className={classes.container}>
        <TechBrowsingSection
          onClickItem={onClickItem}
        />
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
