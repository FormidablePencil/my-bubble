import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../store';

function TechLogo({ techTitle }) {
  const techDataCollection = useSelector((state: rootReducerT) => state.techDataCollection)
  const classes = useStyles();
  const techData = techDataCollection.filter(doc => doc.technology === techTitle)[0]

  if (techData && techData.image)
    return (
      <img
        key={techData.image}
        className={classes.techImg}
        src={techData.image}
        alt={techData._id}
      />
    )
  else return null
}

const useStyles = makeStyles(() => ({
  techImg: {
    height: '2em',
    width: '2em',
    margin: '.3em',
    objectFit: 'contain',
  },
}));

export default TechLogo
