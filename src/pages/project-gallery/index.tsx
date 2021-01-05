import React from 'react'
import MobileProjectGallery from '../../components/mobile/project-gallery-components'
import useToggleGridDirection from '../../hooks/useToggleGridDirection'
import ProjectGallery from '../../components/project-gallery-components'

//~ focus on making this component and it's sub components work

function ProjectsGalleryPage() {

  useToggleGridDirection()

  //~ rename sortedProjectData

  return (
    <>
      <ProjectGallery />
      <MobileProjectGallery />
    </>
  )
}

export default ProjectsGalleryPage