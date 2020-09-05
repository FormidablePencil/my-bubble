import React, { useState, useEffect } from 'react'
import { rootReducerT } from '../store'
import { useSelector } from 'react-redux'
import { TabPageTemplate } from '../components/TabPageTemplate'
import TechContentDetailsSection from '../components/techPageComps/TechContentDetailsSection'
import TechBrowsingSection from '../components/techPageComps/TechBrowsingSection'
import TechContentVisualSection from '../components/techPageComps/TechContentVisualSection'

function TechnologiesPage() {
  const { techDataCollection, currentTechViewing } = useSelector((state: rootReducerT) => state)

  //* should be moved to seperate useHook file and move to main parent; DemoSection comp
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (typeof currentTechViewing === 'number' && techDataCollection.length !== 0) setLoading(false)
  }, [currentTechViewing, techDataCollection])

  return (
    <TabPageTemplate
      contentVisualSection={
        <TechContentVisualSection loading={loading} />
      }
      contentDetailsSection={
        <TechContentDetailsSection loading={loading} />
      }
      searchFeatureSection={<></>}
      browsingSection={
        <TechBrowsingSection />
      }
    />
  )
}

export default TechnologiesPage

