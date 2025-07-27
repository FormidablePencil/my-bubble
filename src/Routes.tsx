import { makeStyles } from "@material-ui/core";
import React from "react";
import { Route, useLocation } from "react-router-dom";
import ImageModal from "./components/image-modal/index";
import BottomNav from "./components/layouts/BottomNav";
import Navbar from "./components/layouts/Navbar";
import TransitionalAnim from "./components/layouts/TransitionalAnim";
import useFetchAllPortfolioData from "./hooks/useFetchAllPortfolioData";
import useKeyTrigger from "./hooks/useKeyTrigger";
import HomePage from "./pages/home";
import ProjectsGalleryPage from "./pages/project-gallery/Main";
import TechnologiesPage from "./pages/tech-gallery";
import { tabEffectShadowProp } from "./styles/materialUiStyles";
import ContactPage from "./pages/contact";
import ResumesPage from "./pages/resumes";

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
            <HomePage />
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

        <Route path="/contacts">
          {/* <TransitionalAnim compHere={<RoseComp />}> */}
          <TransitionalAnim>
            <ContactPage />
          </TransitionalAnim>
          {/* </TransitionalAnim> */}
        </Route>

        <Route path="/resumes">
          <TransitionalAnim>
            <ResumesPage />
          </TransitionalAnim>
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
      "linear-gradient(180deg, rgba(100,28,21,1) 0%, rgba(196,62,62,1) 100%)",
    boxShadow: tabEffectShadowProp,
  },
  navIcon: {
    zIndex: 15,
    position: "absolute",
    top: 0,
    right: 0,
  },
}));
