import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../store'
import { sortedProjectDataT } from '../actions/types'
import { TabPageTemplate } from '../components/reusables/layouts/tabPageTemplateComps/TabPageTemplate'
import GalleryContentVisualSection from '../components/reusables/layouts/projectGalleryComps/GalleryContentVisualSection'
import GalleryBrowsingSection from '../components/reusables/layouts/projectGalleryComps/GalleryBrowsingSection'
import GalleryContentDetailsSection from '../components/reusables/layouts/projectGalleryComps/GalleryContentDetailsSection'
import GallerySearchFeatureSection from '../components/reusables/layouts/projectGalleryComps/GallerySearchFeatureSection'
import { useMediaQuery } from '@material-ui/core'
import MobileProjectGallery from '../components/mobile/Mobile-ProjectGallery'
import { swipebarHeightInEm } from '../styles/materialUiStyles'

//~ focus in making this component and it's sub components work

function ProjectsGalleryPage() {
  const { currentSubjectViewing, projectDataCollection } = useSelector((state: rootReducerT) => state)
  const [sortedProjectData, setSortedProjectData] = useState<sortedProjectDataT>()

  const tabletOrLarger = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));

  useEffect(() => {
    if (typeof currentSubjectViewing === 'number' && projectDataCollection[currentSubjectViewing]) {
      setSortedProjectData({
        status: projectDataCollection[currentSubjectViewing].status,
        general: {
          title: projectDataCollection[currentSubjectViewing].title,
          description: projectDataCollection[currentSubjectViewing].description,
          type: projectDataCollection[currentSubjectViewing].type,
        },
        links: {
          frontend: projectDataCollection[currentSubjectViewing].gitRepo.frontend,
          server: projectDataCollection[currentSubjectViewing].gitRepo.server,
          relevant: projectDataCollection[currentSubjectViewing].relevant.webApp,
          blog: projectDataCollection[currentSubjectViewing].relevant.blog,
        },
        technologies: projectDataCollection[currentSubjectViewing].technologies,
      })
    }
  }, [currentSubjectViewing, projectDataCollection])

  if (tabletOrLarger) {
    return (
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
    )
  } else {
    return (
      <MobileProjectGallery sortedProjectData={sortedProjectData} />
    )
  }
}

export default ProjectsGalleryPage
