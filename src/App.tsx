import React from 'react';
import './App.css';
import { DemoRoutes } from './pages/Demo';
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

//* supposed to be preformant way of using scroll
// export function debounce(func, wait = 5, immediate = true) {
//   let timeout;
//   return function () {
//     const context: any = this;
//     const args = arguments;
//     const later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     const callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// } // IDK WTF this is. Whatever
//* =====