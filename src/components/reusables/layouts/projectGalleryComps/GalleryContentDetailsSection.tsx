import React, { useEffect, useRef, useState } from 'react'
import { Grid, Typography, Chip, makeStyles } from '@material-ui/core'
import TextFormated from '../TextFormated';
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../../../store';

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
      {contentDetailsSectionDirIsRow &&
        <div className={classes.divider} />
      }
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
      className={classes.contentDetailsContainer}
      container
      direction='column'
      justify='center'
    >

      <div className={
        showLine ? `
        ${classes.line}
        ${classes.longLine}
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
            <Grid item>
              <TextFormated
                title='Platform: '
                content={
                  sortedProjectData?.general.type === 'mobile' ?
                    'android' : 'website'
                } />
            </Grid>
          </Grid>
        </Grid>
        <TextFormated title='Description: ' content={sortedProjectData?.general.description} />
      </Grid>

      <div className={
        showLine ? `
        ${classes.line}
        ${classes.shortLine}
        ${classes.bottom}
        ${classes.left}
        `: ''} />

    </Grid>
  )
}



const GalleryContentDetailSectionSecond = (
  { sortedProjectData }: { sortedProjectData }
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
    <Grid item container alignItems='center' style={{ position: 'relative' }}>

      <div className={
        showLine ? `
        ${classes.line}
        ${classes.shortLine}
        ${classes.top}
        ${classes.right}
        `: ''} />

      <Grid container item
        ref={ref => toggleShowLine(ref)}
        direction='column'>
        <TextFormated
          fontSizeParagraph={12}
          multiline={true}
          title='Frontend repo:'
          content={sortedProjectData?.links.frontend}
        />
        <TextFormated
          fontSizeParagraph={12}
          multiline={true}
          title='Server repo:'
          content={sortedProjectData?.links.server}
        />
        <Grid container>
          <Grid item>
            <Typography variant='h6'>Technologies: </Typography>
          </Grid>
          <Grid item>
            <>
              {sortedProjectData?.technologies.map(tech =>
                <Chip label={tech} variant="default" key={tech} />
              )}
            </>
          </Grid>
        </Grid>

        <div className={
          showLine ? `
        ${classes.line}
        ${classes.longLine}
        ${classes.right}
        ${classes.bottom}
        `: ''} />

      </Grid>
    </Grid>
  )
}


const useStyles = makeStyles((theme) => ({
  parentContainer: {
    height: '100%',
    padding: '15px 15px 15px 15px',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  contentDetailsContainer: {
    position: 'relative',
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
  }
}));

export {
  GalleryContentDetailSectionFirst,
  GalleryContentDetailSectionSecond
}
export default GalleryContentDetailsSection