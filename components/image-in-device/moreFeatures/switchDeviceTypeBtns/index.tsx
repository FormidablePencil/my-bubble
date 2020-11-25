import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineDesktop } from 'react-icons/ai';
import './index.sass';

interface T {
  iconSize: number
  whatIconsToDisplay: 'both' | 'mobile' | 'desktop'
  isMobile: boolean
  onClickHandler: () => void
}

const SwitchDeviceTypeBtns = ({ iconSize, whatIconsToDisplay, isMobile, onClickHandler }: T) =>
  <div className='switchDeviceTypeBtns'
    onClick={onClickHandler}>
    {(whatIconsToDisplay === 'both' || whatIconsToDisplay === 'mobile') &&
      <BsPhone
        color={isMobile ? 'white' : 'grey'} size={iconSize} style={{ margin: '0 0 1em 1em', zIndex: 20 }} />
    }
    {(whatIconsToDisplay === 'both' || whatIconsToDisplay === 'desktop') &&
      <AiOutlineDesktop
        color={!isMobile ? 'white' : 'grey'} size={iconSize} style={{ margin: '0 0 0 1em', zIndex: 200 }} />
    }
  </div>

export default SwitchDeviceTypeBtns