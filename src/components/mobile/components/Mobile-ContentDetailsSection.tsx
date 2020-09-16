import React from 'react'
import MobileSwipeToViewContentDetailsBar from './Mobile-SwipeToViewContentDetailsBar'
import { makeStyles, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../../store';
import DeviceFrameAndImg from '../../reusables/layouts/DeviceFrameAndImg';
import LineSeperator from '../../reusables/layouts/LineSeperator';
import CompensateForSwipableTabHeight from '../reusableComps/CompensateForSwipableTabHeight';
import GalleryContentDetailsSection, { GalleryContentMoreDetailsSection } from '../../reusables/layouts/projectGalleryComps/GalleryContentDetailsSection';
import TechContentDetailsSection from '../../techPageComps/TechContentDetailsSection';
import { animated } from 'react-spring';
import useContentDetailsImageAnim from '../../../hooks/useContentDetailsImageAnim';


/* //* Somehow I need to make make this comp slidable gesture and the page to follow it. */
//listen to when bar reaches a certain threshold swipe down automatically down on release, else swipe back up.

//when clicked on card then pull up project details screen and load a skeleton. Keep the content present and have the bar show the selected project.

//project details section will be one page with project gallery.  

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
            <Typography style={{ fontSize: 30 }} color='textPrimary'>{title}</Typography>
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
                <DeviceFrameAndImg
                  /* //* increase size of image in mobile details section */
                  projectContent={projectDataCollection[currentSubjectViewing]} />
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
            {sortedProjectData ? /* if details of a project */
              <Grid container>
                <Grid item container justify='center'>
                  <Accordion
                    expanded={accordionOpen === 1}
                    className={classes.accordionContainer}
                    onClick={() => onClickHandler(1)}
                  >
                    <AccordionSummary>
                      <Typography variant='h6'>Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <GalleryContentDetailsSection sortedProjectData={sortedProjectData} />
                    </AccordionDetails>
                  </Accordion>
                </Grid>

                <Grid item container justify='center'>
                  <Accordion
                    expanded={accordionOpen === 2}
                    className={classes.accordionContainer}
                    onClick={() => onClickHandler(2)}
                  >
                    <AccordionSummary>
                      <Typography variant='h6'>More details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <GalleryContentMoreDetailsSection sortedProjectData={sortedProjectData} />
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>

              : /* if details of a tech */
              <TechContentDetailsSection loading={techDataCollection[currentTechViewing] ? false : true} />
            }

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
    padding: '3em 3em 0em 3em'
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
}));