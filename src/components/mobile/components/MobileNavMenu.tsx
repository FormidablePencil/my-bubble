import React from 'react'
import { Modal, Grid, Button, makeStyles } from '@material-ui/core'
import { ContainerFullHeight } from '../../../styles/materialUiStyles'

function MobileNavMenu({ mobileNavModalOpen, setMobileNavModalOpen }) {
  const classes = useStyles();

  //~ convert buttons into Links
  
  return (
    <Modal onClick={() => setMobileNavModalOpen(false)} open={mobileNavModalOpen}>
      <ContainerFullHeight>
        <Grid container direction='column' justify='space-evenly' alignItems='center'>
          <Grid item>
            <Button variant='contained' color='primary'>Button one</Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary'>Button two</Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary'>Button three</Button>
          </Grid>
        </Grid>
      </ContainerFullHeight>
    </Modal>
  )
}

export default MobileNavMenu


const useStyles = makeStyles((theme) => ({
  navBtn: {

  }
}));