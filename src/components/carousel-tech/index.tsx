import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { rootReducerT } from "../../store";
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom'

const ReactSlider = ({ slidesToShow }) => {
  const techDataCollection = useSelector((state: rootReducerT) => state.techDataCollection)
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1300,
    slidesToScroll: 3,
  }

  return (
    <Link to='/technologies'>

      <Slider
        className='long-fade'
        slidesToShow={slidesToShow ?? 3}
        {...settings}>
        {techDataCollection.map((tech, index) =>
          <div
            key={tech._id}
            className={classes.techContainer}
            id='hoverEffect'
          >
            <img className={classes.techImg} src={tech.image} alt={tech.technology} />
          </div>
        )}
        {/* <MapTech /> */}
      </Slider>
    </Link>
  );
}

const useStyles = makeStyles(() => ({
  techContainer: {
    width: '9em',
    height: '7.5em',
  },
  techImg: {
    marginLeft: '5%',
    width: '90%',
    height: '100%',
    objectFit: 'contain'
  }
}));

export default ReactSlider