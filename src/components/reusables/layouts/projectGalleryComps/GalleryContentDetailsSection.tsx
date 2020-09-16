import React from 'react'
import { Grid, Typography, Chip } from '@material-ui/core'
import TextFormated from '../TextFormated';

function GalleryContentDetailsSection({ sortedProjectData }) {

  return (
    <Grid item container>
      {/* //* general section */}
      <Grid container direction='column'>
        <Grid container justify='space-between'>
          <TextFormated title='Title: ' content={sortedProjectData?.general.title} />
          <TextFormated title='Platform: ' content={
            sortedProjectData?.general.type === 'mobile' ?
              'android' : 'website'
          } />
        </Grid>
        <TextFormated title='Description: ' content={sortedProjectData?.general.description} />
      </Grid>
    </Grid>
  )
}


export const GalleryContentMoreDetailsSection = ({ sortedProjectData }) => {

  return (
    <Grid item container>
      {/* //* links section */}
      <Typography variant='body1'>Github repo links & more</Typography>
      <Grid container direction='column'>
        <TextFormated
          fontSizeParagraph={12}
          multiline={true}
          title='Frontend source code'
          content={sortedProjectData?.links.frontend}
        />
        <TextFormated
          fontSizeParagraph={12}
          multiline={true}
          title='Server source code'
          content={sortedProjectData?.links.server}
        />
        <TextFormated
          fontSizeParagraph={12}
          multiline={true}
          title='Blog'
          content={sortedProjectData?.links.blog}
        />
      </Grid>

      {/* //* techs utilized section */}
      <Typography>Technologies</Typography>
      <>
        {sortedProjectData?.technologies.map(tech =>
          <Chip label={tech} variant="default" key={tech} />
        )}
      </>
    </Grid>
  )
}

export default GalleryContentDetailsSection
