import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MODAL_IMAGE_SELECTED } from '../../actions/types';
import { rootReducerT } from '../../store'
import { AbsoluteYoutubePlayIcon } from '../reusables/AbsoluteIcons';

function ImageSelection({ passedDownClasses }) {
  const [onMouseEnterYoutubeIcon, setOnMouseEnterYoutubeIcon] = useState(false)
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const modalImageSelected = useSelector((state: rootReducerT) => state.modalImageSelected)


  const classes = useStyles();
  const dispatch = useDispatch()

  let platform = projectDataCollection[currentSubjectViewing]
    && projectDataCollection[currentSubjectViewing].type

  const onClickImage = (index) => dispatch({ type: MODAL_IMAGE_SELECTED, payload: index })

  return (
    <div>
      {projectDataCollection[currentSubjectViewing].images.map((imageProps, index) =>
        <Grid
          container
          direction='row'
          onClick={() => onClickImage(index)}
          className={
            index === modalImageSelected ?
              classes.fullOpacity : classes.lowOpacity}>
          <div
            onMouseEnter={() => index === 0 && setOnMouseEnterYoutubeIcon(true)}
            onMouseLeave={() => index === 0 && setOnMouseEnterYoutubeIcon(false)}
            className={classes.relative}>
            {platform === 'mobile' &&
              index === 0 &&
              <AbsoluteYoutubePlayIcon
                fillRed={onMouseEnterYoutubeIcon}
              />
            }
            <img
              className={
                platform === 'mobile'
                  ? passedDownClasses.mobileWidth
                  : `${passedDownClasses.desktopWidth} ${classes.desktopHeight}`}
              src={imageProps.url}
              alt={projectDataCollection[currentSubjectViewing].title} />
          </div>
        </Grid>
      )}
    </div>
  )
}


const useStyles = makeStyles(() => ({
  relative: {
    position: 'relative'
  },
  lowOpacity: {
    opacity: .4,
    transition: 'opacity 300ms',
    '&:hover': {
      cursor: 'pointer',
      opacity: 1,
      transition: 'opacity 300ms'
    }
  },
  fullOpacity: {
    opacity: 1,
  },
  desktopHeight: {
    height: '6em',
    objectFit: 'contain',
    background: 'rgba(0,0,0,.2)'
  },
}));

export default ImageSelection
