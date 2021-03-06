import { Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../../store';
import { AbsoluteSearchIcon } from '../../reusables/AbsoluteIcons';

function SelectableImagesSection({ mobilePlatformImages, onClick }) {
  const [onMouseEnterYoutubeIcon, setOnMouseEnterYoutubeIcon] = useState(null)
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const subjectIsSelected = typeof currentSubjectViewing === 'number'
  const imagesExist = projectDataCollection[currentSubjectViewing]
  const classes = useStyles();

  return (
    <Grid
      className={classes.container}
      container={mobilePlatformImages ? false : true}
      direction={mobilePlatformImages ? 'column' : 'row'}
      wrap='nowrap'>
      {subjectIsSelected
        && imagesExist
        && projectDataCollection[currentSubjectViewing].images.map((imageProps, index) => {

          if (index > 3 || index === 0)
            return null
          else
            return (
              <Grid
                item container
                className={classes.imageContainer}
                onClick={() => onClick(index)}
                onMouseEnter={() => setOnMouseEnterYoutubeIcon(index)}
                onMouseLeave={() => setOnMouseEnterYoutubeIcon(null)}
                key={index}
              >
                <AbsoluteSearchIcon
                  fillWhite={onMouseEnterYoutubeIcon === index}
                />
                <img className={`
                ${mobilePlatformImages ? classes.imgForMobile : classes.imgForWeb}
                ${onMouseEnterYoutubeIcon === index &&
                  classes.lowOpacity}`} src={imageProps.url} alt='app' />
              </Grid>
            )
        })}
    </Grid >
  )
}


const useStyles = makeStyles(() => ({
  container: {
  },
  imageContainer: {
    cursor: 'pointer',
    border: '1px solid',
    borderColor: 'transparent',
    position: 'relative',
    opacity: 1,

  },
  imgForWeb: {
    objectFit: 'contain',
    width: '4.5em',
    height: "3em",
    transition: 'opacity 500ms',
  },
  imgForMobile: {
    objectFit: 'contain',
    objectPosition: 'center',
    width: '2.9em',
    height: "6em",
    transition: 'opacity 500ms',
  },
  lowOpacity: {
    opacity: .3,
    transition: 'opacity 500ms'
  },
  overflowX: {
    overflowX: 'scroll',
  },
  overflowY: {
    overflowY: 'scroll',
  }
}));

export default SelectableImagesSection
