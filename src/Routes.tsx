import React, { useState } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ProjectsGalleryPage from './pages/ProjectsGalleryPage';
import useFetchAllPortfolioData from './hooks/useFetchAllPortfolioData';
import TechnologiesPage from './pages/TechnologiesPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { makeStyles, useMediaQuery, Button } from '@material-ui/core';
import { tabEffectShadowProp } from './styles/materialUiStyles';
import useFullHeightResponsive from './hooks/useFullHeightResponsive';
import MobileNavMenu from './components/mobile/components/MobileNavMenu';
// import reactNative from '../assets/techLogo/reactNativeLogo.png';

//~ how will cards be different on desktop and mobile? Figma should help

export function DemoRoutes() {
  const classes = useStyles();
  const mobile = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));
  const height = useFullHeightResponsive()

  const [mobileNavModalOpen, setMobileNavModalOpen] = useState(false)

  useFetchAllPortfolioData()

  return (
    <div
      style={{ height }}
      className={classes.container}
    >
      <Router>
        {mobile ?
          <MobileNavMenu mobileNavModalOpen={mobileNavModalOpen}
            setMobileNavModalOpen={setMobileNavModalOpen} /> :
          <Navbar />}
        <div className={classes.contentContainer}>
          {mobile && !mobileNavModalOpen
            && <Button className={classes.navIcon} onClick={() => setMobileNavModalOpen(true)}>O</Button>}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/projects">
              <ProjectsGalleryPage />
            </Route>
            <Route path="/tech">
              <TechnologiesPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  contentContainer: {
    height: '100%',
    position: "relative",
    zIndex: 1,
    background: 'linear-gradient(180deg, rgba(180,170,239,1) 0%, rgba(168,234,255,1) 100%)',
    boxShadow: tabEffectShadowProp
  },
  navIcon: {
    position: "absolute",
    
  }
}));