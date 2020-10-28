import React, { useState, useEffect } from 'react'
import { rootReducerT } from '../../store'
import { useSelector } from 'react-redux'
import PageTemplate from '../template'
import TechBrowsingSection from '../../components/project-gallery-components/browsing-section/TechBrowsingSection'
import { useMediaQuery } from '@material-ui/core'
import MobileTechGallery from '../../components/mobile/tech-gallery-components'

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
      <PageTemplate
        contentVisualSection={
          <></>
        }
        contentDetailsSection={
          <></>
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

