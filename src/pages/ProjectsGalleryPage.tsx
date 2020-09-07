import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../store'
import { sortedProjectDataT } from '../actions/types'
import { TabPageTemplate } from '../components/tabPageTemplateComps/TabPageTemplate'
import GalleryContentVisualSection from '../components/projectGalleryComps/GalleryContentVisualSection'
import GalleryBrowsingSection from '../components/projectGalleryComps/GalleryBrowsingSection'
import GalleryContentDetailsSection from '../components/projectGalleryComps/GalleryContentDetailsSection'
import GallerySearchFeatureSection from '../components/projectGalleryComps/GallerySearchFeatureSection'
import { useMediaQuery } from '@material-ui/core'

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
      <>mobile view</>
    )
  }
}

export default ProjectsGalleryPage
