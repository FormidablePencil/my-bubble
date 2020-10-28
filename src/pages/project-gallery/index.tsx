import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../../store'
import MobileProjectGallery from '../../components/mobile/project-gallery-components'
import useToggleGridDirection from '../../hooks/useToggleGridDirection'
import useIsTabletOrLarget from '../../hooks/useIsTabletOrLarget'
import ProjectGallery from '../../components/project-gallery-components'
import { sortedProjectDataT } from '../../typescript'

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


  if (tabletOrLarger)
    return <ProjectGallery
      sortedProjectData={sortedProjectData}
      projectDataCollection={projectDataCollection}
    />
  else
    return <MobileProjectGallery
      sortedProjectData={sortedProjectData} />
}

export default ProjectsGalleryPage
