import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export function AbsoluteYoutubePlayIcon({ fillRed, overRideStyles }: { fillRed, overRideStyles?}) {
  const classes = useStyles();
  return (
    <YouTubeIcon
      style={{
        ...overRideStyles,
        fill: fillRed ? '#FB2300' : 'rgba(0,0,0,.8)'
      }}
      className={`
      ${classes.youtubeIcon}
      ${classes.centerAbsolutePositioning}
      `}
    />
  )
}


export function AbsoluteSearchIcon({ fillWhite, overRideStyles }: { fillWhite, overRideStyles?}) {
  const classes = useStyles();
  return (
    <SearchIcon
      style={{
        ...overRideStyles,
        fill: fillWhite ? 'rgba(0,0,0,.8)' : 'rgba(0,0,0,0)'
      }}
      className={`
        ${classes.youtubeIcon}
        ${classes.centerAbsolutePositioning}
        `}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  youtubeIcon: {
    height: 40,
    width: 40,
    top: 0,
    zIndex: 200,
  },
  centerAbsolutePositioning: {
    position: "absolute",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}));
