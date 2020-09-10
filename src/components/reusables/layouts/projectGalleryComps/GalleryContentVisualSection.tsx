import React from 'react'
import { Button, makeStyles, Grid } from '@material-ui/core'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
// import ScrollArea from 'react-scrollbar'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../../../../store'
import { GridFlex } from '../../../../styles/materialUiStyles';

function GalleryContentVisualSection() {
  const { projectDataCollection, currentSubjectViewing } = useSelector((state: rootReducerT) => state)
  const classes = useStyles()

  const NavBtn = ({ rightDirection }) => {
    return (
      <GridFlex item container justify='center' alignItems='center'>
        <Button onClick={() => console.log('object')}>
          {rightDirection ? <FaChevronCircleRight size={30} /> : <FaChevronCircleLeft size={30} />}
        </Button>
      </GridFlex>
    )
  }

  return (
    <Grid container className={classes.content}>
      <Grid item container>
        <NavBtn rightDirection={false} />
        <img className={classes.imgMain}
          src={typeof currentSubjectViewing === 'number' &&
            projectDataCollection[currentSubjectViewing] ?
            projectDataCollection[currentSubjectViewing].images[0]
            : '123'} alt='' />
        <NavBtn rightDirection={true} />
      </Grid>

      {/* //* selectional images section */}
      <Grid item>
        {/* //~ ScrollArea is outdated */}
        {/* <ScrollArea 
          speed={0.8}
          // className="area"
          contentClassName="scrollArea"
          horizontal={false}
        >
          <div className={classes.scrollableImageSelector}>
            <Grid container justify='center' className={classes.moreimgsGalleryContainer}>
              {typeof currentSubjectViewing === 'number' &&
                projectDataCollection[currentSubjectViewing] &&
                projectDataCollection[currentSubjectViewing].images.map((url, index) => {
                  if (index === projectDataCollection[currentSubjectViewing].images.length - 1) {
                    return (
                      <div className={classes.item} key={index}>
                        <img className={classes.img} src={url} alt='app' />
                      </div>
                    )
                  } else return null
                })}
            </Grid>
          </div>
        </ScrollArea> */}
      </Grid>

    </Grid >
  )
}

export default GalleryContentVisualSection



const useStyles = makeStyles((theme) => ({
  content: {
    overflow: 'hidden',
  },
  imgMain: {
    width: '200px',
    height: '100%',
    objectFit: 'contain',
  },
  item: {
    width: '3.2em',
    height: '6.6em',
    margin: '.1em'
  },
  img: {
    flex: 1,
    width: '100%'
  },
  moreimgsGalleryContainer: {
    width: '7em',
    backgroundColor: 'grey',
  },
  scrollableImageSelector: {
    width: '7em',
    borderWidth: '.05em'
  }
}));