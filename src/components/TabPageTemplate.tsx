import React, { useState } from 'react'
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core'
import { AiOutlineSetting, AiOutlineSearch } from 'react-icons/ai'

//plan to replace all of sass with material-ui:
//*  convert technologies tab section styles and then convert template.

export function TabPageTemplate({ contentVisualSection, contentDetailsSection, searchFeatureSection, browsingSection }) {
  const [selectedTab, setSelectedTab] = useState(0)
  const classes = useStyles();
  const viewingContentDetails = true
  // const imageInWords = 'React-Native'

  const onClickTab = (tab) => setSelectedTab(tab)

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item container>
        <Paper className={classes.contentDetailsSection} elevation={10}>
          {/* //* ===== contentVisualSection ===== */}
          <div className={classes.subjectImgContainer}>
            {contentVisualSection}
          </div>
          {/* //* ===== contentDetailsSection ===== */}
          <Grid container className={classes.subjectInfoContainer}>
            <div className={classes.content}>
              {contentDetailsSection}
            </div>
          </Grid>

          {/* //* ===== searchFeatureSection ===== */}
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

        </Paper>
      </Grid>
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
  subjectInfoContainer: {
    margin: '0em 3em 0em 3em',
    flex: 2
  },
  content: {
    flex: 1,
    borderRadius: '1em',
    backgroundColor: 'grey',
    margin: '.5em'
  },
  subjectImgContainer: {
    backgroundColor: 'orange',
    padding: '.5em',
    borderRadius: '1em',
    flex: 1.5,
    display: 'flex',
    width: '10px',
    height: '20em',
  },
  browsingSectionRelevance: {
    backgroundColor: 'grey',
    margin: '0em 1.5em 0em 1.5em',
    padding: '1.5em 0em 1.5em 0em',
  },
  searchInput: {
    margin: '1em',
    flex: 1,
    width: '100%',
    color: 'orange',
    height: '3em',
    borderRadius: '1em'
  },
  searchResultSection: {
    background: 'white',
    borderWidth: '0px 2px 2px 2px',
  },
  contentDetailsSection: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    minHeight: '20em',
    padding: '2em 2em 2em 2em',
    width: '100%',
    zIndex: 2
  },
  searchFeatureOuterContainerViewMode: {
    position: 'relative',
    backgroundColor: 'orange',
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
  tabContainer: {
    position: 'absolute',
    top: '-21px',
    zIndex: -1,
    right: '10px',
    justifyContent: 'flex-end',
    display: 'flex'
  },

}));