import React, { memo, useState } from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux';
import TextFormated from './TextFormated';
import { rootReducerT } from '../../../store';
import TechLogo from '../../reusables/TechLogo';
import capitalize from 'lodash/capitalize';

const GalleryContentDetailsSection = memo(() => {
  const classes = useStyles();
  const contentDetailsSectionDirIsRow = useSelector((state: rootReducerT) => state.contentDetailsSectionDirIsRow)
  console.log(contentDetailsSectionDirIsRow, 'wttf');

  return (
    <Grid
      container
      direction={contentDetailsSectionDirIsRow ? 'row' : 'column'}
      wrap='nowrap'
      className={`${classes.parentContainer} scrollbar-visible`}>
      <GalleryContentDetailSectionFirst />
      {contentDetailsSectionDirIsRow && <div className={classes.divider} />}
      <div style={{ marginTop: '1em' }} />
      <GalleryContentDetailSectionSecond />
    </Grid>
  )
})



function GalleryContentDetailSectionFirst() {
  const classes = useStyles();
  const contentDetailsSectionDirIsRow = useSelector((state: rootReducerT) => state.contentDetailsSectionDirIsRow)
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)

  const [showLine, setShowLine] = useState(false)

  const toggleShowLine = (ref) => {
    if (ref) {
      if (!contentDetailsSectionDirIsRow)
        setShowLine(false)
      else if (ref.clientHeight < 200)
        setShowLine(true)
      else
        setShowLine(false)
    }
  }

  return (
    <Grid
      container
      direction='column'
      justify='center'
    >

      <div className={
        showLine ? `
        ${classes.line}
        ${classes.shortLine}
        ${classes.top}
        ${classes.left}
        `: ''} />

      <Grid
        className={`${classes.constraintContainer} scrollbar-visible`}
        container
        ref={ref => toggleShowLine(ref)}
      >

        <Grid container item direction='column'>
          <Grid item>
            <TextFormated
              title='Title: '
              content={projectDataCollection[currentSubjectViewing]?.title} />
          </Grid>
          <Grid item>
            <Grid item container direction='row' alignItems='center'>
              <TextFormated
                title='Platform: '
                content={projectDataCollection[currentSubjectViewing]?.type === 'mobile' ?
                  'Android' : 'Web'}
              />
            </Grid>
          </Grid>
        </Grid>
        <TextFormated title='Description: ' content={projectDataCollection[currentSubjectViewing]?.description} />
      </Grid>

      <div className={
        showLine ? `
        ${classes.line}
        ${classes.longLine}
        ${classes.bottom}
        ${classes.left}
        `: ''} />

    </Grid>
  )
}



const GalleryContentDetailSectionSecond = memo(() => {
  const classes = useStyles();
  const [showLine, setShowLine] = useState(false)
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const contentDetailsSectionDirIsRow = useSelector((state: rootReducerT) => state.contentDetailsSectionDirIsRow)
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)

  const toggleShowLine = (ref) => {
    if (ref) {
      if (!contentDetailsSectionDirIsRow)
        setShowLine(false)
      else if (ref.clientHeight < 200)
        setShowLine(true)
      else
        setShowLine(false)
    }
  }

  return (
    <Grid item container alignItems='center' className={classes.relative}>

      <div className={
        showLine ? `
        ${classes.line}
        ${classes.longLine}
        ${classes.top}
        ${classes.right}
        `: ''} />


      <Grid
        className={`${classes.constraintContainer} scrollbar-visible`}
        container item
        direction='column'
        ref={ref => toggleShowLine(ref)}
      >

        <>
          {projectDataCollection[currentSubjectViewing]?.links &&
            Object.keys(projectDataCollection[currentSubjectViewing]?.links).map(key =>
              projectDataCollection[currentSubjectViewing]?.links[key] &&
              <div key={key}>
                <Typography variant='h6'>
                  {capitalize(key)} repo
                </Typography>
                <Typography
                  className={classes.href}
                  variant='body1'>
                  <a
                    href={projectDataCollection[currentSubjectViewing].links[key]}>
                    {projectDataCollection[currentSubjectViewing]?.links[key]}
                  </a>
                </Typography>
              </div>
            )}
        </>

        <Grid
          item container
          direction='column'
          className={classes.techContainer}>
          <Typography
            variant='h6'>
            Technologies
          </Typography>
          <Grid
            item container
            direction='row'
            className={classes.body}
          >
            <>
              {projectDataCollection[currentSubjectViewing]?.technologies.map(techTitle =>
                <TechLogo key={techTitle} techTitle={techTitle} />
              )}
            </>
          </Grid>
        </Grid>

        <div className={
          showLine ? `
        ${classes.line}
        ${classes.shortLine}
        ${classes.right}
        ${classes.bottom}
        `: ''} />

      </Grid>
    </Grid>
  )
})


const useStyles = makeStyles((theme) => ({
  constraintContainer: {
    borderTop: '1px solid',
    paddingTop: '1em',
    borderColor: theme.palette.primary[100],
    height: '15em',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  relative: {
    position: 'relative'
  },
  parentContainer: {
    height: '100%',
    padding: '15px 15px 15px 15px',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  techContainer: {
    // position: 'absolute',
    // top: -12,
    // right: -20,
  },
  line: {
    height: 2,
    background: theme.palette.primary[800],
    position: "absolute",
  },
  longLine: {
    width: 250,
  },
  shortLine: {
    width: 100,
  },
  right: {
    right: '-1em'
  },
  left: {
    left: '-1em'
  },
  bottom: {
    bottom: 32
  },
  top: {
    top: 32
  },
  divider: {
    background: theme.palette.primary[800],
    width: 2,
    margin: 15
  },
  title: {
    fontSize: '1em'
  },
  body: {
    marginLeft: '1em'
  },
  href: {
    marginLeft: '1em',
    width: '25em',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
}));

export {
  GalleryContentDetailSectionFirst,
  GalleryContentDetailSectionSecond
}
export default GalleryContentDetailsSection