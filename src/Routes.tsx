import { makeStyles } from "@material-ui/core";
import React from "react";
import { Route, useLocation } from "react-router-dom";
import ImageModal from "./components/image-modal/index";
import BottomNav from "./components/layouts/BottomNav";
import Navbar from "./components/layouts/Navbar";
import TransitionalAnim from "./components/layouts/TransitionalAnim";
import useFetchAllPortfolioData from "./hooks/useFetchAllPortfolioData";
import useKeyTrigger from "./hooks/useKeyTrigger";
import ContactsPage from "./pages/contacts";
import ProjectsGalleryPage from "./pages/project-gallery";
import TechnologiesPage from "./pages/tech-gallery";
import { tabEffectShadowProp } from "./styles/materialUiStyles";

/* The tech and projects are too abrupt when the page is initially redirected there especially the projects page. 
the gallaxy frame does some funky business. */
/* change theme perhaps */

/* make it loop: useNavigateProjects */
export function DemoRoutes() {
  const classes = useStyles();
  const { pathname } = useLocation();

  useFetchAllPortfolioData();
  useKeyTrigger();

  return (
    <div className={classes.container}>
      <div className="not-visible-on-mdDown">
        <ImageModal />
      </div>
      <Navbar />

      <div
        style={{ position: "relative" }}
        className={`
            ${classes.contentContainer}
            ${pathname !== "/" && "fixed-mobile-100vh"}
          `}
      >
        <Route exact path="/">
          <TransitionalAnim>
            <ContactsPage />
          </TransitionalAnim>
        </Route>
        <Route path="/projects">
          {/* scrollOnSmDown */}
          <ProjectsGalleryPage />
        </Route>
        <Route path="/technologies">
          {/* <TransitionalAnim compHere={<RoseComp />}> */}
          <TechnologiesPage />
          {/* </TransitionalAnim> */}
        </Route>

        <div className="not-visible-on-mdUp">
          <BottomNav />
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
  },
  contentContainer: {
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    background:
      "linear-gradient(180deg, rgba(169,38,55,1) 0%, rgba(134,17,27,1) 100%)",
    boxShadow: tabEffectShadowProp,
  },
  navIcon: {
    zIndex: 15,
    position: "absolute",
    top: 0,
    right: 0,
  },
}));
