import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../../../../store'
import SelectableImagesSection from './SelectableImagesSection'

export const useValidatorsRedux = () => {
  const { projectDataCollection, currentSubjectViewing } = useSelector((state: rootReducerT) => state)
  const subjectIsSelected = typeof currentSubjectViewing === 'number'
  const imagesExist = projectDataCollection[currentSubjectViewing]
  let isMobile = false
  let amountOfImages

  if (imagesExist) {
    isMobile = projectDataCollection[currentSubjectViewing].type === 'mobile'
    amountOfImages = projectDataCollection[currentSubjectViewing].images.length
  }

  return { subjectIsSelected, isMobile, imagesExist, amountOfImages }
}


function GalleryContentVisualSection() {
  const { projectDataCollection, currentSubjectViewing } = useSelector((state: rootReducerT) => state)
  const classes = useStyles()

  const { subjectIsSelected, isMobile, imagesExist } = useValidatorsRedux()

  return (
    <Grid
      className={classes.container}
      container
      justify='space-evenly'
      direction={isMobile ? 'row' : 'column'} wrap='nowrap'
    >
      <Grid item container
        className={classes.selectedImage}
      >
        <img className={isMobile ? classes.imgMainMobile : classes.imgMainContainer}
          src={subjectIsSelected && imagesExist
            ? projectDataCollection[currentSubjectViewing].images[0]
            : '123'} alt='' />
      </Grid>

      <SelectableImagesSection />

    </Grid >
  )
}

export default GalleryContentVisualSection



const useStyles = makeStyles((theme) => ({
  container: {
    width: '14.2em'
  },
  selectedImage: {
    // margin: '0em .5em .5em .5em',
    padding: '.7em'
  },
  imgMainMobile: {
    width: '140px',
    objectFit: 'contain',
  },
  imgMainContainer: {
    width: '100%',
    objectFit: 'contain',
  },
  moreImagesSection: {
    background: theme.palette.primary[100]
    // overflowY: 'scroll',
  },
  // moreimgsGalleryContainer: {
  //   width: '7em',
  //   backgroundColor: 'grey',
  // },
  // scrollableImageSelector: {
  //   width: '7em',
  //   borderWidth: '.05em'
  // }
}));