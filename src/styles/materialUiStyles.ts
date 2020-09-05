import { createMuiTheme, Grid } from "@material-ui/core";
import { withStyles, createStyles, LinearProgress, Theme } from "@material-ui/core";
import MuiAccordion from '@material-ui/core/Accordion';

const customTheme = createMuiTheme({
  palette: {
    // primary: {
    // },
    // secondary: {
    // },
    text: {
      // primary: '#340373',
      primary: '#323232',
      secondary: '#222'
    }
  },
  typography: {
    // body1: { fontFamily: '' },
  }
})

export default customTheme

export const AccordionCustom = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

export const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      width: '50%',
      margin: '0em 1em 0em 3em',
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }),
)(LinearProgress);

export const GridFlex = withStyles({
  root: {
    flex: 1
  }
})(Grid);