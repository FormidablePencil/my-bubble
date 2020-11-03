import React from 'react'
import PageTemplate from '../template'
import TechBrowsingSection from '../../components/project-gallery-components/browsing-section/TechBrowsingSection'
import { useMediaQuery } from '@material-ui/core'
import MobileTechGallery from '../../components/mobile/tech-gallery-components'

function TechnologiesPage() {
  const matches = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));
  //* should be moved to seperate useHook file and move to main parent; DemoSection comp

  if (matches) {
    return (
      <PageTemplate
        contentVisualSection={
          <></>
        }
        contentDetailsSection={
          <></>
        }
        searchFeatureSection={<></>}
        browsingSection={
          <TechBrowsingSection />
        }
      />
    )
  } else {
    return (
      <MobileTechGallery />
    )
  }
}

export default TechnologiesPage

