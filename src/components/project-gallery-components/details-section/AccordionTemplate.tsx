import React, { useState } from "react";
import {
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";
import { AccordionCustom } from "../../../styles/materialUiStyles";
import { AiFillCaretLeft } from "react-icons/ai";

const AccordionTemplate = ({
  initiallyExpanded = false,
  summarySection,
  detailsSection,
}) => {
  const [expanded, setExpanded] = useState(initiallyExpanded);
  const classes = useStyles();
  return (
    <AccordionCustom expanded={expanded}>
      <AccordionSummary
        onClick={() => setExpanded((prev) => !prev)}
        expandIcon={<AiFillCaretLeft />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {summarySection}
      </AccordionSummary>
      <AccordionDetails
        classes={{ root: classes.accordionGeneralSection }}
      >
        {detailsSection}
      </AccordionDetails>
    </AccordionCustom>
  );
};

const useStyles = makeStyles((theme) => ({
  accordionGeneralSection: {
    backgroundColor: theme.palette.background[400],
  },
}));
export default AccordionTemplate;

