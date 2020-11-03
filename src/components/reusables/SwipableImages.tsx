import React from 'react'
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core';

function SwipableImages(props) {
  const { projectContent } = props
  const classes = useStyles();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  if (!projectContent)
    return null
  return (
    <div
      style={{ position: "absolute", width: '4.9em' }}>
      <Slider
        {...settings}>
        {projectContent.images.map(imageData =>
          <img
            key={imageData}
            className={classes.imageStyles}
            src={projectContent.images && imageData.url}
            alt='application' />
        )}
      </Slider>
    </div>
  )
}


const useStyles = makeStyles(() => ({
  imageContainer: {
    // width: '10em',
    // height: '10em',
  },
  imageStyles: {
    objectFit: 'contain',
    objectPosition: 'center',
    marginTop: '5px',
    height: '10em',
    width: '4.9em',
    overflow: 'hidden',
  },
}));

export default SwipableImages
