import React, { useState } from 'react'
import MobileSwipeToViewContentDetailsBar from './Mobile-SwipeToViewContentDetailsBar'
import { makeStyles, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../../../store';
import LineSeperator from '../../../reusables/LineSeperator';
import CompensateForSwipableTabHeight from '../../CompensateForSwipableTabHeight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { accordionTitleColor } from '../../../../styles/materialUiStyles';
import { GalleryContentDetailSectionFirst, GalleryContentDetailSectionSecond } from '../../../project-gallery-components/details-section';
import ProjectContentImage from './project-content-image';
import NavigationFabs from './project-content-image/NavigationFabs';
import useNavigateProjects from './project-content-image/useNavigateProjects';

const mobileContentDetailsAnim = {
  navOutLeft: 'mobile-content-details-nav-out-left',
  navOutRight: 'mobile-content-details-nav-out-right',
  navInLeft: 'mobile-content-details-nav-in-left',
  navInRight: 'mobile-content-details-nav-in-right'
}

function MobileContentDetailsSection() {
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const classes = useStyles();
  const [navigatingProjectAnimation, setNavigatingProjectAnimation] = useState('')

  // const { accordionOpen, imageAnim, onClickHandler } = useContentDetailsImageAnim()
  const { navigatePrevProject, navigateNextProject, ifCanGoAnyFarther } = useNavigateProjects()
  const [accordionOpen, setAccordionOpen] = useState(null)

  const onClickProjectHandler = (num) => {
    setAccordionOpen(prev => {
      if (prev === num) return 0
      else return num
    })
  }

  const onClickFabPrevHandler = () => {
    if (!ifCanGoAnyFarther({ direction: 'previous' })) return
      setNavigatingProjectAnimation(mobileContentDetailsAnim.navOutLeft)
    setTimeout(() => {
      navigatePrevProject()
      setNavigatingProjectAnimation(mobileContentDetailsAnim.navInLeft)
    }, 1000);
  }

  const onClickFabNextHandler = () => {
    if (!ifCanGoAnyFarther({ direction: 'next' })) return
    setNavigatingProjectAnimation(mobileContentDetailsAnim.navOutRight)
    setTimeout(() => {
      navigateNextProject()
      setNavigatingProjectAnimation(mobileContentDetailsAnim.navInRight)
    }, 1000);
  }

  return (
    <MobileSwipeToViewContentDetailsBar>
      <Grid className={classes.container} container direction='column' wrap='nowrap'>
        <Grid item container className={classes.titleContainer}>
          <Typography color='textPrimary' style={{ fontSize: 30 }}>
            {projectDataCollection[currentSubjectViewing]?.title}
          </Typography>
        </Grid>
        <Grid item>
          <LineSeperator />
        </Grid>

        {/* //~ ===== images section */}
        <Grid item container justify='center' className={classes.imageContainer}>
          <ProjectContentImage
            navigatingProjectAnimation={navigatingProjectAnimation}
            accordionOpen={accordionOpen}
            onClickHandler={onClickProjectHandler}
          />
        </Grid>

        {/* //~ ======= details section */}
        <Grid item container className={classes.contentDetails}>
          <Grid container>
            <Grid item container justify='center'>
              <Accordion
                expanded={accordionOpen === 1}
                className={classes.accordionContainer}
                onClick={() => onClickProjectHandler(1)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    className={classes.accordionTitle}
                    variant='h6'>Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <GalleryContentDetailSectionFirst />
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid className={classes.extraSpaceForNavFabs} item container justify='center'>
              <Accordion
                expanded={accordionOpen === 2}
                className={classes.accordionContainer}
                onClick={() => onClickProjectHandler(2)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    className={classes.accordionTitle}
                    variant='h6'>More details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <GalleryContentDetailSectionSecond />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>

        </Grid>

        <NavigationFabs onClickPrevFab={onClickFabPrevHandler} onClickNextFab={onClickFabNextHandler} />

        <Grid item container>
          <CompensateForSwipableTabHeight />
        </Grid>
      </Grid>
    </MobileSwipeToViewContentDetailsBar>
  )
}

export default MobileContentDetailsSection


const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    width: '100vw',
    overflowY: 'scroll',
    overflowX: 'hidden',
    background: theme.palette.primary[800],
  },
  titleContainer: {
    padding: '5em 3em 0em 3em'
  },
  imageContainer: {
  },
  contentImage: {
    width: 100,
    height: 100,
  },
  contentDetails: {

  },
  accordionContainer: {
    width: '90%',
    margin: '.5em 0em .5em 0em',
  },
  accordionTitle: {
    color: accordionTitleColor,
  },
  extraSpaceForNavFabs: {
    marginBottom: '5em'
  },
}));