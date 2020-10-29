import { makeStyles } from '@material-ui/core'
import React from 'react'

function TechLogo({ techData }) {
  const classes = useStyles();

  return (
    <img
      key={techData.image}
      className={classes.techImg}
      src={techData.image}
      alt={techData._id}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  techImg: {
    height: '2em',
    width: '2em',
    margin: '.3em'
  },
}));

export default TechLogo
