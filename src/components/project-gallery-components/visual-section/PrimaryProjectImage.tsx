import { Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../../../store';
import { imageBoardColor } from '../../../styles/materialUiStyles';
import { AbsoluteYoutubePlayIcon } from '../../reusables/AbsoluteIcons';



function PrimaryProjectImage() {
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const [onMouseEnterYoutubeIcon, setOnMouseEnterYoutubeIcon] = useState(false)
  const classes = useStyles();

  let isMobile = projectDataCollection[currentSubjectViewing]
    && projectDataCollection[currentSubjectViewing].type === 'mobile'
  const subjectIsSelected = typeof currentSubjectViewing === 'number'
  const imagesExist = projectDataCollection[currentSubjectViewing]

  return (
    <div
      // onClick={}
      onMouseEnter={() => setOnMouseEnterYoutubeIcon(true)}
      onMouseLeave={() => setOnMouseEnterYoutubeIcon(false)}
      className={`
      ${isMobile && classes.marginLeft}
      ${classes.container}
      `}>
      <Grid
        container
        className={classes.primaryImageContainer}>
        <img
          className={isMobile ? classes.imgMainMobile : classes.imgMainDesktop}
          src={subjectIsSelected && imagesExist
            ? projectDataCollection[currentSubjectViewing].images[0].url
            : '123'} alt='' />
      </Grid>
      {isMobile &&
        <AbsoluteYoutubePlayIcon
          fillRed={onMouseEnterYoutubeIcon}
          overRideStyles={{
            cursor: 'pointer',
            height: 60,
            width: 60,
          }}
        />
      }
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
    position: 'relative',
  },
  marginLeft: {
    marginLeft: '-.6em',
  },
  imgMainMobile: {
    border: '1px solid',
    borderColor: imageBoardColor,
    width: '100%',
    height: '100%',
  },
  imgMainDesktop: {
    border: '1px solid',
    borderColor: imageBoardColor,
    width: '100%',
    height: '100%',
  },
  primaryImageContainer: {
    cursor: 'pointer',
    padding: '5px 0px 5px 5px'
  }
}));

export default PrimaryProjectImage
