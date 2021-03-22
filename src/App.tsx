import { ThemeProvider } from "@material-ui/core";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { DemoRoutes } from "./Routes";
import configureStore from "./store";
import "./styles/main.sass";
import customTheme from "./styles/materialUiStyles";

export const clickProjectGA = ({ projectName }) => {
  ReactGA.event({
    category: "project viewed",
    action: projectName,
  });
};

function App() {
  const store = configureStore();

  useEffect(() => {
    ReactGA.initialize("UA-187541969-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <Provider store={store}>
        <Router>
          <DemoRoutes />
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

//* lazy load images and large content. Remove any unnecessary rerenders
//* replace material-ui's useMediaQuery with another library. There are a few places where css media-queries are not enough
