import { makeStyles } from '@material-ui/core'
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../../store'

const YoutubeVideoPlayer = ({ youtubeVideoUrl }) => {
  const modalImageSelected = useSelector((state: rootReducerT) => state.modalImageSelected)
  const classes = useStyles();

  if (modalImageSelected !== 0)
    return null
  else
    return (
      <ReactPlayer
        controls
        volume={0.1}
        className={`
            ${classes.centerAbsolutePositioning}
            ${classes.player}
            `}
        playing={false}
        width='70%'
        height='80%'
        url={youtubeVideoUrl} />
    )
}


const useStyles = makeStyles(() => ({
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
  player: {
    borderRadius: '1em',
    overflow: 'hidden',
    position: "absolute",
    zIndex: 120,
  },
}));

export default YoutubeVideoPlayer
