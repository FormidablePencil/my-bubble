import React from 'react'
import { Modal, Grid, Button } from '@material-ui/core'
import { ContainerFullHeight } from '../../../styles/materialUiStyles'
import { Link } from 'react-router-dom';

function MobileNavMenu({ mobileNavModalOpen, setMobileNavModalOpen }) {
  // const classes = useStyles();

  //~ convert buttons into Links

  return (
    <Modal onClick={() => setMobileNavModalOpen(false)} open={mobileNavModalOpen}>
      <ContainerFullHeight>
        <Grid container direction='column' justify='space-evenly' alignItems='center'>
          <Button variant='contained' color='primary'>
            <Link to='/'>Home</Link>
          </Button>
          <Grid item>
            <Button variant='contained' color='primary'>
              <Link to='/projects'>Projects</Link>
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary'>
              <Link to='/technologies'>Tech</Link>
            </Button>
          </Grid>
        </Grid>
      </ContainerFullHeight>
    </Modal>
  )
}

export default MobileNavMenu


// const useStyles = makeStyles((theme) => ({
//   navBtn: {

//   }
// }));