import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

function GallerySearchFeatureSection({ projectDataCollection }) {
  const classes = useStyles();
  return (
    <div>
      {projectDataCollection.map((project, index) =>
        <>
          <Typography>{project.title}</Typography>
          <div className={`${classes.line} ${index % 2 === 1 && classes.oddLine}`} />
        </>
      )}
    </div>
  )
}

export default GallerySearchFeatureSection


const useStyles = makeStyles((theme) => ({
  line: {
    width: '90%',
    '&:not(:last-child)': {
      background: 'orange',
      height: '.5px'
    }
  },
  oddLine: {
    width: '80%'
  }
}));