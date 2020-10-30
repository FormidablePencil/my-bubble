import React, { useState } from 'react'
import { Grid, Typography, Chip, makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux';
import TextFormated from './TextFormated';
import { rootReducerT } from '../../../store';
import TechLogo from '../../reusables/TechLogo';
import { sortedProjectDataT } from '../../../typescript'
import capitalize from 'lodash/capitalize';

const GalleryContentDetailsSection = ({ sortedProjectData }) => {
  const classes = useStyles();
  const { contentDetailsSectionDirIsRow } = useSelector((state: rootReducerT) => state)

  return (
    <Grid
      container
      direction={contentDetailsSectionDirIsRow ? 'row' : 'column'}
      wrap='nowrap'
      className={`${classes.parentContainer} scrollbar-visible`}>
      <GalleryContentDetailSectionFirst sortedProjectData={sortedProjectData} />
      {contentDetailsSectionDirIsRow && <div className={classes.divider} />}
      <div style={{marginTop: '1em'}} />
      <GalleryContentDetailSectionSecond sortedProjectData={sortedProjectData} />
    </Grid>
  )
}



function GalleryContentDetailSectionFirst(
  { sortedProjectData }:
    { sortedProjectData }) {
  const classes = useStyles();
  const { contentDetailsSectionDirIsRow } = useSelector((state: rootReducerT) => state)
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
      className={classes.relative}
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
        container
        ref={ref => toggleShowLine(ref)}
      >

        <Grid container item direction='column'>
          <Grid item>
            <TextFormated
              title='Title: '
              content={sortedProjectData?.general.title} />
          </Grid>
          <Grid item>
            <Grid item container direction='row' alignItems='center'>
              <TextFormated
                title='Platform: '
                content={sortedProjectData?.general.type === 'mobile' ?
                  'Android' : 'Web'}
              />
            </Grid>
          </Grid>
        </Grid>
        <TextFormated title='Description: ' content={sortedProjectData?.general.description} />
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



const GalleryContentDetailSectionSecond = (
  { sortedProjectData }: { sortedProjectData: sortedProjectDataT }
) => {
  const classes = useStyles();
  const [showLine, setShowLine] = useState(false)
  const { contentDetailsSectionDirIsRow } = useSelector((state: rootReducerT) => state)

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
        container item
        direction='column'
        ref={ref => toggleShowLine(ref)}
      >

        <>
          {sortedProjectData?.links &&
            Object.keys(sortedProjectData.links).map(key => sortedProjectData.links[key] &&
              <div key={key}>
                <Typography variant='h6'>
                  {capitalize(key)} repo
                </Typography>
                <Typography
                  className={classes.href}
                  variant='body1'>
                  <a
                    href={sortedProjectData.links[key]}>
                    {sortedProjectData.links[key]}
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
              {sortedProjectData?.technologies.map(techTitle =>
                <TechLogo techTitle={techTitle} />
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
}


const useStyles = makeStyles((theme) => ({
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
  }
}));

export {
  GalleryContentDetailSectionFirst,
  GalleryContentDetailSectionSecond
}
export default GalleryContentDetailsSection