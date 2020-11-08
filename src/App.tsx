import React from 'react';
import { DemoRoutes } from './Routes';
import { Provider } from 'react-redux';
import configureStore from './store';
import './styles/main.sass'
import { ThemeProvider } from '@material-ui/core';
import customTheme from './styles/materialUiStyles'

function App() {
  const store = configureStore()

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
//* replace material-ui's useMediaQuery with another library