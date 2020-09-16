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
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <DemoRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;