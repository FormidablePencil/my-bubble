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
import { useSelector } from 'react-redux';
import { rootReducerT } from './store';
import MobileTechGallery from './components/mobile/tech-gallery-components';

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
              <ContactsPage slidesToShow={6} />
            </TransitionalAnim>
          </Route>
          <Route path="/projects">
            <TransitionalAnim>
              <ProjectsGalleryPage />
            </TransitionalAnim>
          </Route>
          <Route path="/technologies">
            <TransitionalAnim>
              <TechnologiesPage />
            </TransitionalAnim>
          </Route>

          <div className='not-visible-on-mdUp'>
            <BottomNav />
          </div>
        </div>
      </Router>
    </div >
  )
}
interface T { children, overRideClassName?: string }
const TransitionalAnim = ({ children, overRideClassName }: T) => {
  const leavingPageAnim = useSelector((state: rootReducerT) => state.leavingPageAnim)

  return <div className={`${leavingPageAnim ? 'page-trans-out' : 'page-trans-in'} ${overRideClassName}`}>{children}</div>
}




const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
  },
  contentContainer: {
    position: "relative",
    overflow: 'hidden',
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