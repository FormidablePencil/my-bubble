import React, { useState } from 'react'
import { Typography, AccordionSummary, AccordionDetails } from "@material-ui/core"
import { AccordionCustom } from "../../../styles/materialUiStyles"
import { AiFillCaretLeft } from 'react-icons/ai'


export const TextFormated = ({ title, content, content2 }: { title, content, content2?: any }) => {
  return (
    <>
      <Typography variant='body1' display='block'>
        <Typography variant='h6' display='inline' className='spaceRightOfText'>
          {title}
        </Typography> {/* //* create and run through a function that capitalizes the first letter */}
        {content}
        {content2}
      </Typography>
    </>
  )
}

export const AccordionComponent = ({ initiallyExpanded = false, summarySection, detailsSection }) => {
  const [expanded, setExpanded] = useState(initiallyExpanded)
  return (
    <AccordionCustom expanded={expanded} className='accordionGeneralSection'>
      <AccordionSummary
        onClick={() => setExpanded(prev => !prev)}
        expandIcon={<AiFillCaretLeft className='rotate90' />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {summarySection}
      </AccordionSummary>
      <AccordionDetails className='accordionDetails'>
        {detailsSection}
      </AccordionDetails>
    </AccordionCustom>
  )
}