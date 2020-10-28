import React from 'react'
import AccordionTemplate from './AccordionTemplate'
import { Typography, Button } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../../../store'
import TextFormated from './TextFormated'

function TechContentDetailsSection({ loading }) {
  const { techDataCollection, currentTechViewing } = useSelector((state: rootReducerT) => state)

  return (
    <AccordionTemplate
      initiallyExpanded={true}
      summarySection={ /* //! modularize */
        <div>
          <Typography variant='h5'>
            {!loading &&
              <>{techDataCollection[currentTechViewing].technology}</>
            }
          </Typography> {/* //* make bold */}
        </div>}
      detailsSection={
        <div>
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
          >Filter all projects with tech</Button>
        </div>}
    />
  )
}

export default TechContentDetailsSection
