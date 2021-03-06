import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import useFetchAllPortfolioData from './hooks/useFetchAllPortfolioData';
import TechnologiesPage from './pages/tech-gallery';
import Navbar from './components/layouts/Navbar';
import ContactsPage from './pages/contacts';
import { makeStyles } from '@material-ui/core';
import { tabEffectShadowProp } from './styles/materialUiStyles';
import ImageModal from './components/image-modal/index';
import BottomNav from './components/layouts/BottomNav';
import ProjectsGalleryPage from './pages/project-gallery';
import useKeyTrigger from './hooks/useKeyTrigger';
import TransitionalAnim from './components/layouts/TransitionalAnim';

/* The tech and projects are too abrupt when the page is initially redirected there especially the projects page. 
the gallaxy frame does some funky business. */
/* change theme perhaps */

/* make it loop: useNavigateProjects */
export function DemoRoutes() {
  const classes = useStyles();

  useFetchAllPortfolioData()
  useKeyTrigger()

  return (

    <div className={classes.container}>

      <div className='not-visible-on-mdDown'>
        <ImageModal />
      </div>
      <Router>

        <Navbar />

        <div
          style={{ position: 'relative' }}
          className={`
            ${classes.contentContainer}
            fixed-mobile-100vh
          `}
        >

          <Route exact path="/">
            <TransitionalAnim>
              <ContactsPage />
            </TransitionalAnim>
          </Route>
          <Route path="/projects">
            {/* scrollOnSmDown */}
            <ProjectsGalleryPage />
          </Route>
          <Route path="/technologies">
            {/* <TransitionalAnim compHere={<RoseComp />}> */}
            <TechnologiesPage />
            {/* </TransitionalAnim> */}
          </Route>

          <div className='not-visible-on-mdUp'>
            <BottomNav />
          </div>
        </div>
      </Router>
    </div >
  )
}


const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
  },
  contentContainer: {
    position: "relative",
    overflow: 'hidden',
    zIndex: 1,
    background: 'linear-gradient(180deg, rgba(169,38,55,1) 0%, rgba(134,17,27,1) 100%)',
    boxShadow: tabEffectShadowProp
  },
  navIcon: {
    zIndex: 15,
    position: "absolute",
    top: 0,
    right: 0,
  }
}));
