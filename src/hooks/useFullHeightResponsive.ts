import React from 'react'
import { useMediaQuery } from '@material-ui/core';
import { navbarHeight } from '../styles/materialUiStyles';

function useFullHeightResponsive() {
  const mobile = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));
  const height = mobile ? '100vh' : `calc(100vh - ${navbarHeight})`
  return height
}

export default useFullHeightResponsive
