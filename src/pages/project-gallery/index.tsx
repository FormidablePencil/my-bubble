import React from 'react'
import MobileProjectGallery from '../../components/mobile/project-gallery-components'
import useToggleGridDirection from '../../hooks/useToggleGridDirection'
import useIsTabletOrLarget from '../../hooks/useIsTabletOrLarget'
import ProjectGallery from '../../components/project-gallery-components'

//~ focus on making this component and it's sub components work

function ProjectsGalleryPage() {

  const tabletOrLarger = useIsTabletOrLarget()
  useToggleGridDirection()

  //~ rename sortedProjectData

  if (tabletOrLarger)
    return <ProjectGallery />
  else
    return <MobileProjectGallery />
}

export default ProjectsGalleryPage