import React from 'react'
import PageTemplate from '../../pages/template'
import GalleryBrowsingSection from './browsing-section'
import GalleryContentDetailsSection from './details-section'
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
        }
        browsingSection={
          <GalleryBrowsingSection projectDataCollection={projectDataCollection} />
        }
      />
    </div>
  )
}

export default ProjectGallery