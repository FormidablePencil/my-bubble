import { useState } from 'react'
import { config, useSpring } from 'react-spring'
import { swipebarHeightInPx } from '../styles/materialUiStyles'
import { isChrome, isMobile, isFirefox } from "react-device-detect";

const { innerHeight } = window

function useSwipableTab() {
  const [detailsSectionToggled, setDetailsSectionToggled] = useState(false)
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] })) //~ pass into context

  const translateSwipeableTab = () => {
    // let yValue = outerHeight - swipebarHeightInPx /* firefox */
    let yValue = innerHeight - swipebarHeightInPx /* firefox */
    if (isChrome && isMobile)
      yValue = innerHeight + 7
    if (isFirefox)
      yValue += 2

    if (!detailsSectionToggled) {
      set({ xy: [0, yValue], config: config.stiff })
    } else {
      set({ xy: [0, 0], config: config.stiff })
    }
    setDetailsSectionToggled(prev => !prev)
  }

  return { translateSwipeableTab, xy }
}

export default useSwipableTab
