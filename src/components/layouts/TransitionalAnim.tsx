import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../store';
import rose from '../../assets/rose.png';
import { useLocation } from 'react-router-dom';

interface T { children, overRideClassName?: string, compHere?: any, onRender?: boolean, onRenderDelay?: number }
const TransitionalAnim = ({ children, overRideClassName, compHere, onRender, onRenderDelay }: T) => {
  const { leavingFromPage, nextLocation, prevLocation } = useSelector((state: rootReducerT) => state.leavingPageAnim)

  return (
    <div
      style={{ height: '100%' }}>
      {compHere}
      <div
        style={{ height: '100%' }}
        className={`
        ${leavingFromPage ? 'page-trans-out' : 'page-trans-in'} 
        ${overRideClassName}
        `}>
        {children}
      </div>
    </div>
  )
}

export const RoseComp = () => {
  const { leavingFromPage, nextLocation } = useSelector((state: rootReducerT) => state.leavingPageAnim)

  return (
    <div className='elementBetweenPgTrans'>
      <img className={`
        ${leavingFromPage && nextLocation === '/' ? 'opacityNone' : 'opacityFull'}
      `} src={rose} alt='rose' />
    </div>
  )
}

export default TransitionalAnim
