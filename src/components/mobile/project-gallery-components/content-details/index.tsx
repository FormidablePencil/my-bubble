import React from 'react'
import MobileSwipeToViewContentDetailsBar from './Mobile-SwipeToViewContentDetailsBar'
import { makeStyles, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../../../store';
import DeviceFrameAndImg from '../../../reusables/DeviceFrameAndImg';
import LineSeperator from '../../../reusables/LineSeperator';
import CompensateForSwipableTabHeight from '../../CompensateForSwipableTabHeight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { animated } from 'react-spring';
import useContentDetailsImageAnim from '../../../../hooks/useContentDetailsImageAnim';
import { accordionTitleColor } from '../../../../styles/materialUiStyles';
import { GalleryContentDetailSectionFirst, GalleryContentDetailSectionSecond } from '../../../project-gallery-components/details-section';
import SwipableImages from '../../../reusables/SwipableImages';

function MobileContentDetailsSection({ viewingProjects, sortedProjectData }: {
  viewingProjects, sortedProjectData?
}) {
  const classes = useStyles();
  const {
    currentSubjectViewing, projectDataCollection,
    currentTechViewing, techDataCollection
  } = useSelector((state: rootReducerT) => state)

  const { accordionOpen, imageAnim, onClickHandler } = useContentDetailsImageAnim()

  const RenderContent = ({ icon, title, techImg }) => {
    return (
      <MobileSwipeToViewContentDetailsBar
        selectedProjectImage={icon}>
        <Grid className={classes.container} container direction='column' wrap='nowrap'>
          <Grid item container className={classes.titleContainer}>
            <Typography color='textPrimary' style={{ fontSize: 30 }}>{title}</Typography>
          </Grid>
          <Grid item>
            <LineSeperator />
          </Grid>

          {/* //~ ===== images section */}
          <Grid item container justify='center' className={classes.imageContainer}>
            {viewingProjects ?
              <animated.div
                style={imageAnim}
                onClick={() => onClickHandler(0)}
              >
                {/* 
                //~ make library

  //~ render frame depending on images[?].device
  //~ add a switch to toggle between image and desktop images
*/}

                <DeviceFrameAndImg
                  projectContent={projectDataCollection[currentSubjectViewing]}>
                  <SwipableImages
                    projectContent={projectDataCollection[currentSubjectViewing]} />
                </DeviceFrameAndImg>
              </animated.div>
              :
              <img className={classes.contentImage} src={techImg} alt={title} />
            }
          </Grid>
          {/* <Grid item container>
            <SelectableImagesSection />
          </Grid> */}


          {/* //~ ======= details section */}
          <Grid item container className={classes.contentDetails}>
            <Grid container>
              <Grid item container justify='center'>
                <Accordion
                  expanded={accordionOpen === 1}
                  className={classes.accordionContainer}
                  onClick={() => onClickHandler(1)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      className={classes.accordionTitle}
                      variant='h6'>Details</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <GalleryContentDetailSectionFirst sortedProjectData={sortedProjectData} />
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item container justify='center'>
                <Accordion
                  expanded={accordionOpen === 2}
                  className={classes.accordionContainer}
                  onClick={() => onClickHandler(2)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      className={classes.accordionTitle}
                      variant='h6'>More details</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <GalleryContentDetailSectionSecond sortedProjectData={sortedProjectData} />
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>

          </Grid>

          <Grid item container>
            <CompensateForSwipableTabHeight />
          </Grid>
        </Grid>
      </MobileSwipeToViewContentDetailsBar>
    )
  }

  if (viewingProjects && projectDataCollection[currentSubjectViewing])
    return (
      <RenderContent
        icon={projectDataCollection[currentSubjectViewing].images[0]}
        title={projectDataCollection[currentSubjectViewing].title}
        techImg={null}
      />
    )
  else if (!viewingProjects && techDataCollection[currentTechViewing]) //viewing tech
    return (
      <RenderContent
        icon={techDataCollection[currentTechViewing].image}
        title={techDataCollection[currentTechViewing].technology}
        techImg={techDataCollection[currentTechViewing].image}
      />
    )
  else
    return (
      <RenderContent
        icon={null}
        title={null}
        techImg={null}
      />
    )
}

export default MobileContentDetailsSection


const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    width: '100vw',
    background: theme.palette.primary[800],
    overflowY: 'scroll',
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
}));