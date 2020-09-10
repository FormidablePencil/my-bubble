import React, { useState } from 'react'
import { AccordionSummary, AccordionDetails, makeStyles } from "@material-ui/core"
import { AccordionCustom } from "../../../styles/materialUiStyles"
import { AiFillCaretLeft } from 'react-icons/ai'

export const AccordionComponent = ({ initiallyExpanded = false, summarySection, detailsSection }) => {
  const [expanded, setExpanded] = useState(initiallyExpanded)
  const classes = useStyles()
  return (
    <AccordionCustom expanded={expanded} className={classes.accordionGeneralSection}>
      <AccordionSummary
        onClick={() => setExpanded(prev => !prev)}
        expandIcon={<AiFillCaretLeft />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {summarySection}
      </AccordionSummary>
      <AccordionDetails>
        {detailsSection}
      </AccordionDetails>
    </AccordionCustom>
  )
}


const useStyles = makeStyles((theme) => ({
  accordionGeneralSection: {
  
  }
}));