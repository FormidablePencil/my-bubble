import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../store'
import { sortedProjectDataT } from '../actions/types'
import { TabPageTemplate } from '../components/reusables/layouts/tabPageTemplateComps/TabPageTemplate'
import GalleryContentVisualSection from '../components/reusables/layouts/projectGalleryComps/GalleryContentVisual'
import GalleryBrowsingSection from '../components/reusables/layouts/projectGalleryComps/GalleryBrowsingSection'
import GalleryContentDetailsSection from '../components/reusables/layouts/projectGalleryComps/GalleryContentDetailsSection'
import GallerySearchFeatureSection from '../components/reusables/layouts/projectGalleryComps/GallerySearchFeatureSection'
import MobileProjectGallery from '../components/mobile/Mobile-ProjectGallery'
import useToggleGridDirection from '../hooks/useToggleGridDirection'
import useIsTabletOrLarget from '../hooks/useIsTabletOrLarget'

//~ focus in making this component and it's sub components work

function ProjectsGalleryPage() {
  const {
    currentSubjectViewing,
    projectDataCollection,
    contentDetailsSectionDirIsRow
  } = useSelector((state: rootReducerT) => state)
  const [sortedProjectData, setSortedProjectData] = useState<sortedProjectDataT>()

  const tabletOrLarger = useIsTabletOrLarget()
  useToggleGridDirection()

  // update state based to the project that is selected
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
      <>
        {/* {projectDataCollection[currentSubjectViewing] &&
          <div style={{ zIndex: 5000 }}>
            <Lightbox
              medium={projectDataCollection[currentSubjectViewing].images[1]}
              large={projectDataCollection[currentSubjectViewing].images[1]}
              alt="Hello World!"
              onClose={false}
            />
          </div>
        } */}
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
      </>
    )
  } else {
    return (
      <MobileProjectGallery sortedProjectData={sortedProjectData} />
    )
  }
}

export default ProjectsGalleryPage
