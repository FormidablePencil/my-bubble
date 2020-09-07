import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import staticData from '../../../staticData'
import { ContainerFullHeight } from '../../../styles/materialUiStyles'

function HomeAbout() {

  return (
    <ContainerFullHeight>
      <Grid container direction='column' justify='space-evenly'>
        <Grid item>
          <Typography variant='h3'>{staticData.homeAbout.name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h2'>{staticData.homeAbout.paragraph}</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5'>{staticData.homeAbout.paragraph2}</Typography>
        </Grid>
      </Grid>
    </ContainerFullHeight>
  )
}

export default HomeAbout

