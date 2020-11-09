import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import useFetchAllPortfolioData from './hooks/useFetchAllPortfolioData';
import TechnologiesPage from './pages/tech-gallery';
import Navbar from './components/layouts/Navbar';
import ContactsPage from './pages/contacts';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import { tabEffectShadowProp } from './styles/materialUiStyles';
import ImageModal from './components/image-modal/index';
import BottomNav from './components/layouts/BottomNav';
import ProjectsGalleryPage from './pages/project-gallery';
import useKeyTrigger from './hooks/useKeyTrigger';
import { navbarHeight } from './styles/materialUiStyles';

export function DemoRoutes() {
  const classes = useStyles();
  const xs = useMediaQuery('(max-width:600px)');

  const height = xs ? '100vh' : `calc(100vh - ${navbarHeight})`

  useFetchAllPortfolioData()
  useKeyTrigger()

  const mobileHeightStyles: any = {
    height: xs ? '100vh' : height,
    overflowY: 'hidden'
  }

  return (

    <div className={classes.container}>
      <ImageModal />
      <Router>

        {!xs && <Navbar />}

        <div style={mobileHeightStyles} className={classes.contentContainer}>

          <Switch>
            <Route exact path="/">
              <div className='page-transition-anim'>
                <ContactsPage />
              </div>
            </Route>
            <Route path="/projects">
              <div className='page-transition-anim'>
                <ProjectsGalleryPage />
              </div>
            </Route>
            <Route path="/technologies">
              <div className='page-transition-anim'>
                <TechnologiesPage />
              </div>
            </Route>
          </Switch>

          {xs && <BottomNav />}
        </div>
      </Router>
    </div>
  )
}


const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
  },
  contentContainer: {
    position: "relative",
    overflowY: 'scroll',
    overflowX: 'hidden',
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