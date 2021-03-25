import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { tabEffectShadowProp } from "../../styles/materialUiStyles";
import useNavigateWithAnim from "../../hooks/useNavigateWithAnim";

function Navbar() {
  const classes = useStyles();
  const { pathname } = useLocation();
  // const pathNamePartial = pathName.slice(0, 5)
  const atHomeScreen = pathname === "/";

  const tabs = [
    {
      tabTitle: "Home",
      path: "/",
    },
    {
      tabTitle: "Project Gallery",
      path: "/projects",
    },
    {
      tabTitle: "Technologies",
      path: "/technologies",
    },
  ];

  // modularize
  const onClickNavigateWithAnim = useNavigateWithAnim();

  return (
    <div
      // container
      className={`${classes.navbar}
      ${pathname === "/" && classes.homeNavbar}
      not-visible-on-smDown`}
      // justify='space-between' alignContent='center'
    >
      <div className={classes.tabsContainer}>
        {tabs.map((tab) => (
          <div
            key={tab.tabTitle}
            onClick={() => onClickNavigateWithAnim(tab.path)}
            className={`${classes.tab}
              ${pathname !== "/" ? classes.tabColor : classes.tabNoColor}
            ${pathname === tab.path && classes.activeTab}`}
          >
            <Grid
              className={classes.fullHeight}
              container
              justify="center"
              alignItems="center"
            >
              <Typography color="textPrimary" variant="body1">
                {tab.tabTitle}
              </Typography>
            </Grid>
          </div>
        ))}
      </div>
      <Grid item className={classes.rightSide}>
        {!atHomeScreen && (
          <Typography className={classes.name} variant="h4">
            Dennis Aleksandrov
          </Typography>
        )}
      </Grid>
    </div>
  );
}

export default Navbar;

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "3.2em",
    zIndex: 50,
    backgroundColor: theme.palette.primary[500],
    transition: "background-color 300ms",
  },
  homeNavbar: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0)",
    transition: "background-color 300ms",
  },
  tabsContainer: {
    marginLeft: "3em",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: "transparent",
  },
  tab: {
    color: "white",
    height: "2.4em",
    width: "11em",
    borderRadius: "1em 1em 0em 0em",
    margin: "0em 0em -.5px 1em",
    opacity: 0.7,
    boxShadow: "0px -1px 0px .5px rgba(0,0,0,.2)",
    background: "rgba(0,0,0,0)",
    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
    },
  },
  tabNoColor: {
    backgroundColor: "rgba(0,0,0,0)",
    transition: "background-color 300ms 300ms",
  },
  tabColor: {
    background: theme.palette.primary[800],
    // transition: "background-color 100ms 300ms",
  },
  activeTab: {
    zIndex: 20,
    pointerEvents: "none",
    opacity: 1,
    boxShadow: tabEffectShadowProp,
    "&:hover": {
      cursor: "default",
      opacity: 1,
    },
  },
  fullHeight: {
    height: "100%",
  },
  rightSide: {
    display: "flex",
    alignItems: "flex-end",
    marginRight: 20,
  },
  name: {
    color: "white",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inline",
      fontFamily: "KaushanScript-Regular",
    },
  },
}));
