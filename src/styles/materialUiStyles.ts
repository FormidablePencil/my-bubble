import { createMuiTheme, Grid, Container } from "@material-ui/core";
import { withStyles, createStyles, LinearProgress, Theme } from "@material-ui/core";
import MuiAccordion from '@material-ui/core/Accordion';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF4F4',
      200: '#FFBDBD',
      300: '#8D202E',
      100: '#A92637',
      400: '#E15C5C',
      // 96476E
      500: '#460B0F',
      600: '#EC837F',
      700: '#8D202E',
      800: '#A92637',
      900: '#FFF4F4',
    },
    secondary: {
      main: '#3C4068',
    },
    background: {
      default: '#EF8080',

    },
    text: {
      primary: '#FFFBF2',
      secondary: '#FFFBF2',
    }
  },

  typography: {
    allVariants: {
      fontFamily: 'JosefinSans-Medium',
      color: '#FFFBF2'
    },
    h5: {
      fontSize: '1.2em',
      lineHeight: 1,
    },
    h6: {
      color: '#FFD2D2'
    },
    body1: {
      color: '#ffffff'
    },
  }
})

export const navbarHeight = '3.2em'
export const tabEffectShadowProp = '0px -4px 3px 1px rgba(0,0,0,0.2)'
export const swipebarHeightInEm = '3em'
export const swipebarHeightInPx = 48
export const imageBoardColor = 'rgba(0,0,0,.3)'
export const accordionTitleColor = '#484EAA'

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

export const ContainerFullHeight = withStyles({
  root: {
    height: '100%',
    display: 'flex',
  }
})(Container);

export default customTheme
