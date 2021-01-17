import React, { useEffect } from 'react'
import { DemoRoutes } from './Routes';
import { Provider } from 'react-redux';
import configureStore from './store';
import './styles/main.sass'
import { ThemeProvider } from '@material-ui/core';
import customTheme from './styles/materialUiStyles'
import ReactGA from 'react-ga';


export const clickProjectGA = ({ projectName }) => {
  ReactGA.event({
    category: "projectClicked",
    action: projectName,
  });
}

function App() {
  const store = configureStore()

  useEffect(() => {
    ReactGA.initialize('UA-187541969-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <ThemeProvider theme={customTheme}>
      <Provider store={store}>
        <DemoRoutes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;

//* lazy load images and large content. Remove any unnecessary rerenders
//* replace material-ui's useMediaQuery with another library. There are a few places where css media-queries are not enough