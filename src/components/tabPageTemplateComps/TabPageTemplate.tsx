import React, { useState } from 'react'
import { Grid, Paper, Typography, makeStyles, useMediaQuery } from '@material-ui/core'
import { AiOutlineSetting, AiOutlineSearch } from 'react-icons/ai'
import SearchAndContentDetailsTogether from './SearchAndContentDetailsTogether';
import OnScrollContainer from './OnScrollContainer';
import { navbarHeight } from '../../styles/materialUiStyles';

export function TabPageTemplate({ contentVisualSection, contentDetailsSection, searchFeatureSection, browsingSection }) {
  const [selectedTab, setSelectedTab] = useState(0)
  const classes = useStyles();
  const tabletOrSmaller = useMediaQuery((theme: any) => theme.breakpoints.down('md'));

  const onClickTab = (tab) => setSelectedTab(tab)

  return (
    <Grid container justify='center' alignItems='center' style={{ overflow: 'hidden', height: `calc(100vh - ${navbarHeight})` }}>
      <OnScrollContainer>
        {/* //* ===== contentVisualSection ===== */}
        <div className={classes.subjectImgContainer}>
          {contentVisualSection}
        </div>
        {/* //* ===== contentDetailsSection ===== */}
        <Grid container className={classes.subjectInfoContainer}>
          <div className={classes.content}>
            {!tabletOrSmaller ?
              <>{contentDetailsSection}</>
              : <SearchAndContentDetailsTogether
                contentDetailsSection={contentDetailsSection}
                searchFeatureSection={searchFeatureSection} />
            }
          </div>
        </Grid>

        {/* //* ===== searchFeatureSection ===== */}
        {!tabletOrSmaller &&
          <div
            className={classes.searchFeatureOuterContainerViewMode}>
            <div className={classes.tabContainer}>
              <div onClick={() => onClickTab(0)} className={`${classes.tab} ${selectedTab !== 0 && classes.unselectedTab}`}>
                <Typography>Search</Typography>
                <div><AiOutlineSearch size={15} /></div>
              </div>
              <div onClick={() => onClickTab(1)} className={`${classes.tab} ${selectedTab !== 1 && classes.unselectedTab} ${classes.filter}`}>
                <Typography>filter</Typography>
                <div><AiOutlineSetting size={15} /></div>
              </div>
            </div>
            <div>
              <input className={classes.searchInput} type="text" name="name" />
            </div>
            <div className={classes.searchResultSection}>
              {searchFeatureSection}
            </div>
          </div>
        }
      </OnScrollContainer>
      {/* //* ===== browsingSection ===== */}
      <Grid
        className={classes.browsingSectionRelevance}
        container item
        justify='space-evenly' alignItems='center'>
        {browsingSection}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({

  // {/* //* ===== contentVisualSection ===== */}
  subjectImgContainer: {
    background: theme.palette.primary[100],
    borderRadius: '5px',
    flex: 1.5,
    display: 'flex',
    width: '10px',
  },


  // {/* //* ===== contentDetailsSection ===== */}
  subjectInfoContainer: {
    position: 'relative',
    margin: '0em 3em 0em 3em',
    flex: 2,
    borderRadius: '5px',
    overflowY: 'hidden',
    background: 'orange',
  },
  content: {
    flex: 1,
    backgroundColor: 'grey',
    overflowY: 'scroll',
    height: '15em'
  },


  // {/* //* ===== searchFeatureSection ===== */ }
  searchFeatureOuterContainerViewMode: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    overflow: 'hidden'
  },
  tabContainer: {
    position: 'absolute',
    top: '-21px',
    zIndex: -1,
    right: '10px',
    justifyContent: 'flex-end',
    display: 'flex'
  },
  searchInput: {
    margin: '1em',
    flex: 1,
    width: '100%',
    color: 'black',
    height: '3em',
    borderRadius: '1em'
  },
  searchResultSection: {
    background: 'white',
    borderWidth: '0px 2px 2px 2px',
  },
  tab: {
    width: '5em',
    height: '1em',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'black',
    background: 'grey',
    borderRadius: '.5em .5em 0em 0em',
    margin: '0px 5px 0px 5px',
    padding: '5px 5px 0px 5px',
  },
  unselectedTab: {
    background: 'rgba(204, 197, 239, .5)',
    '&:hover': {
      cursor: 'pointer',
      opacity: 1
    }
  },
  filter: {
    width: '4em',
    display: 'flex',
    flexDirection: 'row'
  },


  // {/* //* ===== browsingSection ===== */}
  browsingSectionRelevance: {
    overflowY: 'scroll',
    flex: 1,
    // height: '52vh',
    height: '100%',
    background: theme.palette.background.default,
    margin: '0em 1em 1em 1em',
    padding: '1.5em 0em 1.5em 0em',
  },
}));