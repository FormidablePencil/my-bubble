import React, { createContext, useState } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ProjectsGalleryPage from './pages/ProjectsGalleryPage';
import useFetchAllPortfolioData from './hooks/useFetchAllPortfolioData';
import TechnologiesPage from './pages/TechnologiesPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { makeStyles, useMediaQuery, Button } from '@material-ui/core';
import { tabEffectShadowProp, swipebarHeightInEm } from './styles/materialUiStyles';
import useFullHeightResponsive from './hooks/useFullHeightResponsive';
import MobileNavMenu from './components/mobile/components/MobileNavMenu';
import { IoIosMenu } from 'react-icons/io';
import useSwipableTab from './hooks/useSwipableTab';

export const ContextSwipeBar: any = createContext(null);

export function DemoRoutes() {
  const classes = useStyles();
  const mobile = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));
  const height = useFullHeightResponsive()

  const [mobileNavModalOpen, setMobileNavModalOpen] = useState(false)

  useFetchAllPortfolioData()
  const { translateSwipeableTab, xy } = useSwipableTab()

  return (
    <ContextSwipeBar.Provider value={{ translateSwipeableTab, xy }}>
      <div
        style={{
          height,
          overflowY: mobile ? 'hidden' : 'visible'
        }}
        className={classes.container}
      >
        <Router>
          {mobile
            ? <MobileNavMenu mobileNavModalOpen={mobileNavModalOpen}
              setMobileNavModalOpen={setMobileNavModalOpen} />
            : <Navbar />}
          <div
            className={classes.contentContainer}
            style={mobile ? { paddingTop: swipebarHeightInEm } : {}}
          >
            {mobile && !mobileNavModalOpen
              && <Button className={classes.navIcon} onClick={() => setMobileNavModalOpen(true)}>
                <IoIosMenu color='white' size={30} />
              </Button>}
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
    background: 'linear-gradient(180deg, rgba(180,170,239,1) 0%, rgba(168,234,255,1) 100%)',
    boxShadow: tabEffectShadowProp
  },
  navIcon: {
    zIndex: 15,
    position: "absolute",
    top: 2,
    right: 0
  }
}));