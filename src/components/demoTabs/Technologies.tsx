import React, { useState, useEffect } from 'react'
import { rootReducerT } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { AccordionComponent, TextFormated } from './reusableComps/DemoSectionOneComps'
import { Typography, Button } from '@material-ui/core'
import { SELECTED_TECH } from '../../actions/types'
import { DemoLayout } from '../../pages/Demo'

function Technologies() {
  const { techDataCollection, currentTechViewing } = useSelector((state: rootReducerT) => state)
  const dispatch = useDispatch()

  //* should be moved to seperate useHook file and move to main parent; DemoSection comp
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (typeof currentTechViewing === 'number' && techDataCollection.length !== 0) setLoading(false)
  }, [currentTechViewing, techDataCollection])

  const onClickSectionTwoElement = (techNum) => dispatch({ type: SELECTED_TECH, payload: techNum });

  return (
    <DemoLayout
      imageSection={
        <>
          {!loading &&
            <div className="techImgContainer">
              <img
                src={techDataCollection[currentTechViewing].image}
                alt={techDataCollection[currentTechViewing].technology} />
            </div>
          }
          {/* <img className='' src={} /> */}
        </>
      }
      sectionOne={
        <>
          <AccordionComponent
            initiallyExpanded={true}
            summarySection={
              <div className='row spaceBt'>
                <Typography variant='h5'>
                  {!loading &&
                    <>{techDataCollection[currentTechViewing].technology}</>
                  }
                </Typography> {/* //* make bold */}
              </div>}
            detailsSection={
              <div className="column">
                {!loading &&
                  <>
                    <TextFormated
                      title='Description'
                      // content={techDataCollection[currentTechViewing].description} />
                      content={
                        <>
                          Dolor incidunt consequuntur sed , non modi. Ipsam, accusantium commodi quod laborum officiis odio iusto eaque nobis earum magnam repudiandae id similique repellat ex saepe!
                        </>
                      }
                      content2={
                        <div style={{ display: 'block', marginTop: 10 }}>
                          Dolor incidunt consequuntur sed , non modi. Ipsam, accusantium commodi quod laborum officiis odio iusto eaque nobis earum magnam repudiandae id similique repellat ex saepe!
                      </div>
                      }
                    />
                    <TextFormated
                      title=''
                      content={techDataCollection[currentTechViewing].description} />
                  </>
                }
                <Typography variant='h6'>Links:</Typography>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => console.log('go to link')}
                >Filter all projects with tech
                </Button>
              </div>}
          />
        </>
      }
      searchFeatureSection={<></>}
      sectionTwo={
        <>
          {techDataCollection.map((tech, index) =>
            <div
              key={tech._id}
              onClick={() => onClickSectionTwoElement(index)}
              className='techCardContainer'
              id='hoverEffect'
            >
              <img src={tech.image} alt={tech.technology} />
              <div className="absoluteLayer" />
              {/* <>{tech.description} {tech.technology}</> */}
            </div>
          )}
        </>
      }
    />
  )
}

export default Technologies