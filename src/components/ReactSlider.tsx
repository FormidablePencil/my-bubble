import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { rootReducerT } from "../store";
import { Grid, makeStyles } from "@material-ui/core";

const ReactSlider = () => {
  const { techDataCollection } = useSelector((state: rootReducerT) => state)
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1300,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  return (
    <div>
      <Slider
        {...settings}>
        {
          techDataCollection.map((tech, index) =>
            <div
              key={tech._id}
              className={classes.techContainer}
              id='hoverEffect'
            // style={{backgroundColor: '#1D1F42'}}
            >
              <img className={classes.techImg} src={tech.image} alt={tech.technology} />
              {/* <>{tech.description} {tech.technology}</> */}
            </div>
          )
        }
      </Slider>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
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