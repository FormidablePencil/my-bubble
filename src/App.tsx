import React from 'react';
import './App.css';
import { DemoRoutes } from './pages/Demo';
import { Provider } from 'react-redux';
import configureStore from './store';
import './styles/main.sass'

//~ go through all components and replace sass styles where possible
function App() {
  const store = configureStore()
  return (
    <Provider store={store}>
      <DemoRoutes />
    </Provider>
  );
}

export default App;