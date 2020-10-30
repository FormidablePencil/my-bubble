import { makeStyles } from '@material-ui/core'
import React from 'react'

function LineSeperator({ overrideStyles }: { overrideStyles?}) {
  const classes = useStyles();

  return (
    <div
      style={overrideStyles}
      className={classes.lineSeperator} />
  )
}

export default LineSeperator


const useStyles = makeStyles((theme) => ({
  lineSeperator: {
    width: 200,
    height: 2,
    background: theme.palette.primary[300],
    // background: 'white'
  },
}));