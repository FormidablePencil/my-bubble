import React from 'react'
import PageTemplate from '../../pages/template'
import TransitionalAnim, { RoseComp } from '../layouts/TransitionalAnim'
import GalleryBrowsingSection from './browsing-section'
import GalleryContentDetailsSection from './details-section'
import GalleryContentVisualSection from './visual-section'

function ProjectGallery() {
  return (
    <div className='not-visible-on-smDown'>
      <TransitionalAnim compHere={<RoseComp />}>
        <PageTemplate
          contentVisualSection={
            <GalleryContentVisualSection />
          }
          contentDetailsSection={
            <GalleryContentDetailsSection />
          }
          searchFeatureSection={
            <></>
          }
          browsingSection={
            <GalleryBrowsingSection />
          }
        />
      </TransitionalAnim>
    </div>
  )
}

export default ProjectGallery