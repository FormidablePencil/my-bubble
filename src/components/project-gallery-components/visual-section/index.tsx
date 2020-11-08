import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import SelectableImagesSection from './SelectableImagesSection'
import PrimaryProjectImage from './PrimaryProjectImage'
import { rootReducerT } from '../../../store'
import { MODAL_IMAGE_SELECTED } from '../../../actions/types'

export const useValidatorsRedux = () => {
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
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
  const dispatch = useDispatch()
  const { isMobile } = useValidatorsRedux()

  let mobilePlatformImages = false
  if (projectDataCollection[currentSubjectViewing])
    mobilePlatformImages = (projectDataCollection[currentSubjectViewing].type === 'mobile')

  const onClickProjectImage = (payload) => dispatch({ type: MODAL_IMAGE_SELECTED, payload })


  return (
    <Grid
      className={classes.container}
      container
      direction={isMobile ? 'row' : 'column'} wrap='nowrap'
    >
      <Grid item container
        className={classes.imageContainer}
        alignItems='center'
        direction={mobilePlatformImages ? 'row' : 'column'}
        justify='space-evenly'
        wrap='nowrap'
      >

        <Grid
          onClick={() => onClickProjectImage(0)}
          item
          container
          justify='center'
          style={{ margin: '.5em', }}
        >
          <PrimaryProjectImage />
        </Grid>

        <Grid item>
          <SelectableImagesSection
            onClick={onClickProjectImage}
            mobilePlatformImages={mobilePlatformImages} />
        </Grid>
      </Grid>


    </Grid >
  )
}

export default GalleryContentVisualSection



const useStyles = makeStyles((theme) => ({
  container: {
    width: '14.2em',
    padding: '.5em',

  },
  selectedImage: {
  },
  imageContainer: {
    height: '100%',
  },
  moreImagesSection: {
    background: theme.palette.primary[100]
  },
}));