import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import { Lightbox } from "react-modal-image";
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_IMAGE_MODAL } from '../../actions/types';
import { rootReducerT } from '../../store';
import ImageSelection from './ImageSelection';
import YoutubeVideoPlayer from './YoutubeVideoPlayer';

function ImageModal() {
  const imageModelToggle = useSelector((state: rootReducerT) => state.imageModelToggle)
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const modalImageSelected = useSelector((state: rootReducerT) => state.modalImageSelected)

  let platform = projectDataCollection[currentSubjectViewing]
    && projectDataCollection[currentSubjectViewing].type

  const dispatch = useDispatch()
  const classes = useStyles();

  const toggleImageModel = () => dispatch({ type: TOGGLE_IMAGE_MODAL })

  const ModelItSelf = () => <div className={classes.modalContainer}>
    <Lightbox
      hideZoom
      hideDownload
      imageBackgroundColor={'rgba(0,0,0,.0)'}
      large={
        platform === 'mobile' && modalImageSelected === 0
          ? require('../../assets/transparent.png')
          : projectDataCollection[currentSubjectViewing]?.images[modalImageSelected].url
      }
      onClose={toggleImageModel}
    />
  </div>


  if (!imageModelToggle)
    return null
  else
    return (
      <div>
        <Grid
          container
          direction='column'
          className={`
            scrollbar-visible
            ${classes.imageSectionContainer}
            ${platform === 'mobile'
              ? classes.mobileWidth
              : classes.desktopWidth}`}>

          <ImageSelection
            passedDownClasses={{
              mobileWidth: classes.mobileWidth,
              desktopWidth: classes.desktopWidth
            }}
          />

        </Grid>
        {platform === 'mobile' &&
          <YoutubeVideoPlayer
            youtubeVideoUrl={projectDataCollection[currentSubjectViewing]?.video}
          />
        }

        <ModelItSelf />

      </div >
    )
}


const useStyles = makeStyles(() => ({
  imageSectionContainer: {
    width: '6em',
    position: "absolute",
    top: 100,
    right: 0,
    zIndex: 110,
    overflowX: 'hidden',
    height: '40em',
    paddingRight: 92,
  },
  mobileWidth: {
    width: '5em',
  },
  desktopWidth: {
    width: '10em',
  },
  modalContainer: {
    position: 'relative',
    zIndex: 100,
  },
}));

export default ImageModal
