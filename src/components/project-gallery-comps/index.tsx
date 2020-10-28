import React from 'react'
import { TabPageTemplate } from '../tabPageTemplateComps/TabPageTemplate'
import GalleryBrowsingSection from './browsing-section'
import GalleryContentDetailsSection from './details-section'
import GallerySearchFeatureSection from './GallerySearchFeatureSection'
import GalleryContentVisualSection from './visual-section'

 function ProjectGallery({ sortedProjectData, projectDataCollection }) {
  return (
    <div>
      <TabPageTemplate
        contentVisualSection={
          <GalleryContentVisualSection />
        }
        contentDetailsSection={
          <GalleryContentDetailsSection sortedProjectData={sortedProjectData} />
        }
        searchFeatureSection={
          <GallerySearchFeatureSection projectDataCollection={projectDataCollection} />
        }
        browsingSection={
          <GalleryBrowsingSection projectDataCollection={projectDataCollection} />
        }
      />
    </div>
  )
}

export default ProjectGallery