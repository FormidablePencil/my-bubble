import React from 'react'
import { Grid, Typography, Chip } from '@material-ui/core'
import { BorderLinearProgress } from '../../../../styles/materialUiStyles'
import { AccordionComponent } from '../AccordionComponent'
import TextFormated from '../TextFormated';

function GalleryContentDetailsSection({ sortedProjectData }) {
  return (
    <>
      {/* //* general section */}
      <AccordionComponent
        initiallyExpanded={true}
        summarySection={
          <Grid container>
            <Typography variant='h5'>General</Typography>
            <Grid item container>
              <Typography variant='h5'>Complete</Typography>
              <BorderLinearProgress color='primary' variant="determinate" value={50} />
            </Grid>
          </Grid>
        }
        detailsSection={
          <Grid container direction='column'>
            <TextFormated title='Title:' content={sortedProjectData?.general.title} />
            <TextFormated title='Description:' content={sortedProjectData?.general.description} />
            <TextFormated title='Platform:' content={sortedProjectData?.general.type} />
          </Grid>
        } />

      {/* //* links section */}
      <AccordionComponent
        initiallyExpanded={false}
        summarySection={
          <Typography variant='body1'>Github repo links & more</Typography>
        }
        detailsSection={
          <Grid container>
            <TextFormated title='Frontend source code' content={sortedProjectData?.links.frontend} />
            <TextFormated title='Server source code' content={sortedProjectData?.links.server} />
            <TextFormated title='Blog' content={sortedProjectData?.links.blog} />
          </Grid>
        }
      />

      {/* //* techs utilized section */}
      <AccordionComponent
        initiallyExpanded={false}
        summarySection={
          <Typography>Technologies</Typography>}
        detailsSection={
          <>
            {sortedProjectData?.technologies.map(tech =>
              <Chip label={tech} variant="default" key={tech} />
            )}
          </>} />
    </>

  )
}

export default GalleryContentDetailsSection
