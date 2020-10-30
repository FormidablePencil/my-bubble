import React from 'react'
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core';

function SwipableImages(props) {
  const { projectContent, type, imageStyles } = props
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
        {projectContent.images.map(image =>
          <img
          className={classes.imageStyles}
          src={projectContent.images && image}
          alt='application' />
        )}
      </Slider>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
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
