import React, { useState } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ProjectsGallery from '../components/demoTabs/ProjectsGallery';
import useFetchAllPortfolioData from '../hooks/useFetchAllPortfolioData';
import { projectDataT } from '../reducers/projectDataReducer';
import { techDataT } from '../reducers/techDataReducer';
import { AiOutlineSetting, AiOutlineSearch } from 'react-icons/ai';
import Technologies from '../components/demoTabs/Technologies';
import Navbar from '../components/Navbar';
// import reactNative from '../assets/techLogo/reactNativeLogo.png';

export function DemoRoutes() {
  useFetchAllPortfolioData()

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/demo/gallery">
          <ProjectsGallery />
        </Route>
        <Route path="/demo/tech">
          <Technologies />
        </Route>
      </Switch>
    </Router>
  )
}

export function DemoLayout({ imageSection, sectionOne, searchFeatureSection, sectionTwo }) {
  // const imageInWords = 'React-Native'
  const viewingContentDetails = true
  const [selectedTab, setSelectedTab] = useState(0)

  const onClickTab = (tab) => setSelectedTab(tab)

  return (
    <Grid container className='demoPage'>
      <Grid item container>
        <Paper className='sectionOne' elevation={10}>
          <div className="subjectImgContainer">
            {imageSection}
          </div>
          <div className="subjectInfoContainer">
            <div className="content">
              {sectionOne}
            </div>
          </div>

          <div
            className={`${viewingContentDetails ? 'searchFeatureOuterContainerViewMode'
              : 'searchFeatureOuterContainerBriefMode'} column`}>
            <div className="tabsContainer row">
              <div onClick={() => onClickTab(0)} className={`tab ${selectedTab !== 0 && 'unselectedTab'}`}>
                <Typography>Search</Typography>
                <div><AiOutlineSearch size={15} /></div>
              </div>
              <div onClick={() => onClickTab(1)} className={`tab ${selectedTab !== 1 && 'unselectedTab'} filter`}>
                <Typography>filter</Typography>
                <div><AiOutlineSetting size={15} /></div>
              </div>
            </div>
            <div className="searchBarContainer row">
              <input type="text" name="name" />
            </div>
            <div className="searchResultSection">
              {searchFeatureSection}
            </div>
          </div>

        </Paper>
      </Grid>
      <Grid item justify='space-evenly' alignItems='center' container className='sectionTwoRelevance'>
        {sectionTwo}
      </Grid>
    </Grid >
  )
}

interface CardLayoutT {
  projectData: techDataT & projectDataT
}

export const CardLayout = ({ visualSection, infoSection, onCardClick }) => {
  return (
    <Paper className="card row" id='hoverEffect' /*//* hover effect: zoom in and brightness higher */
      onClick={() => onCardClick()}
    >
      <div className="pictureFrameSection">{visualSection}</div>
      <div className="infoSection">{infoSection}</div>
      <div className="absoluteLayer" id='hoverEffect' />
    </Paper>
  )
}