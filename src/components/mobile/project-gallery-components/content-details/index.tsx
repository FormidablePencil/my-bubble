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

function MobileContentDetailsSection() {
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const classes = useStyles();

  // const { accordionOpen, imageAnim, onClickHandler } = useContentDetailsImageAnim()
  const [accordionOpen, setAccordionOpen] = useState(null)

  const onClickHandler = (num) => {
    setAccordionOpen(prev => {
      if (prev === num) return 0
      else return num
    })
  }


  return (
    <MobileSwipeToViewContentDetailsBar>
      <Grid className={classes.container} container direction='column' wrap='nowrap'>
        <Grid item container className={classes.titleContainer}>
          <Typography color='textPrimary' style={{ fontSize: 30 }}>{projectDataCollection[currentSubjectViewing]?.title}</Typography>
        </Grid>
        <Grid item>
          <LineSeperator />
        </Grid>

        {/* //~ ===== images section */}
        <Grid item container justify='center' className={classes.imageContainer}>
        <ProjectContentImage accordionOpen={accordionOpen} onClickHandler={onClickHandler} />
 
        </Grid>

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
                  <GalleryContentDetailSectionFirst />
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
                  <GalleryContentDetailSectionSecond />
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