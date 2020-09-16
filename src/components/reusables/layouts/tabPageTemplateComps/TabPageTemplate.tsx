import React, { cloneElement, Children } from 'react'
import { Grid, makeStyles, useMediaQuery, Button } from '@material-ui/core'
import SearchAndContentDetailsTogether from './SearchAndContentDetailsTogether';
import { navbarHeight } from '../../../../styles/materialUiStyles';
import useDetailsSectionAnim from '../../../../hooks/useDetailsSectionAnim';
import { animated } from 'react-spring';

export function TabPageTemplate({ contentVisualSection, contentDetailsSection, searchFeatureSection, browsingSection }) {
  // const [selectedTab, setSelectedTab] = useState(0)
  const classes = useStyles();
  const tabletOrSmaller = useMediaQuery((theme: any) => theme.breakpoints.down('md'));

  const {
    showDetailsSection,
    hideDetailsSection,
    animToggleAppearenceOfDetailsSection,
    browsingSectionRef,
    shrunkElement
  } = useDetailsSectionAnim()

  // const onClickTab = (tab) => setSelectedTab(tab)

  const browsingSectionWithProps = Children.map(browsingSection, (child, index) =>
    cloneElement(child, { showDetailsSection, })
  )

  return (
    <Grid container justify='center'
      style={{
        overflow: 'hidden',
        height: `calc(100vh - ${navbarHeight})`,
        position: 'relative'
      }}>

      <Grid container justify='space-between' className={classes.tabbar}>
        {!shrunkElement &&
          <Grid item>
            <Button onClick={hideDetailsSection}>close. Show if no scroll</Button>
          </Grid>
        }
      </Grid>


      <animated.div
        style={animToggleAppearenceOfDetailsSection}
        className={classes.detailsSection}>
        <Grid className={classes.contentDetailsContainer}
          container justify='center' direction='row' wrap='nowrap'>
          {/* //* ===== contentVisualSection ===== */}
          <Grid item>
            <div className={classes.subjectImgContainer}>
              {contentVisualSection}
            </div>
          </Grid>
          {/* //* ===== contentDetailsSection ===== */}
          <Grid container item className={classes.subjectInfoContainer}>
            <div className={classes.content}>
              {!tabletOrSmaller ?
                <>{contentDetailsSection}</>
                : <SearchAndContentDetailsTogether
                  contentDetailsSection={contentDetailsSection}
                  searchFeatureSection={searchFeatureSection} />
              }
            </div>
          </Grid>
        </Grid>
        {/* </Grid> */}

      </animated.div>
      {/* //* ===== browsingSection ===== */}
      <animated.div
        onScroll={hideDetailsSection}
        ref={browsingSectionRef}
        className={classes.animatedWrapperBrowsingSection}>
        <Grid container justify='space-evenly'>
          {browsingSectionWithProps}
        </Grid>
      </animated.div>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  tabbar: {
    height: '2em',
    width: '100%',
    zIndex: 100,
    backgroundColor: '#B6ADEF',
    boxShadow: '0px 7px 4px -2px rgba(0,0,0,0.2)',
  },
  detailsSection: {
    marginTop: '2em',
    padding: '1em',
    // marginLeft: '1em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyItems: 'center',
    position: "absolute",
    background: theme.palette.primary[300],
    width: '100%',
    zIndex: 3,
    height: '20em',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)'
  },


  contentDetailsContainer: {
    height: '20em',
    width: '80%'
  },
  // {/* //* ===== contentVisualSection ===== */}
  subjectImgContainer: {
    background: 'white',
    borderRadius: '5px',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
  },


  // {/* //* ===== contentDetailsSection ===== */}
  subjectInfoContainer: {
    height: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
    width: '100%',
    marginLeft: '1em',
    background: theme.palette.primary[200],
  },
  content: {
    height: '100%',
  },


  // {/* //* ===== searchFeatureSection ===== */}
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
  animatedWrapperBrowsingSection: {
    overflowY: 'scroll',
    width: '80%',
    height: `calc(100vh - ${navbarHeight} - 2em)`,
    background: theme.palette.background.default,
    boxShadow: 'inset 0px 0px 10px -1px rgba(0,0,0,0.25)'
  },
  browsingSectionRelevance: {
  },
}));