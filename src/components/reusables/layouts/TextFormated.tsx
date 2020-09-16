import React from 'react'
import { makeStyles, Typography } from "@material-ui/core"

const TextFormated = ({ title, content, content2, multiline, fontSizeParagraph }:
  { title, content, content2?, multiline?, fontSizeParagraph? }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography
        className={multiline && classes.multilineTitle}
        variant='h6' display='inline'>
        {title}
      </Typography>
      <Typography
        style={fontSizeParagraph ? { fontSize: fontSizeParagraph } : {}}
        className={multiline && classes.multilineParagraph}
        variant='body1' display='inline'>
        {content}
        {content2}
      </Typography>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  multilineTitle: {
    display: 'block'
  },
  multilineParagraph: {
    marginLeft: '1em'
  }
}));

export default TextFormated