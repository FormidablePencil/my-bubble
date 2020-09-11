import React from 'react'
import MobileSwipeToViewContentDetailsBar from './Mobile-SwipeToViewContentDetailsBar'
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../../store';
import DeviceFrameAndImg from '../../reusables/layouts/DeviceFrameAndImg';
import TechContentDetailsSection from '../../techPageComps/TechContentDetailsSection';
import GalleryContentDetailsSection from '../../reusables/layouts/projectGalleryComps/GalleryContentDetailsSection';

/* //* Somehow I need to make make this comp slidable gesture and the page to follow it. */
//listen to when bar reaches a certain threshold swipe down automatically down on release, else swipe back up.

//when clicked on card then pull up project details screen and load a skeleton. Keep the content present and have the bar show the selected project.

//project details section will be one page with project gallery.  
function MobileContentDetailsSection({ viewingProjects, sortedProjectData, xy, set }: {
  viewingProjects, sortedProjectData?, xy, set
}) {
  const classes = useStyles();
  const {
    currentSubjectViewing, projectDataCollection,
    currentTechViewing, techDataCollection
  } = useSelector((state: rootReducerT) => state)

  const RenderContent = ({ icon, title, techImg }) => {
    return (
      <MobileSwipeToViewContentDetailsBar
        xy={xy} set={set}
        selectedProjectImage={icon}>
        <Grid className={classes.container} container direction='column'>
          <Grid item container className={classes.title}>
            <Typography variant='h5'>{title}</Typography>
          </Grid>
          <Grid item container className={classes.image}>
            {viewingProjects ?
              <DeviceFrameAndImg projectContent={projectDataCollection[currentSubjectViewing]} />
              :
              <img className={classes.contentImage} src={techImg} alt={title} />
            }
          </Grid>
          <Grid item container className={classes.contentDetails}>
            {sortedProjectData ?
              <GalleryContentDetailsSection sortedProjectData={sortedProjectData} />
              : <TechContentDetailsSection loading={techDataCollection[currentTechViewing] ? false : true} />
            }

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
  },
  title: {

  },
  image: {

  },
  contentImage: {
    width: 100,
    height: 100,
  },
  contentDetails: {

  },
}));