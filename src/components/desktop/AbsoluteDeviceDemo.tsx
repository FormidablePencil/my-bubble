import { makeStyles, useMediaQuery } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../store';
import DeviceFrameAndImg from '../reusables/DeviceFrameAndImg';

function AbsoluteDeviceDemo() {
  const { projectDataCollection } = useSelector((state: rootReducerT) => state)
  const md = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  const sm = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))

  const leftStyles: any = {
    position: "absolute",
    left: md ? '5%' : '10%',
    top: "33%",
    transform: md ? 'scale(1)' : 'scale(1.5)',
    opacity: sm ? 0 : 1
  }
  const rightStyles: any = {
    position: "absolute",
    right: md ? '5%' : '10%',
    top: "30%",
    transform: md ? 'scale(1)' : 'scale(1.5)',
    opacity: sm ? 0 : 1
  }

  return (
    <div>
      <div style={leftStyles}>
        <DeviceFrameAndImg projectContent={projectDataCollection[4]} />
      </div>
      <div style={rightStyles}>
        <DeviceFrameAndImg projectContent={projectDataCollection[2]} />
      </div>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  demoDeviceLeft: {
  },
  demoDeviceRight: {
  }
}));

export default AbsoluteDeviceDemo