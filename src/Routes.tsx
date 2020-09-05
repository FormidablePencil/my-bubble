import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ProjectsGalleryPage from './pages/ProjectsGalleryPage';
import useFetchAllPortfolioData from './hooks/useFetchAllPortfolioData';
import TechnologiesPage from './pages/TechnologiesPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
// import reactNative from '../assets/techLogo/reactNativeLogo.png';

export function DemoRoutes() {
  useFetchAllPortfolioData()

  return (
    <Router>
      <Navbar />
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
    </Router>
  )
}
