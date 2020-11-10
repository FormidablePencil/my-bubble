import React from 'react'
import PageTemplate from '../../pages/template'
import GalleryBrowsingSection from './browsing-section'
import GalleryContentDetailsSection from './details-section'
import GalleryContentVisualSection from './visual-section'

function ProjectGallery() {
  return (
    <div className='not-visible-on-smDown'>
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
    </div>
  )
}

export default ProjectGallery