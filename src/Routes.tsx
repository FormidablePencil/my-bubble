import React, { createContext } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import useFetchAllPortfolioData from './hooks/useFetchAllPortfolioData';
import TechnologiesPage from './pages/tech-gallery';
import Navbar from './components/layouts/Navbar';
import ContactsPage from './pages/contacts';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import { tabEffectShadowProp } from './styles/materialUiStyles';
import useFullHeightResponsive from './hooks/useFullHeightResponsive';
import useSwipableTab from './hooks/useSwipableTab';
import ImageModal from './components/image-modal/index';
import BottomNav from './components/layouts/BottomNav';
import ProjectsGalleryPage from './pages/project-gallery';
import useKeyTrigger from './hooks/useKeyTrigger';

export const ContextSwipeBar: any = createContext(null);

export function DemoRoutes() {
  const classes = useStyles();
  const xs = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));
  const height = useFullHeightResponsive()
  const { translateSwipeableTab, xy } = useSwipableTab()
  useFetchAllPortfolioData()
  useKeyTrigger()

  const containerStyles: any = {
    height,
    overflowY: xs ? 'hidden' : 'visible'
  }

  return (
    <ContextSwipeBar.Provider value={{ translateSwipeableTab, xy }}>
      <div
        style={containerStyles}
        className={classes.container}
      >

        <ImageModal />

        <Router>

          {!xs && <Navbar />}

          <div className={classes.contentContainer}>

            <Switch>
              <Route exact path="/">
                <ContactsPage />
              </Route>
              <Route path="/projects">
                <ProjectsGalleryPage />
              </Route>
              <Route path="/technologies">
                <TechnologiesPage />
              </Route>
            </Switch>

            {xs && <BottomNav />}
          </div>
        </Router>
      </div>
    </ContextSwipeBar.Provider>
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
    background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(99,161,255,1) 0%, rgba(99,122,185,1) 100%)',
    boxShadow: tabEffectShadowProp
  },
  navIcon: {
    zIndex: 15,
    position: "absolute",
    top: 0,
    right: 0,
  }
}));