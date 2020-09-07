import React, { useEffect, useState, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core';

function OnScrollContainer({ children }) {
  const classes = useStyles();

  const [shrunkElement, setShrunkElement] = useState(true)
  const [captureScrollPosition, setCaptureScrollPosition] = useState(null)

  const browsingSectionRef = useRef(null)

  const heightOnScroll = useSpring(shrunkElement ? {
    padding: '.5em',
    height: '5em',
  } : {
      height: '15em',
      padding: '1.5em',
    }
  )

  const onScroll = (e) => {
    // capture scrollposition when pressed card or OnScrollContainer and if scroll is 200px different then show it.
    // if (
    // e.target + 200 > captureScrollPosition ||
    // e.target - 200 > captureScrollPosition
    // ) {
    setShrunkElement(true)
    console.log(e)
    // }
  }

  const containerOnClickHandler = (e) => {
    setShrunkElement(false) //also when clicking on a card 
    // setCaptureScrollPosition(ref.target.getBounf)
    // console.log(e.getBoundingClientRect());
    console.log(browsingSectionRef.target.getBoundingClientRect());
  }


  // passdown browsingSectionRef, onScroll & containerOnClickHandler for BrowsingSection
  
  
  return (
    <animated.div
      onScroll={onScroll}
      className={classes.container}
      style={heightOnScroll}
      onClick={(e) => containerOnClickHandler(e)}
    >
      {children}
    </animated.div>
  )
}

export default OnScrollContainer


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    // width: '100%',
    zIndex: 2,
    boxShadow: '0px 7px 4px -2px rgba(0,0,0,0.3)',
    // height: '100%',
    width: '100%',
    height: '15em',
  }
}));