import React from 'react';
import { DemoRoutes } from './Routes';
import { Provider } from 'react-redux';
import configureStore from './store';
import './styles/main.sass'

function App() {
  const store = configureStore()
  return (
    <Provider store={store}>
      <DemoRoutes />
    </Provider>
  );
}

export default App;