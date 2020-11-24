import React from 'react'
import PageTemplate from '../template'
import TechBrowsingSection from '../../components/project-gallery-components/browsing-section/TechBrowsingSection'
import MobileTechGallery from '../../components/mobile/tech-gallery-components'

function TechnologiesPage() {

  return (
    <>
      <div className="not-visible-on-smDown scrollOnSmDown">
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
      </div>
      <MobileTechGallery />
    </>
  )
}

export default TechnologiesPage

