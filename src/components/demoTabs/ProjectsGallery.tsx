import React, { useEffect, useState } from 'react'
import { DemoLayout, CardLayout } from '../../pages/Demo'
import { useSelector, useDispatch } from 'react-redux'
import { rootReducerT } from '../../store'
import { Typography, Chip, Button } from '@material-ui/core'
import { sortedProjectDataT, SELECTED_SUBJECT } from '../../actions/types'
import { BorderLinearProgress } from '../../styles/materialUiStyles'
import galaxyPhoneFrame from '../../assets/galaxys8Frame.png'
import macbookFrame from '../../assets/macbookFrame.png'
import SubjectImageShowcase from './projectGallery/SubjectImageShowcase'
import { AccordionComponent, TextFormated } from './reusableComps/DemoSectionOneComps'

//Todo: add open source tab...
function ProjectsGallery() {
  const { currentSubjectViewing, projectDataCollection } = useSelector((state: rootReducerT) => state)
  const [sortedProjectData, setSortedProjectData] = useState<sortedProjectDataT>()
  const dispatch = useDispatch()

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

  const onCardClick = (techIndexInCollection) => dispatch({ type: SELECTED_SUBJECT, payload: techIndexInCollection })

  return (
    <DemoLayout
      // {/* <Typography className='projectTabHeader' variant='h4'>Projects</Typography> */}
      imageSection={
        <SubjectImageShowcase />
      }
      sectionOne={
        <>
          <AccordionComponent
            initiallyExpanded={true}
            summarySection={
              <div className='row spaceBt'>
                <Typography variant='h5'>General</Typography> {/* //* make bold */}
                <div className="statusContainer">
                  <Typography variant='h6'>Complete</Typography>
                  <BorderLinearProgress className='progressBar' color='primary' variant="determinate" value={50} />
                </div>
              </div>}
            detailsSection={
              <div className="column">
                <TextFormated title='Title:' content={sortedProjectData?.general.title} />
                <TextFormated title='Description:' content={sortedProjectData?.general.description} />
                <TextFormated title='Platform:' content={sortedProjectData?.general.type} />
              </div>} />

          <AccordionComponent
            initiallyExpanded={false}
            summarySection={
              <Typography>Github repo links & more</Typography>}
            detailsSection={
              <div className="column">
                <TextFormated title='Frontend source code' content={sortedProjectData?.links.frontend} />
                <TextFormated title='Server source code' content={sortedProjectData?.links.server} />
                <TextFormated title='Blog' content={sortedProjectData?.links.blog} />
              </div>} />

          <AccordionComponent
            initiallyExpanded={false}
            summarySection={
              <Typography>Technologies</Typography>}
            detailsSection={
              <>
                {sortedProjectData?.technologies.map(tech =>
                  //* icon if the technology on the left side
                  <Chip label={tech} variant="default" className='chip' key={tech} />
                )}
              </>} />

        </>
      }
      searchFeatureSection={ /* //* we're going to control the search input field from here */
        <div className='column'>
          {projectDataCollection.map((project, index) =>
            <>
              <Button className="searchResultBtn" onClick={() => console.log(project._id)}>{project.title}</Button>
              <div className={`line ${index % 2 === 1 && 'oddLine'}`} />
            </>
          )}
        </div>
      }

      sectionTwo={
        <>
          {projectDataCollection.map((project, index) => {
            if (!project.showInPorfolio) return null
            return (
              /*//* this is rendering all projects not filtered through any category */
              <CardLayout
                onCardClick={(techIndexInCollection) => onCardClick(index)}
                visualSection={
                  <>
                    <img className={`${project.type}Img`}
                      src={project.images && project.images[0]} alt='application' />
                    <img className={`${project.type}Frame`}
                      src={project.type === 'mobile' ? galaxyPhoneFrame : macbookFrame} alt='frame' />
                  </>
                } infoSection={
                  <div className='infoSectionCotainer'>
                    <div className="section1">
                      <Typography variant='h4' className='title'>{project.title}</Typography>
                    </div>
                    <div className="section2">
                      <BorderLinearProgress className='progressBar' color='primary' variant="determinate" value={project.status * 10} />
                      <Typography variant='body1' className=''>{project.status}0%</Typography>
                    </div>
                    <div className="section3">
                      <div>
                        <Typography variant='h5' display='inline' className='header'>Technologies:</Typography>
                      </div>
                      <div className="techContent">
                        {project.technologies.map(tech =>
                          <Chip label={tech} className='chip' />
                        )}
                      </div>
                    </div>
                  </div>
                } />
            )
          }
          )}
        </>
      }
    />
  )
}

export default ProjectsGallery
