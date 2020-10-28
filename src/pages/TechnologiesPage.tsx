import React, { useState, useEffect } from 'react'
import { rootReducerT } from '../store'
import { useSelector } from 'react-redux'
import { TabPageTemplate } from '../components/reusables/layouts/tabPageTemplateComps/TabPageTemplate'
import TechBrowsingSection from '../components/techPageComps/TechBrowsingSection'
import TechContentVisualSection from '../components/techPageComps/TechContentVisualSection'
import { useMediaQuery } from '@material-ui/core'
import MobileTechGallery from '../components/mobile/Mobile-TechGallery'

function TechnologiesPage() {

  const { techDataCollection, currentTechViewing } = useSelector((state: rootReducerT) => state)
  const matches = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));

  //* should be moved to seperate useHook file and move to main parent; DemoSection comp
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (typeof currentTechViewing === 'number' && techDataCollection.length !== 0) setLoading(false)
  }, [currentTechViewing, techDataCollection])

  if (matches) {
    return (
      <TabPageTemplate
        contentVisualSection={
          <TechContentVisualSection loading={loading} />
        }
        contentDetailsSection={
          <></>
          /* //~ removed because uneccessary */
          // <TechContentDetailsSection loading={loading} />
        }
        searchFeatureSection={<></>}
        browsingSection={
          <TechBrowsingSection />
        }
      />
    )
  } else {
    return (
      <MobileTechGallery />
    )
  }
}

export default TechnologiesPage

