import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../../../store';
import { useValidatorsRedux } from './GalleryContentVisualSection';

function SelectableImagesSection({mobilePlatformImages}) {
  const { projectDataCollection, currentSubjectViewing } = useSelector((state: rootReducerT) => state)
  const classes = useStyles();
  const { subjectIsSelected, imagesExist, amountOfImages } = useValidatorsRedux()

  return (
    <Grid
      container={mobilePlatformImages ? false : true}
      direction={mobilePlatformImages ? 'column' : 'row'}
      wrap='nowrap'>
      {subjectIsSelected
        && imagesExist
        && projectDataCollection[currentSubjectViewing].images.map((url, index) => {

          let margin = '1px'

          if (index < 3) {
            return (
              <Grid item
                container
                style={{ width: mobilePlatformImages ? '3em' : '4.5em', margin }}
                className={classes.imageContainer} key={index}>
                <img className={classes.img} src={url} alt='app' />
              </Grid>
            )
          } else return null
        })}
    </Grid>
  )
}


const useStyles = makeStyles((theme) => ({
  imageContainer: {
    border: '.5px solid',
    borderColor: theme.palette.primary.main
  },
  img: {
    width: '100%',
  },
  overflowX: {
    overflowX: 'scroll',
  },
  overflowY: {
    overflowY: 'scroll',
  }
}));

export default SelectableImagesSection
