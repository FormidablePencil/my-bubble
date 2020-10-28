import React from 'react'
import PageTemplate from '../../pages/PageTemplate'
import GalleryBrowsingSection from './browsing-section'
import GalleryContentDetailsSection from './details-section'
import GallerySearchFeatureSection from './GallerySearchFeatureSection'
import GalleryContentVisualSection from './visual-section'

function ProjectGallery({ sortedProjectData, projectDataCollection }) {
  return (
    <div>
      <PageTemplate
        contentVisualSection={
          <GalleryContentVisualSection />
        }
        contentDetailsSection={
          <GalleryContentDetailsSection sortedProjectData={sortedProjectData} />
        }
        searchFeatureSection={
          <></>
          // <GallerySearchFeatureSection projectDataCollection={projectDataCollection} />
        }
        browsingSection={
          <GalleryBrowsingSection projectDataCollection={projectDataCollection} />
        }
      />
    </div>
  )
}

export default ProjectGallery