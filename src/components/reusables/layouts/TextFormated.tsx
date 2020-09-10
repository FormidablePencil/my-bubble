import React from 'react'
import { Typography } from "@material-ui/core"

const TextFormated = ({ title, content, content2 }: { title, content, content2?: any }) => {
  return (
    <div>
      <Typography variant='h6' display='inline'>
        {title}
      </Typography>
      <Typography variant='body1' display='inline'>
        {content}
        {content2}
      </Typography>
    </div>
  )
}

export default TextFormated