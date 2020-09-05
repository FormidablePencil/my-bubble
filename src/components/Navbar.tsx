import React from 'react'
import { Link, makeStyles, Grid, Typography } from '@material-ui/core'
import { useLocation } from 'react-router-dom';

function Navbar() {
  const pathName = useLocation().pathname
  // const pathNamePartial = pathName.slice(0, 5)
  const classes = useStyles();

  const tabs = [
    {
      tabTitle: 'Project Gallery',
      path: '/projects',
    },
    {
      tabTitle: 'Technologies',
      path: '/tech',
    },
  ]

  return (
    <Grid container className={classes.navbar} justify='space-between'>
      {/* {pathNamePartial === '' && */}
      <div className={classes.tabsContainer}>
        {tabs.map(tab =>
          <Link
            href={tab.path}
            className={`${classes.tab} ${pathName === tab.path && classes.activeTab}`}
          >
            <Grid className={classes.fullHeight} container justify='center' alignItems='center'>
              <Typography variant='body1'>{tab.tabTitle}</Typography>
            </Grid>
          </Link>
        )}
      </div>
      {/* } */}
    </Grid>
  )
}

export default Navbar


const useStyles = makeStyles((theme) => ({
  navbar: {
    height: '3.2em',
    position: 'relative',
    zIndex: 50,
    backgroundColor: 'grey',
  },
  tabsContainer: {
    marginLeft: '3em',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },
  tab: {
    height: '2.7em',
    width: '12em',
    borderRadius: '1em 1em 0em 0em',
    margin: '0em 0em -.5px 1em',
    backgroundColor: 'black',
    opacity: .7,
    '&:hover': {
      opacity: .8,
      backgroundColor: 'black',
      cursor: 'pointer'
    }
  },
  activeTab: {
    zIndex: 20,
    opacity: 1,
    pointerEvents: 'none',
    '&:hover': {
      cursor: 'default',
      opacity: 1
    }
  },
  fullHeight: {
    height: '100%'
  }
}));