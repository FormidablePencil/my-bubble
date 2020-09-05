import React from 'react'
import { Typography } from "@material-ui/core"

const TextFormated = ({ title, content, content2 }: { title, content, content2?: any }) => {
  return (
    <>
      <Typography variant='body1' display='block'>
        <Typography variant='h6' display='inline'>
          {title}
        </Typography>
        {content}
        {content2}
      </Typography>
    </>
  )
}

export default TextFormated