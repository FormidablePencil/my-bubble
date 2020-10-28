import React from 'react'
import { swipebarHeightInEm } from '../../styles/materialUiStyles'

function CompensateForSwipableTabHeight({ moreHeight }: { moreHeight?}) {
  return (
    <>
      <div style={{ height: swipebarHeightInEm, width: '100%' }}></div>
      {moreHeight &&
        <div style={{ height: moreHeight, width: '100%' }}></div>
      }
    </>
  )
}

export default CompensateForSwipableTabHeight
