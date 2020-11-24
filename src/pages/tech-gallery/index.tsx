import React from 'react'
import PageTemplate from '../template'
import TechBrowsingSection from '../../components/project-gallery-components/browsing-section/TechBrowsingSection'
import MobileTechGallery from '../../components/mobile/tech-gallery-components'
import TransitionalAnim, { RoseComp } from '../../components/layouts/TransitionalAnim'

function TechnologiesPage() {

  return (
    <>
      <div className="not-visible-on-smDown">
        <TransitionalAnim compHere={<RoseComp />}>
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
        </TransitionalAnim>
      </div>
      <TransitionalAnim>
        <MobileTechGallery />
      </TransitionalAnim>
    </>
  )
}

export default TechnologiesPage

