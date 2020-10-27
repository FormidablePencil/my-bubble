import React, { createContext, useState } from 'react'
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
import { IoIosMenu } from 'react-icons/io';
import useSwipableTab from './hooks/useSwipableTab';
import ImageModal from './components/modals/ImageModal';
import BottomNav from './components/layouts/BottomNav';

export const ContextSwipeBar: any = createContext(null);

export function DemoRoutes() {
  const classes = useStyles();
  const xs = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));
  const height = useFullHeightResponsive()
  const [mobileNavModalOpen, setMobileNavModalOpen] = useState(false)


  const { translateSwipeableTab, xy } = useSwipableTab()
  useFetchAllPortfolioData()

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


          {xs ?
            <MobileNavMenu
              mobileNavModalOpen={mobileNavModalOpen}
              setMobileNavModalOpen={setMobileNavModalOpen} />
            : <Navbar />
          }

          <div className={classes.contentContainer}>

            {xs && !mobileNavModalOpen &&
              <Button className={classes.navIcon} onClick={() => setMobileNavModalOpen(true)}>
                <IoIosMenu color='white' size={35} />
              </Button>
            }

            <Switch>
              <Route exact path="/">
                <HomePage />
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