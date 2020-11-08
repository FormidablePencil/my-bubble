import React from 'react'
import { Grid, makeStyles, Container } from '@material-ui/core'
import { navbarHeight } from '../../styles/materialUiStyles';
import useDetailsSectionAnim from '../../hooks/useDetailsSectionAnim';
import { animated } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_CONTENT_DETAILS_SECTION, TOGGLE_IMAGE_MODAL } from '../../actions/types';
import { rootReducerT } from '../../store';
import DropdownBtn from './DropdownBtn';
import { useLocation } from 'react-router-dom';

function PageTemplate({ contentVisualSection, contentDetailsSection, searchFeatureSection, browsingSection }) {
  const contentDetailSectionIsClosed = useSelector((state: rootReducerT) => state.contentDetailSectionIsClosed)
  const classes = useStyles();
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const {
    animToggleAppearenceOfDetailsSection,
    browsingSectionRef,
  } = useDetailsSectionAnim()

  
  const onClickContentVisualSection = () =>
    dispatch({ type: TOGGLE_IMAGE_MODAL })

  const hideDetailsSection = () =>
    !contentDetailSectionIsClosed &&
    dispatch({ type: TOGGLE_CONTENT_DETAILS_SECTION })

  const onClickDropdown = () =>
    dispatch({ type: TOGGLE_CONTENT_DETAILS_SECTION })

  return (
    <Grid container justify='center'
      style={{
        overflow: 'hidden',
        height: `calc(100vh - ${navbarHeight})`,
        position: 'relative'
      }}>

      <Grid container className={classes.tabbar}>
        <Container>
          <Grid
            className={classes.dropdownContainer}
            item
            container
            justify='flex-end'>
            {pathname === '/projects' &&
              <DropdownBtn
                toggleOn={contentDetailSectionIsClosed}
                onClick={onClickDropdown} />
            }
          </Grid>
        </Container>
      </Grid>


      <animated.div
        style={animToggleAppearenceOfDetailsSection}
        className={classes.detailsSection}>
        <Grid className={classes.contentDetailsContainer}
          container justify='center' direction='row' wrap='nowrap'>
          {/* //* ===== contentVisualSection ===== */}

          <Grid item>
            <div
              className={classes.subjectImgContainer}
              onClick={onClickContentVisualSection}>
              {contentVisualSection}
            </div>
          </Grid>

          {/* //* ===== contentDetailsSection ===== */}
          <Grid container item className={classes.subjectInfoContainer}>
            <>{contentDetailsSection}</>
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
          {browsingSection}
        </Grid>
      </animated.div>
    </Grid >
  )
}

const useStyles = makeStyles((theme) => ({
  tabbar: {
    height: '2em',
    width: '100%',
    zIndex: 100,
    backgroundColor: theme.palette.primary[800],
    boxShadow: '0px 7px 4px -2px rgba(0,0,0,0.2)',
  },
  detailsSection: {
    marginTop: '2em',
    padding: '1em',
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
    background: theme.palette.primary[400],
    border: '2px solid',
    borderColor: theme.palette.primary[800],
    borderRadius: '5px',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
  },


  // {/* //* ===== contentDetailsSection ===== */}
  subjectInfoContainer: {
    height: '100%',
    borderRadius: '5px',
    width: '100%',
    marginLeft: '1em',
    background: theme.palette.primary[400],
    border: '2px solid',
    borderColor: theme.palette.primary[800],
  },


  // {/* //* ===== searchFeatureSection ===== */}
  searchFeatureOuterContainerViewMode: {
    position: 'relative',
    backgroundColor: theme.palette.primary[500],
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
  dropdownContainer: {
    paddingRight: '2em'
  }
}));

export default PageTemplate