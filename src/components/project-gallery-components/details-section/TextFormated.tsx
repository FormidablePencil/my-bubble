import React from 'react'
import { makeStyles, Typography } from "@material-ui/core"

const TextFormated = ({ title, content, content2, multiline, fontSizeParagraph, isflexCol }:
  { title, content, content2?, multiline?, fontSizeParagraph?, isflexCol?}) => {
  const classes = useStyles();

  return (
    <div className={isflexCol ? classes.flexCol : ''}>
      <Typography
        className={multiline && classes.multilineTitle}
        variant='h6' display='inline'>
        {title}
      </Typography>
      <Typography
        style={fontSizeParagraph ? { fontSize: fontSizeParagraph, color: "#952A1F" } : {color: "#952A1F"}}
        className={multiline && classes.multilineParagraph}
        variant='body1' display='inline'>
        {content}
        {content2}
      </Typography>
    </div>
  )
}


const useStyles = makeStyles(() => ({
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  multilineTitle: {
    display: 'block',
  },
  multilineParagraph: {
    display: 'block',
    marginLeft: '1em',
  }
}));

export default TextFormated