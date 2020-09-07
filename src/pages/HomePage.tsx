import React from 'react'
import { makeStyles } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileHomeTab from '../components/tabs/mobile/Mobile-HomeTab';
import DesktopHomeTab from '../components/tabs/desktop/Desktop-HomeTab';

function HomePage() {
  const mobile = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));
  const classes = useStyles();

  return (
    <>
      {mobile ?
        <MobileHomeTab />
        : <DesktopHomeTab />
      }
    </>
  )
}

export default HomePage


const useStyles = makeStyles((theme) => ({
  nameTxt: {

  },
  amAboutTxt: {

  },
  callToActions: {

  },
  shadowOverNavbar: {
    boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.75)',
  }
}));