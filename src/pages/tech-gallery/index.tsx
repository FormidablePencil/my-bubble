import React from 'react'
import PageTemplate from '../template'
import TechBrowsingSection from '../../components/project-gallery-components/browsing-section/TechBrowsingSection'
import MobileTechGallery from '../../components/mobile/tech-gallery-components'
import { useMediaQuery } from '@material-ui/core'


function TechnologiesPage() {
  const matches = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));
  // const matches = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));
  //* should be moved to seperate useHook file and move to main parent; DemoSection comp

  return (
    <>
      <div className='not-visible-on-smDown'>
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
      </div>
      <MobileTechGallery />
    </>
  )
}

export default TechnologiesPage

