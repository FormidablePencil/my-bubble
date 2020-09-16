import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../../../store';
import { useValidatorsRedux } from './GalleryContentVisualSection';

function SelectableImagesSection() {
  const { projectDataCollection, currentSubjectViewing } = useSelector((state: rootReducerT) => state)
  const classes = useStyles();

  const { subjectIsSelected, isMobile, imagesExist, amountOfImages } = useValidatorsRedux()

  return (
    <Grid
      className={
        // classes.moreImagesSection
        isMobile && amountOfImages > 2
          ? classes.overflowY
          : amountOfImages > 6 ? classes.overflowX : ''
      }
      item container direction={isMobile ? 'column' : 'row'} wrap='nowrap'>

      {/* //* ====== selectable images section ====== */}
      {subjectIsSelected && imagesExist
        && projectDataCollection[currentSubjectViewing].images.map((url, index) => {
          // if (index === projectDataCollection[currentSubjectViewing].images.length - 1) {
          return (
            <Grid item
              style={{ width: isMobile ? '3em' : '4.5em' }}
              className={classes.item} key={index}>
              <img className={classes.img} src={url} alt='app' />
            </Grid>
          )
          // } else return null
        })}
    </Grid>
  )
}


const useStyles = makeStyles((theme) => ({
  item: {
    margin: '.1em'
  },
  img: {
    width: '95%',
  },
  overflowX: {
    overflowX: 'scroll',
  },
  overflowY: {
    overflowY: 'scroll',
  }
}));

export default SelectableImagesSection
